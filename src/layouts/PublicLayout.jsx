import {Footer, Header, Navigation} from "@/containers/public";
import {Outlet} from "react-router-dom";

export default function PublicLayout() {
    return (
        <>
            <div className="bg-white text-body shadow-sm sticky-top z-1021">
                <Header/>
                <Navigation/>
            </div>
            <Outlet/>
            <Footer/>
        </>
    )
}