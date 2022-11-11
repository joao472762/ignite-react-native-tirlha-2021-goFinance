import { createContext, ReactNode, useEffect, useState } from "react"
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import axios from "axios";
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession()
interface User{
    id: string
    name: string,
    email: string,
    avatarUrl: string,
}
interface AuthContextType  {
    signIn: () => Promise<void>,
    user: User | undefined,
    isLoading: boolean 

}
export const AuthContext =  createContext({} as AuthContextType)

interface AuthContextProviderProps {
    children: ReactNode
}

export function AuthContextProvider({children}: AuthContextProviderProps){
    const [user,setUser] = useState<User>()
    const [isLoading,setIsLoading]  = useState(false)

    const [request, response ,promptAsync] = Google.useAuthRequest({
        clientId: process.env.CLIENT_ID,
        redirectUri: AuthSession.makeRedirectUri({useProxy: true}),
        scopes: ['email', 'profile']
    })

    async function signIn(){
        try {
            await promptAsync()

        } catch (Erro) {
            throw new Error(String(Erro))
        }
        finally{

        }
    }

    async function SignInWithGoogle(accessToken: string){
        try {
            setIsLoading(true)
            const response = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo',{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            
            const {data} = response
          
            const userInfo : User = {
                name: data.name,
                email: data.email,
                avatarUrl: data.picture,
                id: data.id
            }

            setUser(userInfo)
            
        } catch (error) {
            console.log(error)
        }

        finally{
            setIsLoading(false)
        }

    }

    useEffect(() => {
        if(response?.type ==='success' && response.authentication?.accessToken){
            SignInWithGoogle(response.authentication.accessToken)
        }
    },[response])


    
    return(
        <AuthContext.Provider value={
            {
                signIn,
                isLoading,
                user
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}