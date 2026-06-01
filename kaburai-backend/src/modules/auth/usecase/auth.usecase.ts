import {ForgotPasswordDTO, LoginDTO, RegisterDTO, ResetPasswordDTO} from "../domain/auth.domain";
import {authRepo} from "../repository/auth.repository";
import {db} from "../../../database/db";
import {users} from "../../../database/schema/users.schema";

const register = async (data: RegisterDTO) => {
    const {full_name, email, password} = data;

    const res = await authRepo.signUp({full_name, email, password});
    const user = res.user;

    if (!user) {
        throw new Error("User creation failed");
    }

    if (!res.session) {
        throw new Error("Session creation failed");
    }

    return res;
};

const login = async (data: LoginDTO) => {
    const {email, password} = data;

    return await authRepo.signIn({email, password});
};

const logout = async () => {
    return await authRepo.signOut();
}

const forgotPassword = async (data: ForgotPasswordDTO) => {
    const {email} = data;
    await authRepo.forgotPasssword({email});
    return {
        message: "Password reset email sent"
    }
}

const resetPassword = async (data: ResetPasswordDTO) => {
    const {access_token, refresh_token, password} = data;
    await authRepo.resetPassword({access_token, refresh_token, password});
    return {
        password_updated: true
    }
}

export const authUseCase = {
    register,
    login,
    logout,
    forgotPassword,
    resetPassword,
};
