import axios from "axios"

const url = `${import.meta.env.VITE_API_URL}`

const registerUser = async ({email, password, phone, fullname}) => {
    try {
        const registerUser = (await axios.post(`${url}/users/register`, {
            email, password, phone, fullname
        })).data
        if (!registerUser.success)
            throw new Error(loginUser.message)
        return registerUser
    }
    catch (error) {
        return error?.response?.data || "Something went wrong"
    }
}

const loginUser = async (email, password) => {
    try {
        const loginUser = (await axios.post(`${url}/users/login`, {
            email, password
        }, { withCredentials: true })).data
        if (!loginUser.success)
            throw new Error(loginUser.message)
        return loginUser
    }
    catch (error) {
        return error?.response?.data || "Something went wrong"
    }
}


const logoutUser = async () => {
    try {
        const user = (await axios.get(`${url}/users/logout`, { withCredentials: true })).data
        if (!user.success)
            throw new Error(user.message)
        return user
    }
    catch (error) {
        return error?.response?.data || "Something went wrong"
    }
}

export { registerUser, loginUser,logoutUser }