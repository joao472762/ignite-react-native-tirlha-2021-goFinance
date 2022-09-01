import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { Header } from "./components/Header";
import { HighlighCard } from "./components/HighlighCard";
import { Transaction } from "./components/Tranasaction";
import { 
    HighlighCardsContainer,
    DashBoardContainer,
    TransactionsContainer,
    Title,
} from "./styles";

interface TransactionProps  {
    id: string
    name: string,
    amount: string,
    createdDate: string
    categoryKey: string
    type: 'income' | 'outcome'
}
export function Dashboard(){
    const [transactions,setTransactions] = useState<TransactionProps[]>([])

    async function loadTransaction(){
        const dataKey = '@gofinances:transactions'
        const storage = await AsyncStorage.getItem(dataKey)
        
        if(storage){
            const storageFomated = JSON.parse(storage)
            setTransactions(storageFomated)
        }
    }
    console.log(transactions)
    useEffect(() => {
        loadTransaction()
    },[])
    console.log(transactions)
    return(
        <DashBoardContainer>
            <Header/>

                <HighlighCardsContainer>

                    <HighlighCard
                        type="income"
                        title="Entrada"
                        amount="R$ 17.400,00"
                        lastAleration="Última entrada dia 13 de abri"
                    />
                    <HighlighCard
                        type="outcome"
                        title="Saída"
                        amount="R$ 17.400,00"
                        lastAleration="Última entrada dia 13 de abri"
                    />
                    <HighlighCard
                        type="total"
                        title="Total"
                        amount="R$ 17.400,00"
                        lastAleration="Última entrada dia 13 de abri"
                    />
                    
                </HighlighCardsContainer>

                <TransactionsContainer>
                    <Title>Listagem</Title>

                    <FlatList
                        data={transactions}
                        keyExtractor={item => item.id}
                        renderItem = { ({item}) =>(
                            <Transaction
                                data={{
                                    createdDate: item.createdDate,
                                    name: item.name,
                                    key: item.categoryKey,
                                    price: item.amount,
                                    type: item.type
                                }}
                            />
                        ) }
                        contentContainerStyle ={{
                            paddingBottom: getBottomSpace()
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                </TransactionsContainer>
             
        
        </DashBoardContainer>
    )
}