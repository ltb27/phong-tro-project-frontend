import {createRoot} from 'react-dom/client'
import './index.css'
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from "./store/store.js"
import {Provider} from "react-redux";
import Loading from "./components/Loading.jsx";
import App from "@/App.jsx";


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={<Loading/>} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
)
