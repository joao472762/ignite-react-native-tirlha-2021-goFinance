import React from "react";
import { FlatList } from "react-native";
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

export function Dashboard(){
    const transactions = [
        {
            id: 1,
            type: 'income' as const,
            description:"Desnvolvimento de site",
            price:"R$ 5.000,00",
            createdDate:"13/043/2022",
            category:{
                name: 'Casa',
                icon: 'dollar-sign'
            }
        },
        {
            id: 2,
            type: 'income' as const,
            description:"Desnvolvimento de site",
            price:"R$ 5.000,00",
            createdDate:"13/043/2022",
            category:{
                name: 'Alimentação',
                icon: 'dollar-sign'
            }
        },
        {
            id: 3,
            type: 'outcome' as const,
            description:"Desnvolvimento de site",
            price:"R$ 5.000,00",
            createdDate:"13/043/2022",
            category:{
                name: 'Venda',
                icon: 'coffee'
            }
        },
     

        
    ] 
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
                        keyExtractor={item => item.id.toString()}
                        renderItem = { ({item}) => 
                           <Transaction
                                data = {item}
                           />
                        }
                        contentContainerStyle ={{
                            paddingBottom: getBottomSpace()
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                </TransactionsContainer>
             
        
        </DashBoardContainer>
    )
}