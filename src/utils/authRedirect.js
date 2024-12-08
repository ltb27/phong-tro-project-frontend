import {jwtDecode} from "jwt-decode";
import {redirect} from "react-router-dom";
import {paths} from "@/utils/constants";

export const redirectAuthenticatedUser = () => {
    const isAuthenticated = checkAuthentication();

    if (isAuthenticated) {
        return redirect(paths.DASHBOARD);
    }

    return null;
};

const checkAuthentication = () => {
    const token = localStorage.getItem('access_token');

    return !!token && !isTokenExpired(token);
};

const isTokenExpired = (token) => {
    try {
        const decoded = jwtDecode(token);
        return decoded.exp < Date.now() / 1000;
    } catch (error) {
        return true;
    }
};