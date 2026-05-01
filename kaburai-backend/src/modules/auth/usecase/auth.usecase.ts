import {LoginDTO, RegisterDTO} from "../domain/auth.domain";
import {authRepo} from "../repository/auth.repository";
import {db} from "../../../database/db";
import {users} from "../../../database/schema/users.schema";

const register = async (data: RegisterDTO) => {
    const {email, password} = data

    const res = await authRepo.signUp({email, password})
    const user = res.user

    if (!user) {
        throw new Error("User creation failed")
    }

    await db.insert(users).values({
        id: user.id,
        email: user.email!,
    })

    return res
}

const login = async (data: LoginDTO) => {
    const {email, password} = data

    return authRepo.signIn({email, password})
}

export const authUseCase = {
    register,
    login,
}
