import {
  ForgotPasswordDTO,
  LoginDTO,
  RefreshTokenDTO,
  RegisterDTO,
  ResetPasswordDTO,
} from "../domain/auth.domain";
import supabase from "../../../config/supabase";

const signUp = async ({ full_name, email, password }: RegisterDTO) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: full_name,
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
};

const signIn = async ({ email, password }: LoginDTO) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
};

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
  return {
    success: true,
  };
};

const forgotPasssword = async ({ email }: ForgotPasswordDTO) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.FRONTEND_BASE_URL}/reset-password`,
  });

  if (error) throw new Error(error.message);
  return {
    success: true,
  };
};

const resetPassword = async ({
  access_token,
  refresh_token,
  password,
}: ResetPasswordDTO) => {
  const { error: sessionError } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });

  if (sessionError) throw new Error(sessionError.message);

  const { data, error } = await supabase.auth.updateUser({
    password,
  });

  if (error) throw new Error(error.message);

  return data;
};

const refreshToken = async ({ refresh_token }: RefreshTokenDTO) => {
  const { data, error } = await supabase.auth.refreshSession({ refresh_token });

  if (error) throw new Error(error.message);
  if (!data.session) throw new Error("Failed to refresh session");

  return {
    access_token: data.session.access_token,
    refresh_token: data.session.refresh_token,
  };
};

export const authRepo = {
  signUp,
  signIn,
  signOut,
  forgotPasssword,
  resetPassword,
  refreshToken,
};
