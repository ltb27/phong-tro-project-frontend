import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "@/routes";


function App() {
    return (
        <div className={"h-screen w-screen bg-primary"}>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
