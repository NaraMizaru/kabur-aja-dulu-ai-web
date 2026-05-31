import {Navbar} from "../components/Navbar.jsx";
import AboutCard from "../components/AboutCard.jsx";
import Footer from "../components/Footer.jsx";
import {useNavigate} from "react-router-dom";

const aboutFeature = [
    {
        logo: "📄",
        title: "Analisis CV",
        description: "AI membaca CV kamu dan mengidentifikasi skill, pengalaman, serta potensi yang sudah dimiliki.",
    },
    {
        logo: "📊",
        title: "Skill Gap Detection",
        description: "Temukan skill yang masih kurang dibandingkan standar industri dan posisi impianmu.",
    },
    {
        logo: "🚀",
        title: "Roadmap Karier",
        description: "Dapatkan langkah belajar yang terstruktur lengkap dengan prioritas yang harus dikuasai terlebih dahulu."
    }
]

const UploadPage = () => {
    const navigate = useNavigate();

    const handleResultPage = () => {
        navigate("/result");
    }

    return (
        <div className="min-h-screen bg-[#0F111A] text-white font-sans antialiased">
            <Navbar/>

            <main>
                <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-28">
                    <div
                        className="absolute left-1/2 top-20 -z-10 h-105 w-105 -translate-x-1/2 rounded-full bg-[#00CFFF]/10 blur-3xl"/>

                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto max-w-5xl text-center">
                            <h1 className="mx-auto mb-6 max-w-5xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                                Ubah CV Jadi{" "}
                                <span
                                    className="bg-linear-to-r from-[#00CFFF] to-[#00E0FF] bg-clip-text text-transparent">
                                    Roadmap Karier
                                </span>{" "}
                                Berbasis AI.
                            </h1>

                            <p className="mx-auto mb-12 max-w-3xl text-lg font-medium leading-relaxed text-slate-400 md:text-xl">
                                Gunakan kekuatan Data Science untuk membedah skill gap kamu
                                dan temukan jalur belajar yang paling efisien.
                            </p>

                            <div
                                onClick={() => handleResultPage()}
                                className="group mx-auto w-full max-w-4xl cursor-pointer rounded-[40px] border-2 border-dashed border-slate-700 bg-[#1E2533]/40 p-10 backdrop-blur-sm transition-all duration-300 hover:border-[#00CFFF] hover:bg-[#1E2533]/60 md:p-16"
                            >
                                <div className="flex flex-col items-center">
                                    <div
                                        className="mb-6 rounded-full bg-[#00CFFF]/10 p-6 text-slate-500 transition-colors group-hover:text-[#00CFFF]">
                                        <svg
                                            width="72"
                                            height="72"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="17 8 12 3 7 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </div>

                                    <h3 className="mb-2 text-xl font-semibold text-slate-100 group-hover:text-white">
                                        Upload CV Kamu
                                    </h3>

                                    <p className="text-base text-slate-500 group-hover:text-slate-400 md:text-lg">
                                        Seret dan letakkan file PDF di sini atau klik untuk mencari file
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-t border-slate-800 px-6 py-24 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto mb-14 max-w-3xl text-center">
                            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                                Kenapa{" "}
                                <span className="text-[#00CFFF]">
                                    KaburAjaDulu AI?
                                </span>
                            </h2>

                            <p className="text-lg leading-relaxed text-slate-400">
                                Banyak orang bingung harus belajar apa setelah membuat CV.
                                KaburAjaDulu AI membantu menganalisis kemampuanmu dan memberikan
                                roadmap belajar yang jelas berdasarkan target karier.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {aboutFeature.map((item, i) => (
                                <AboutCard key={i} logo={item.logo} title={item.title} description={item.description}/>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer/>
        </div>
    );
};

export default UploadPage;