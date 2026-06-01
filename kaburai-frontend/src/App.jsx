import {Route, Routes} from "react-router-dom";
import UploadPage from "./pages/UploadPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import AnalyzingPage from "./pages/AnalyzingPage.jsx";


function App() {
    return (
        <div className="min-h-screen bg-[#0F111A]">
            <Routes>
                <Route path={'/'} element={<UploadPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
                <Route path={'/forgot-password'} element={<ForgotPasswordPage/>}/>
                <Route path={'/reset-password'} element={<ResetPasswordPage/>}/>
                <Route path={'/analyzing'} element={<AnalyzingPage/>}/>
                <Route path={'/result'} element={<ResultPage/>}/>
            </Routes>
        </div>
    );
}

export default App;