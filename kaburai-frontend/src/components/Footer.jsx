const Footer = () => {
    return (
        <footer className="border-t border-slate-800 bg-[#0B0D14]">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-2xl font-extrabold text-white">
                            NextStep
                            <span className="text-[#00CFFF]">.Ai</span>
                        </h3>

                        <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                            Platform berbasis AI untuk membantu menganalisis CV,
                            menemukan skill gap, dan menyusun roadmap karier yang
                            lebih terarah.
                        </p>
                    </div>
                </div>

                <div
                    className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 text-center md:flex-row md:items-center md:justify-between">
                    <p>
                        © {new Date().getFullYear()} NextStep.Ai. All rights reserved.
                    </p>

                    <p>
                        Dibuat Oleh Tim Capstone - CC26-PSU143
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;