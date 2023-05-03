import { createContext, useContext, useEffect, useState } from "react";
type AuthContextType = {
    token: string | null;
    username: string | null;
    isAutheticated: boolean;
    login: ({ token, username }: { token: string; username: string }) => void;
    logout: () => void;
};
const AuthContext = createContext<AuthContextType>({
    token: null,
    username: null,
    isAutheticated: false,
    login: ({ token, username }: { token: string; username: string }) => {},
    logout: () => {},
});

type AuthProviderProps = {
    children: React.ReactNode;
};
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [isAutheticated, setIsAutheticated] = useState<boolean>(false);
    const login = ({
        token,
        username,
    }: {
        token: string;
        username: string;
    }) => {
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);

        setToken(token);
        setUsername(username);
        setIsAutheticated(true);
    };
    const logout = () => {
        localStorage.clear();
        setToken(null);
        setUsername(null);
        setIsAutheticated(false);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        if (token && username) {
            login({
                token,
                username,
            });
        }
    }, []);

    const value = {
        token,
        username,
        isAutheticated,
        login,
        logout,
    };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};
export { AuthProvider, useAuth };
