import { Link, useNavigate } from "react-router-dom";
import { authService } from "../service/auth.service.js";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../store/auth.store.js";

const loginSchema = z.object({
  email: z.email("Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [generalError, setGeneralError] = useState();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    setGeneralError("");

    try {
      const response = await authService.login(values);

      setAuth({
        accessToken: response.data.data.access_token,
        refreshToken: response.data.data.refresh_token,
        user: response.data.data.user,
      });

      navigate("/");
    } catch (error) {
      const data = error.response?.data;

      if (data?.errors) {
        data.errors.forEach((err) => {
          setError(err.field, {
            type: "server",
            message: err.message,
          });
        });

        return;
      }

      setGeneralError(data?.message || "Login gagal. Silakan coba lagi.");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0F111A] px-6 py-8 text-white font-sans antialiased lg:px-10">
      <div className="absolute left-1/2 top-24 -z-10 h-105 w-105 -translate-x-1/2 rounded-full bg-[#00CFFF]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-80 w-[320px] rounded-full bg-[#00E0FF]/5 blur-3xl" />

      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tight text-white"
        >
          NextStep<span className="text-[#00CFFF]">.Ai</span>
        </Link>

        <Link
          to="/"
          className="flex items-center gap-2 rounded-full border border-slate-700 bg-[#1E2533]/70 px-5 py-2.5 text-sm font-bold text-slate-200 shadow-lg shadow-black/20 transition hover:border-[#00CFFF]/60 hover:bg-[#2A3345]"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Kembali
        </Link>
      </div>

      <main className="flex min-h-[calc(100vh-96px)] items-center justify-center py-12">
        <div className="w-full max-w-md rounded-[36px] border border-slate-800 bg-[#171B26]/90 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-10">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-white">
              Masuk
            </h1>

            <p className="text-sm leading-relaxed text-slate-400">
              Masuk ke akun kamu.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {generalError && (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300">
                {generalError}
              </div>
            )}
            <div className="space-y-2">
              <label className="ml-1 text-sm font-semibold text-slate-300">
                Email
              </label>
              <input
                type="email"
                placeholder="nama@email.com"
                {...register("email")}
                className={`w-full rounded-2xl px-5 py-4 text-sm outline-none transition
                                    ${errors.email ? "border border-red-500 focus:border-red-500" : "border border-slate-700 focus:border-[#00CFFF]"}
                                    bg-[#0F111A]
                                `}
              />

              {errors.email && (
                <p className="mt-1 ml-1 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="ml-1 text-sm font-semibold text-slate-300">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                {...register("password")}
                className={`
                                    w-full rounded-2xl px-5 py-4 text-sm outline-none transition
                                    ${errors.password ? "border border-red-500 focus:border-red-500" : "border border-slate-700 focus:border-[#00CFFF]"}
                                    bg-[#0F111A]
                                `}
              />

              {errors.password && (
                <p className="mt-1 ml-1 text-xs text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center  text-sm">
              <Link
                to="/forgot-password"
                className="font-semibold text-[#00CFFF] hover:underline"
              >
                Lupa password?
              </Link>
            </div>

            <button
              type={"submit"}
              className="w-full rounded-2xl bg-[#00CFFF] py-4 font-extrabold text-[#0F111A] shadow-lg shadow-[#00CFFF]/10 transition hover:bg-[#00E0FF]"
            >
              {isSubmitting ? "Memproses..." : "Masuk"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-400">
            Belum punya akun?{" "}
            <Link
              to="/register"
              className="font-bold text-[#00CFFF] underline underline-offset-4"
            >
              Buat akun
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
