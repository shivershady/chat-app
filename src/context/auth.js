import {createContext, useState, useEffect} from 'react';
import Loading from "../Components/Loading";
import {getUser} from "../services/userServices";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleUser = async () => {
        const rep = await getUser();
        setUser(rep.data);
    }

    useEffect(() => {
        handleUser();
    }, [])

    if (loading) {
        return <Loading/>;
    }
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;