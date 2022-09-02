import { useTheme } from "styled-components";
import React, { useContext, useState} from "react";
import { FlatList, ActivityIndicator} from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { Header } from "./components/Header";
import { Transaction } from "./components/Tranasaction";
import { LoadContainer } from "../NewTransaction/styles";
import { HighlighCards } from "./components/HighlighCards";
import { TransactionsContext } from "../../context/TrasactionsContext";
import { 
    Title,
    DashBoardContainer,
    TransactionsContainer,
} from "./styles";

export function Dashboard(){    
    const {transactions,transactionsIsLoading} = useContext(TransactionsContext)
    const {colors} = useTheme()

    return(
        <DashBoardContainer>
            { 
             transactionsIsLoading 
                ?(
                    <LoadContainer>
                        <ActivityIndicator size='large' color={colors.secundary}/>
                    </LoadContainer>
                ) 
                :(<>
                    <Header/>
                    <HighlighCards/>
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
                </>)
            }        
        </DashBoardContainer>
    )
}