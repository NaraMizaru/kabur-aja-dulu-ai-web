import {Navbar} from "../components/Navbar.jsx";
import AboutCard from "../components/AboutCard.jsx";
import Footer from "../components/Footer.jsx";
import {useNavigate} from "react-router-dom";
import CvUploadBox from "../components/CvUploadBox.jsx";
import {extractorService} from "../service/extractor.service.js";
import { useEffect } from "react";

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
    
    useEffect(() => {
      extractorService.health()
    }, [])

    const handleAnalyze = (file) => {
        navigate("/analyzing", {
            state: {
                file,
                language: "Indonesian",
            },
        });
    };

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

                            <CvUploadBox onAnalyze={handleAnalyze}/>
                        </div>
                    </div>
                </section>

                <section className="border-t border-slate-800 px-6 py-24 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto mb-14 max-w-3xl text-center">
                            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                                Kenapa{" "}
                                <span className="text-[#00CFFF]">
                                    NextStep?
                                </span>
                            </h2>

                            <p className="text-lg leading-relaxed text-slate-400">
                                Banyak orang bingung harus belajar apa setelah membuat CV.
                                NextStep membantu menganalisis kemampuanmu dan memberikan
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