import axios from "axios";
import dayjs from "dayjs";

// constants
const BASE_URL = "http://localhost:7100";
const LOGIN_URL = "api/auth/admin/login";
const REFRESH_TOKEN_URL = "api/auth/admin/refresh-token";
const TIMEOUT = 10000;

const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    headers: {
        "Content-Type": "application/json",
    },
});

// check token expired
const isTokenExpired = (expirationDate) => {
    if (!expirationDate) {
        return true;
    }

    return dayjs().isAfter(expirationDate);
}

const setAuthData = (data) => {
    authData = {
        token: data.token,
        expiration: data.expiration,
        refreshTokenExpiration: data.refreshTokenExpiration,
    };

    localStorage.setItem("authData", JSON.stringify(authData));
}

// load auth data
const loadAuthData = () => {
    const data = localStorage.getItem("authData");

    if (data) {
        authData = JSON.parse(data);
    }
}

// initialize auth data
loadAuthData();

// variables to track the token and its refresh
let isTokenRefreshing = false;
let refreshTokenPromise = null;

// store auth data
let authData = {
    token: null,
    expiration: null,
    refreshTokenExpiration: null,
};

// request interceptor
api.interceptors.request.use(
    function (config) {
        // do not add access token to login and refresh token api
        if (config.url === LOGIN_URL || config.url === REFRESH_TOKEN_URL) {
            return config;
        }

        // add token to request header
        if (authData.token) {
            config.headers.Authorization = `Bearer ${authData.token}`;
            config.headers["Request-Time"] = new Date().getTime();
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

const logout = () => {
    localStorage.removeItem("authData");
    window.location.href = "/login";
}

// response interceptor
api.interceptors.response.use(
    function (response) {
        // if response from login api
        if (response.config.url === LOGIN_URL) {
            const {token, expiration, refreshTokenExpiration} = response.data;

            // set auth data
            setAuthData({token, expiration, refreshTokenExpiration});
        }
        return response.data;
    },
    async function (error) {
        if (error.response) {
            const originalRequest = error.config;
            if (error.response.status !== 401 && originalRequest._retry) {
                logout();
                return Promise.reject(error);
            }

            if (isTokenExpired(authData.refreshTokenExpiration)) {
                logout();
                return Promise.reject(error);
            }

            // handle token refresh process
            return new Promise(function (resolve, reject) {
                if (!isTokenRefreshing) {
                    isTokenRefreshing = true;
                    originalRequest._retry = true;

                    refreshTokenPromise = api.post(REFRESH_TOKEN_URL)
                        .then(response => {
                                const {token, expiration, refreshTokenExpiration} = response.data;
                                setAuthData({token, expiration, refreshTokenExpiration});
                                return token;
                            }
                        )
                        .catch(error => {
                            logout();
                            throw error;
                        })
                        .finally(() => {
                            isTokenRefreshing = false;
                            refreshTokenPromise = null;
                        });
                }

                if (refreshTokenPromise) {
                    return refreshTokenPromise
                        .then(token => {
                            originalRequest.headers.Authorization = `Bearer ${token}`;
                            return resolve(api(originalRequest));
                        })
                        .catch(error => reject(error));
                } else {
                    logout();
                    return reject(error);
                }
            });
        } else if (error.request) {
            console.error('Network Error');
        } else {
            console.error('Error', error.message);
        }
        return Promise.reject(error);
    }
);

export default api;