import {ForgotPasswordDTO, LoginDTO, RegisterDTO, ResetPasswordDTO} from "../domain/auth.domain";
import supabase from "../../../config/supabase";

const signUp = async ({full_name, email, password}: RegisterDTO) => {
    const {data, error} = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: full_name,
            }
        }
    });

    if (error) throw new Error(error.message);
    return data;
};

const signIn = async ({email, password}: LoginDTO) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw new Error(error.message);
    return data;
};

const signOut = async () => {
    const {error} = await supabase.auth.signOut()
    if (error) throw new Error(error.message);
    return {
        success: true,
    }
}

const forgotPasssword = async ({email}: ForgotPasswordDTO) => {
    const {error} = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.FRONTEND_BASE_URL}/reset-password`,
    })

    if (error) throw new Error(error.message);
    return {
        success: true,
    }
}

const resetPassword = async ({access_token, refresh_token, password}: ResetPasswordDTO) => {
    const {error: sessionError} = await supabase.auth.setSession({
        access_token,
        refresh_token,
    });

    if (sessionError) throw new Error(sessionError.message);

    const {data, error} = await supabase.auth.updateUser({
        password,
    });

    if (error) throw new Error(error.message);

    return data;
}

export const authRepo = {
    signUp,
    signIn,
    signOut,
    forgotPasssword,
    resetPassword
};
