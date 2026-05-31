const AboutCard = ({logo, title, description}) => {
    return (
        <div
            className="rounded-4xl border border-slate-800 bg-[#1E2533]/40 p-8 transition hover:border-[#00CFFF]/50 hover:bg-[#1E2533]/60">
            <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00CFFF]/10 text-3xl">
                {logo}
            </div>

            <h3 className="mb-3 text-xl font-bold">
                {title}
            </h3>

            <p className="leading-relaxed text-slate-400">
                {description}
            </p>
        </div>
    )
}

export default AboutCard;