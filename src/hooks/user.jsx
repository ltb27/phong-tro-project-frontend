import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "@/store/slices/authSlice.js";

export default function useUser() {
    return useSelector(state => state.user);
}

export const useIsAuthenticated = () => {
    const user = useUser();
    return user.isAuthenticated;
}

export const useLogOutUser = () => {
    const dispatch = useDispatch();
    return () => {
        dispatch(logout());
    }
}

export const useLoginUser = () => {
    const dispatch = useDispatch();
    return (userData) => {
        dispatch(login(userData));
    }
}