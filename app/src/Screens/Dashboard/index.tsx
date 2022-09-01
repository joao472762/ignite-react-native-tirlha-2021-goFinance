import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { TransactionsContext } from "../../context/TrasactionsContext";

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
    const {transactions} = useContext(TransactionsContext)
    
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