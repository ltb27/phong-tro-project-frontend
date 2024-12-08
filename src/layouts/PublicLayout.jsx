import {Footer, Header, Navigation} from "@/containers/public";
import {Outlet} from "react-router-dom";

export default function PublicLayout() {
    return (
        <div className="flex justify-center items-center">
            <Header/>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </div>
    )
}