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
                },
                Tabs: {
                    colorPrimary: colors.red,
                    algorithm: true,
                    activeColorPrimary: colors.red,
                },
                Radio: {
                    colorPrimary: colors.red,
                    algorithm: true,
                },
                Form: {
                    itemMarginBottom: '12px',
                }
            }
        }} token={{
            colorPrimary: colors.red,
            colorSuccess: colors.green,
            colorWarning: colors.orange,
            colorError: colors.red,
        }}>
            <div className={"w-screen h-screen bg-primary overflow-scroll"}>
                <RouterProvider router={router}/>
            </div>
        </ConfigProvider>
    )
}

export default App
