import { logoutUser, registerUser, loginUser } from './auth'

export const server = {
    //Authentication
    registerUser,
    loginUser,
    logoutUser,
}