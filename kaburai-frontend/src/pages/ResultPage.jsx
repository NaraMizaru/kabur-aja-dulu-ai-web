import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import Footer from "../components/Footer.jsx";

const dummyResult = {
    filename: "1780240457490-CV Nadhif Musyafa Alfarel.pdf",
    role: "Software Engineering",
    skill_extracted: ["Git", "Kotlin", "Laravel", "MySQL", "Problem Solving", "SQL"],
    gap_analysis: {
        match_score: 7,
        skills_dimiliki: ["SQL"],
        top_skill_tidak_dimiliki: [
            "Python",
            "Communication",
            "Machine Learning",
            "R",
            "AWS",
            "Excel",
            "Tableau",
            "Agile",
            "Azure",
            "Spark",
            "ETL",
            "Power BI",
            "Project Management",
            "Java",
        ],
    },
    roadmap: {
        1: "Strengthen Kotlin fundamentals and explore Android Jetpack components. (2 weeks)",
        2: "Deepen Laravel knowledge: explore Eloquent ORM and RESTful API creation. (3 weeks)",
        3: "Master advanced SQL: learn indexing, optimization, and transaction management. (2 weeks)",
        4: "Build a full-stack project using Kotlin/Spring Boot (backend) and Flutter (frontend). (6 weeks)",
        5: "Learn basic cloud deployment (e.g., Heroku, AWS Elastic Beanstalk) for your projects. (2 weeks)",
        6: "Contribute to open-source projects, focusing on bug fixes and small features. (Ongoing)",
        7: "Prepare for technical interviews: practice coding challenges on LeetCode/HackerRank. (Ongoing)",
    },
    cv_feedback: {
        ats_score: 0,
        readability_score: 0,
        ats_feedback:
            "CV ini memiliki potensi yang baik untuk di-parse oleh ATS karena menggunakan struktur yang jelas dan umum. Namun, beberapa frasa dalam 'Profil Singkat' dan 'Pengalaman' bisa lebih spesifik dan berorientasi pada kata kunci teknis yang sering dicari ATS.",
        layout_feedback:
            "Tata letak CV ini profesional, bersih, dan mudah dibaca. Pembagian kolom yang jelas antara informasi pribadi/profil dan pengalaman/pendidikan sangat efektif.",
        improvements: [
            "Tambahkan bagian 'Sertifikasi' jika ada, atau sebutkan kursus relevan yang telah diselesaikan.",
            "Ubah profil singkat menjadi lebih spesifik dan berbasis kata kunci teknis.",
            "Deskripsikan kontribusi pengalaman dengan lebih kuantitatif atau spesifik.",
            "Tambahkan tools seperti Jira, Trello, GitHub Actions, atau CI/CD jika pernah digunakan.",
            "Tambahkan kata kunci teknis seperti RESTful API jika relevan.",
        ],
    },
};

const ResultPage = () => {
    const location = useLocation();
    const [showAllRoadmap, setShowAllRoadmap] = useState(false);

    const data = location.state || dummyResult;
    const roadmapEntries = Object.entries(data.roadmap);
    const displayedRoadmap = showAllRoadmap
        ? roadmapEntries
        : roadmapEntries.slice(0, 3);

    return (
        <div className="min-h-screen bg-[#0F111A] text-white font-sans antialiased">
            <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-[#0F111A]/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
                    <div>
                        <Link
                            to={'/'}
                            className="text-base font-extrabold tracking-tight text-white sm:text-xl">
                            KaburAjaDulu<span className="text-[#00CFFF]">.Ai</span>
                        </Link>
                    </div>

                    <Link
                        to={'/'}
                        className="rounded-full border border-slate-700 bg-[#1E2533]/70 px-4 py-2 text-xs font-bold text-slate-200 transition hover:border-[#00CFFF]/60 hover:bg-[#2A3345] sm:px-5 sm:text-sm"
                    >
                        Upload Ulang
                    </Link>
                </div>
            </header>

            <main className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
                <div
                    className="absolute left-1/2 top-20 -z-10 h-105 w-105 -translate-x-1/2 rounded-full bg-[#00CFFF]/10 blur-3xl"/>

                <section className="mb-8">
                    <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Roadmap karier kamu sudah siap.
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                        Berikut ringkasan skill, gap kemampuan, rekomendasi pengembangan, dan feedback untuk
                        meningkatkan kualitas CV kamu.
                    </p>
                </section>

                <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <aside className="space-y-6 lg:col-span-4">
                        <div
                            className="rounded-4xl border border-[#00CFFF]/30 bg-[#171B26]/90 p-8 text-center shadow-[0_0_50px_-18px_rgba(0,207,255,0.55)]">
                            <p className="mb-3 text-sm font-bold text-slate-400">Match Score</p>
                            <div className="mb-3 text-7xl font-black tracking-tight text-[#00E0FF]">
                                {data.gap_analysis.match_score}/15
                            </div>
                            <p className="text-sm italic leading-relaxed text-slate-400">
                                Target role: {data.role}
                            </p>
                        </div>

                        <div className="rounded-4xl border border-slate-800 bg-[#171B26]/90 p-7">
                            <h3 className="mb-5 flex items-center gap-3 text-lg font-bold">
                                <span className="h-6 w-1.5 rounded-full bg-[#00CFFF]"/>
                                Skill Terdeteksi
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {data.skill_extracted.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-[#00CFFF]/20 bg-[#00CFFF]/10 px-4 py-2 text-xs font-bold text-[#00CFFF]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-4xl border border-slate-800 bg-[#171B26]/90 p-7">
                            <h3 className="mb-5 flex items-center gap-3 text-lg font-bold">
                                <span className="h-6 w-1.5 rounded-full bg-emerald-400"/>
                                Skill Paling Sesuai
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {data.gap_analysis.skills_dimiliki.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-emerald-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div
                            className="relative overflow-hidden rounded-[32px] border border-red-500/20 bg-[#171B26]/90 p-7">
                            <div className="absolute left-0 top-0 h-full w-1.5 bg-red-500"/>

                            <h3 className="mb-5 flex items-center gap-3 text-lg font-bold text-red-100">
                                <span className="h-6 w-1.5 rounded-full bg-red-500"/>
                                Skill Gap
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {data.gap_analysis.top_skill_tidak_dimiliki.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-bold text-red-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <section className="space-y-6 lg:col-span-8">
                        <div className="rounded-[32px] border border-slate-800 bg-[#171B26]/90 p-6 sm:p-8">
                            <h3 className="mb-6 text-xl font-bold">
                                AI CV Feedback
                            </h3>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div className="rounded-3xl border border-slate-800 bg-[#0F111A]/70 p-6">
                                    <h4 className="mb-2 font-bold text-[#00E0FF]">
                                        ATS Feedback
                                    </h4>
                                    <p className="text-sm leading-relaxed text-slate-400">
                                        {data.cv_feedback.ats_feedback}
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-slate-800 bg-[#0F111A]/70 p-6">
                                    <h4 className="mb-2 font-bold text-[#00E0FF]">
                                        Layout Feedback
                                    </h4>
                                    <p className="text-sm leading-relaxed text-slate-400">
                                        {data.cv_feedback.layout_feedback}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 rounded-3xl border border-slate-800 bg-[#0F111A]/70 p-6">
                                <h4 className="mb-4 font-bold text-white">
                                    Rekomendasi Perbaikan
                                </h4>

                                <ul className="space-y-3">
                                    {data.cv_feedback.improvements.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-sm leading-relaxed text-slate-400"
                                        >
                                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#00CFFF]"/>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-4xl border border-slate-800 bg-[#171B26]/90 p-6 sm:p-8">
                            <h3 className="mb-8 text-xl font-bold">
                                Roadmap Pengembangan Karier
                            </h3>

                            <div className="space-y-4">
                                {displayedRoadmap.map(([step, text]) => (
                                    <div
                                        key={step}
                                        className="flex gap-4 rounded-[28px] border border-slate-800 bg-[#0F111A]/70 p-5 sm:p-6 items-center"
                                    >
                                        <div
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#00CFFF]/40 bg-[#00CFFF]/10 text-sm font-black text-[#00CFFF]"
                                        >
                                            {step}
                                        </div>

                                        <p className="text-sm leading-relaxed text-slate-300">
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {!showAllRoadmap && roadmapEntries.length > 3 && (
                                <div className="mt-8 flex justify-center">
                                    <button
                                        onClick={() => setShowAllRoadmap(true)}
                                        className="rounded-full border border-[#00CFFF]/30 bg-[#00CFFF]/10 px-6 py-3 text-sm font-bold text-[#00CFFF] transition hover:bg-[#00CFFF]/20"
                                    >
                                        Lihat {roadmapEntries.length - 3} Langkah Lainnya
                                    </button>
                                </div>
                            )}
                        </div>
                    </section>
                </section>
            </main>

            <Footer/>
        </div>
    );
};

export default ResultPage;