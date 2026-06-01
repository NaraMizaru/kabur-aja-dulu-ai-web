import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {extractorService} from "../service/extractor.service.js";

const AnalyzingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const analyze = async () => {
            const file = location.state?.file;
            const language = location.state?.language || "Indonesian";

            if (!file) {
                navigate("/");
                return;
            }

            try {
                const response = await extractorService.extract({
                    file,
                    language,
                });

                navigate("/result", {
                    state: response.data.data,
                    replace: true,
                });
            } catch (error) {
                navigate("/", {
                    state: {
                        error:
                            error.response?.data?.message ||
                            "Gagal menganalisis CV. Silakan coba lagi.",
                    },
                    replace: true,
                });
            }
        };

        analyze();
    }, [location.state, navigate]);

    return (
        <div
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F111A] px-6 text-white">
            <div
                className="absolute left-1/2 top-24 -z-10 h-105 w-105 -translate-x-1/2 rounded-full bg-[#00CFFF]/10 blur-3xl"/>

            <div
                className="w-full max-w-md rounded-[36px] border border-slate-800 bg-[#171B26]/90 p-10 text-center shadow-2xl shadow-black/30">
                <div
                    className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#00CFFF]/30 bg-[#00CFFF]/10">
                    <div
                        className="h-12 w-12 animate-spin rounded-full border-4 border-[#00CFFF]/20 border-t-[#00CFFF]"/>
                </div>

                <h1 className="mb-3 text-3xl font-extrabold">
                    Menganalisis CV...
                </h1>

                <p className="text-sm leading-relaxed text-slate-400">
                    AI sedang membaca CV kamu, mengekstrak skill, mengecek skill gap,
                    dan menyusun roadmap karier terbaik.
                </p>

                <div className="mt-8 space-y-3 text-left text-sm text-slate-400">
                    <div className="rounded-2xl border border-slate-800 bg-[#0F111A]/70 p-4">
                        📄 Mengekstrak informasi CV
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-[#0F111A]/70 p-4">
                        📊 Menganalisis skill gap
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-[#0F111A]/70 p-4">
                        🚀 Membuat roadmap karier
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyzingPage;