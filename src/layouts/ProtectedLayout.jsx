import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useIsAuthenticated} from "@/hooks";
import {paths} from "@/utils/constants.js";

export default function ProtectedLayout() {
    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate(paths.LOGIN);
        }
    }, [isAuthenticated])

    return (
        <div className="flex justify-center items-center">
            // header
            // navigation
            // outlet
            <Outlet/>
            // footer
        </div>
    )
}