import {Footer, Header, Navigation} from "@/containers/public";
import {Outlet, useLocation} from "react-router-dom";
import {paths} from "@/utils/constants.js";

export default function PublicLayout() {
    const location = useLocation();
    const pathname = location.pathname;

    const noFooterPaths = [paths.LOGIN, paths.REGISTER];

    const isNoFooter = noFooterPaths.some(path => pathname.includes(path));

    return (
        <>
            <div className="bg-white sticky top-0 z-20">
                <Header/>
                <Navigation/>
            </div>
            <Outlet/>
            {!isNoFooter && <Footer/>}
        </>
    )
}