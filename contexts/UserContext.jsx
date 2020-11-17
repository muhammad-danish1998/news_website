import { createContext, useState, useEffect } from "react"
import { getJWT } from "../utils/auth"
import axios from 'axios';
import { useRouter } from 'next/router';
import Spinner from "../components/Spinner";

export const UserContext = createContext({
    isLoadingUser: true,
    isAuthenticated: false,
})

export const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!loading) return;
        const jwt = getJWT();
        const isAuthenticated = !!jwt;
        if (isAuthenticated) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwt;
            setAuth(true);
            setLoading(false);
        } else {
            router.push('/login');
        }
    }, [loading])

    if (loading) return (
        <Spinner />
    )
    console.log('HERE');
    console.log(auth);

    return (
        <UserContext.Provider value={{
            isAuthenticated: auth,
            isLoadingUser: loading,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
