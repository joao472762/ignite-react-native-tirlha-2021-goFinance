import React from "react";
import { ScrollView } from "react-native";
import { HighlighCard } from "./components/HighlighCard";

import { Header } from "./components/Header";
import { HighlighCardsContainer, DashBoardContainer } from "./styles";

export function Dashboard(){
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
        
        </DashBoardContainer>
    )
}