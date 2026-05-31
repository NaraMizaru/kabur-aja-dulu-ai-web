import {LoginDTO, RegisterDTO} from "../domain/auth.domain";
import supabase from "../../../config/supabase";

const signUp = async ({email, password}: RegisterDTO) => {
    const {data, error} = await supabase.auth.signUp({
        email,
        password,
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

export const authRepo = {
    signUp,
    signIn,
    signOut,
};
