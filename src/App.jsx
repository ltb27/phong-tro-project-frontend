import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "@/routes";
import {ConfigProvider} from "antd";
import {colors} from "@/utils/constants";


function App() {
    return (
        <ConfigProvider theme={{
            components: {
                Button: {
                    colorPrimary: colors.red,
                    algorithm: true,
                }
            }
        }} token={{
            colorPrimary: colors.red,
            colorInfo: colors.blue,
            colorSuccess: colors.green,
            colorWarning: colors.orange,
            colorError: colors.red,
        }}>
            <div className={"h-screen w-screen bg-primary"}>
                <RouterProvider router={router}/>
            </div>
        </ConfigProvider>
    )
}

export default App
