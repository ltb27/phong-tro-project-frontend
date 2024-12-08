import {Navigate, Outlet} from "react-router-dom";
import {useIsAuthenticated} from "@/hooks";
import {paths} from "@/utils/constants.js";

export default function ProtectedLayout() {
    const isAuthenticated = useIsAuthenticated();
    return (
        isAuthenticated ? <div className="flex justify-center items-center">
            // header
            // navigation
            // outlet
            <Outlet/>
            // footer
        </div> : <Navigate to={paths.LOGIN} replace/>

    )
}