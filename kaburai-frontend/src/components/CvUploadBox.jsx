import {useRef, useState} from "react";
import {useAuthStore} from "../store/auth.store.js";
import {useNavigate} from "react-router-dom";

const CvUploadBox = ({onAnalyze}) => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const {accessToken} = useAuthStore((state) => state);

    const isAuth = Boolean(accessToken);

    const handleFileSelect = (file) => {
        if (!file) return;

        if (file.type !== "application/pdf") {
            alert("File harus PDF");
            return;
        }

        setSelectedFile(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        handleFileSelect(e.dataTransfer.files?.[0]);
    };

    const handleAnalyze = () => {
        if (!selectedFile) return;
        onAnalyze(selectedFile);
    };

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <>
            <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={(e) => handleFileSelect(e.target.files?.[0])}
            />

            <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`
                    group mx-auto w-full max-w-4xl cursor-pointer rounded-[40px] border-2 border-dashed
                    p-10 backdrop-blur-sm transition-all duration-300 md:p-16
                    ${
                    isDragging
                        ? "border-[#00CFFF] bg-[#1E2533]/70"
                        : "border-slate-700 bg-[#1E2533]/40 hover:border-[#00CFFF] hover:bg-[#1E2533]/60"
                }
                `}
            >
                <div className="flex flex-col items-center">
                    <div
                        className="mb-6 rounded-full bg-[#00CFFF]/10 p-6 text-slate-500 transition-colors group-hover:text-[#00CFFF]">
                        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="17 8 12 3 7 8"/>
                            <line x1="12" y1="3" x2="12" y2="15"/>
                        </svg>
                    </div>

                    {!selectedFile ? (
                        <>
                            <h3 className="mb-2 text-xl font-semibold text-slate-100 group-hover:text-white">
                                Upload CV Kamu
                            </h3>

                            <p className="text-center text-base text-slate-500 group-hover:text-slate-400 md:text-lg">
                                Seret dan letakkan file PDF di sini atau klik untuk mencari file
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="mb-2 text-xl font-semibold text-white">
                                File berhasil dipilih
                            </h3>

                            <p className="max-w-full truncate text-center text-sm text-[#00CFFF]">
                                {selectedFile.name}
                            </p>

                            <p className="mt-2 text-sm text-slate-500">
                                Klik area ini untuk mengganti file
                            </p>
                        </>
                    )}
                </div>
            </div>

            {selectedFile && (
                <div className="mt-8 flex justify-center">
                    <button
                        type="button"
                        onClick={isAuth ? handleAnalyze : handleLogin}
                        className="rounded-full bg-[#00CFFF] px-8 py-4 font-extrabold text-[#0F111A] shadow-lg shadow-[#00CFFF]/10 transition hover:bg-[#00E0FF]"
                    >
                        Analyze CV
                    </button>
                </div>
            )}
        </>
    );
};

export default CvUploadBox;