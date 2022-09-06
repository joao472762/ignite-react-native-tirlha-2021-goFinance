import { createContext, ReactNode } from "react"

interface User{
    id: string
    name: string,
    email: string,
    photo?: string,
}
interface AuthContextType  {
    user: User
}
export const AuthContext =  createContext({} as AuthContextType)

interface AuthContextProviderProps {
    children: ReactNode
}
export function AuthContextProvider({children}: AuthContextProviderProps){
    const user =  {
        id: '5484adae',
        name: 'lais silva',
        email: 'lais@gmail.com '
    }
    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}