import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-[#0F111A]/80 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
                <Link to="/" className="text-base font-extrabold tracking-tight text-white sm:text-xl">
                    KaburAjaDulu<span className="text-[#00CFFF]">.Ai</span>
                </Link>

                <div className="flex items-center gap-2 sm:gap-3">
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
                </div>
            </nav>
        </header>
    );
};