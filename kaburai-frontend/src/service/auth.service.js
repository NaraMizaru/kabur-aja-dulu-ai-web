import {api} from "../lib/axios.js";

const login = async ({email, password}) => {
    return api.post("/auth/login", {
        email,
        password,
    });
};

const register = async ({full_name, email, password}) => {
    return api.post("/auth/register", {
        full_name,
        email,
        password,
    });
};

const logout = async (token) => {
    return api.post("/auth/logout", {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};

const forgotPassword = async ({email}) => {
    return api.post("/auth/forgot-password", {
        email,
    })
}

const resetPassword = async ({access_token, refresh_token, password}) => {
    return api.post("/auth/reset-password", {
        access_token,
        refresh_token,
        password,
    });
};

export const authService = {
    login,
    register,
    logout,
    forgotPassword,
    resetPassword
};