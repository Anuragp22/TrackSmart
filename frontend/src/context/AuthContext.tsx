import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}

// Create context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const login = async (token: string) => {
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
    };


    const logout = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            await fetch("http://localhost:3001/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            localStorage.removeItem("token");
            setIsLoggedIn(false);
        } catch (error) {
            console.error("Logout error:", error);
        }
    };


    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
