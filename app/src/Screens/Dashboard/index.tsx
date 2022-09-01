import { FlatList} from "react-native";
import React, { useContext} from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { TransactionsContext } from "../../context/TrasactionsContext";

import { Header } from "./components/Header";
import { useSumary } from "../../hooks/sumary";
import { HighlighCard } from "./components/HighlighCard";
import { Transaction } from "./components/Tranasaction";
import { 
    HighlighCardsContainer,
    DashBoardContainer,
    TransactionsContainer,
    Title,
} from "./styles";
import { dateFormatterWithoutYear } from "../../utils/formater";

export function Dashboard(){
    const {transactions} = useContext(TransactionsContext)
    const {sumaryFormated, dateUpdateFormated} = useSumary()
    
    return(
        <DashBoardContainer>
            <Header/>

                <HighlighCardsContainer>

                    <HighlighCard
                        type="income"
                        title="Entrada"
                        amount={sumaryFormated.income.amount}
                        lastAleration={`Útima entrada ${sumaryFormated.income.lastUpdate}`}
                    />
                    <HighlighCard
                        type="outcome"
                        title="Saída"
                        amount={sumaryFormated.outcome.amount}
                        lastAleration={`Útima saída ${sumaryFormated.outcome.lastUpdate}`}
                    />
                    <HighlighCard
                        type="total"
                        title="Total"
                        amount={sumaryFormated.total.amount}
                        lastAleration={`${dateUpdateFormated.firstUpdate} á ${dateUpdateFormated.lastUpdate}`}
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