import {Route, Routes} from "react-router-dom";
import UploadPage from "./pages/UploadPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";


function App() {
    return (
        <div className="min-h-screen bg-[#0F111A]">
            <Routes>
                <Route path={'/'} element={<UploadPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
                <Route path={'/reset-password'} element={<ResetPasswordPage/>}/>
                <Route path={'/result'} element={<ResultPage/>}/>
            </Routes>
        </div>
    );
}

export default App;