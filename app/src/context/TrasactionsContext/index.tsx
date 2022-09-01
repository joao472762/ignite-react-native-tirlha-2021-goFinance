import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, ReactNode, useEffect, useState } from "react"

interface TransactionsProps  {
    id: string
    name: string,
    amount: string,
    createdDate: string
    categoryKey: string
    type: 'income' | 'outcome'
}

interface TransactionsContextType {
    transactions: TransactionsProps[]
}

export const TransactionsContext = createContext({} as TransactionsContextType)

interface TransactionsProviderProps {
    children: ReactNode
}

export  function TransactionsProvider({children}:TransactionsProviderProps){
    const [transactions,setTransactions] = useState<TransactionsProps[]>([])

    async function loadTransactions(){
        const dataKey = '@gofinances:transactions'
        const response = await AsyncStorage.getItem(dataKey)
        if(response){
             const storage = JSON.parse(response)
             setTransactions(storage)
        }
     }
    
     useEffect(() => {
         loadTransactions()
    },[])

    return(
        <TransactionsContext.Provider value={{transactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}