import { logoutUser, registerUser, loginUser, loginWithGoogle } from './auth'

export const server = {
    //Authentication
    registerUser,
    loginUser,
    logoutUser,
    loginWithGoogle
}