import {Link, useNavigate} from "react-router-dom";
import {useAuthStore} from "../store/auth.store.js";
import {authService} from "../service/auth.service.js";

export const Navbar = () => {
    const navigate = useNavigate();
    const {accessToken, user, clearAuth} = useAuthStore((state) => state);

    const isAuth = Boolean(accessToken);
    const handleLogout = async () => {
        await authService.logout(accessToken);
        clearAuth();
        navigate('/login');
    }

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-[#0F111A]/80 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
                <Link to="/" className="text-base font-extrabold tracking-tight text-white sm:text-xl">
                    NextStep<span className="text-[#00CFFF]">.Ai</span>
                </Link>

                <div className="flex items-center gap-2 sm:gap-3">
                    {isAuth ? (
                        <>
                            <span className="text-sm font-medium text-slate-300 sm:text-base">
                                {user.full_name}
                            </span>

                            <button
                                onClick={handleLogout}
                                className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-[#00CFFF] hover:text-white sm:px-5 sm:text-sm"
                            >
                                Keluar
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-[#00CFFF] hover:text-white sm:px-5 sm:text-sm"
                            >
                                Masuk
                            </Link>

                            <Link
                                to="/register"
                                className="rounded-full bg-[#00CFFF] px-4 py-2 text-xs font-bold text-[#0F111A] transition hover:bg-[#00E0FF] sm:px-5 sm:text-sm"
                            >
                                Daftar
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};