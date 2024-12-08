import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {ProtectedLayout, PublicLayout} from "@/layouts";
import {HomePage, LoginPage, RegisterPage} from "@/pages/public";
import {DashboardPage, ProfilePage} from "@/pages/protected";
import {paths} from "@/utils/constants.js";
import NotFoundPage from "@/pages/common/NotFoundPage.jsx";
import {redirectAuthenticatedUser} from "@/utils/authRedirect.js";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<PublicLayout/>}>
                <Route index path={paths.HOME} element={<HomePage/>}/>
                <Route loader={redirectAuthenticatedUser} path={paths.LOGIN} element={<LoginPage/>}/>
                <Route path={paths.REGISTER} element={<RegisterPage/>}/>
            </Route>
            <Route
                element={<ProtectedLayout/>}
            >
                <Route path={paths.DASHBOARD} element={<DashboardPage/>}/>
                <Route path={paths.PROFILE} element={<ProfilePage/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
        </>
    )
)

export default router;