import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {authService} from "../service/auth.service.js";
import {useState} from "react";

const forgotPasswordSchema = z.object({
    email: z.email("Email is required"),
})

const ForgotPasswordPage = () => {
    const [emailSent, setEmailSent] = useState(false);

    const form = useForm({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        }
    })

    const onSubmit = async (values) => {
        try {
            const response = await authService.forgotPassword(values)

            if (response.data.success) setEmailSent(true);
        } catch (error) {
            const data = error.response.data
            data.errors.forEach(err => {
                form.setError(err.field, {
                    type: "server",
                    message: err.message,
                })
            })
        }

    }

    return (
        <div
            className="relative min-h-screen overflow-hidden bg-[#0F111A] px-6 py-8 text-white font-sans antialiased lg:px-10">
            <div
                className="absolute left-1/2 top-24 -z-10 h-105 w-105 -translate-x-1/2 rounded-full bg-[#00CFFF]/10 blur-3xl"/>
            <div className="absolute bottom-0 right-0 -z-10 h-80 w-[320px] rounded-full bg-[#00E0FF]/5 blur-3xl"/>

            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link to="/" className="text-xl font-extrabold tracking-tight text-white">
                    KaburAjaDulu<span className="text-[#00CFFF]">.Ai</span>
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-2 rounded-full border border-slate-700 bg-[#1E2533]/70 px-5 py-2.5 text-sm font-bold text-slate-200 shadow-lg shadow-black/20 transition hover:border-[#00CFFF]/60 hover:bg-[#2A3345]"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 17l-5-5m0 0l5-5m-5 5h12"/>
                    </svg>
                    Kembali
                </Link>
            </div>

            <main className="flex min-h-[calc(100vh-96px)] items-center justify-center py-12">
                <div className="w-full max-w-md rounded-[36px] border border-slate-800 bg-[#171B26]/90 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-10">
                    {!emailSent ? (
                        <>
                            <div className="mb-8">
                                <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-white">
                                    Forgot Password
                                </h1>

                                <p className="text-sm leading-relaxed text-slate-400">
                                    Masukan email kamu.
                                </p>
                            </div>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="ml-1 text-sm font-semibold text-slate-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="nama@email.com"
                                        {...form.register('email')}
                                        className="w-full rounded-2xl border border-slate-700 bg-[#0F111A] px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#00CFFF] focus:ring-4 focus:ring-[#00CFFF]/10"
                                    />
                                </div>

                                <button
                                    type={"submit"}
                                    className="w-full rounded-2xl bg-[#00CFFF] py-4 font-extrabold text-[#0F111A] shadow-lg shadow-[#00CFFF]/10 transition hover:bg-[#00E0FF]">
                                    {form.formState.isSubmitting ? 'Memproses...' : 'Lupa Password'}
                                </button>
                            </form>

                            <p className="mt-8 text-center text-sm text-slate-400">
                                Ingat password?{" "}
                                <Link to="/login" className="font-bold text-[#00CFFF] underline underline-offset-4">
                                    Masuk Kembali
                                </Link>
                            </p>
                        </>
                    ) : (
                        <div className="flex flex-col items-center text-center">
                            <div
                                className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    className="text-emerald-400"
                                >
                                    <path d="M20 6L9 17l-5-5"/>
                                </svg>
                            </div>

                            <h2 className="mb-3 text-2xl font-bold text-white">
                                Email Terkirim
                            </h2>

                            <p className="mb-8 max-w-sm text-sm leading-relaxed text-slate-400">
                                Kami telah mengirimkan link reset password ke email kamu.
                                Silakan cek inbox atau folder spam untuk melanjutkan proses reset password.
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ForgotPasswordPage;