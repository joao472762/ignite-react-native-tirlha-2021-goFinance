import { View } from "react-native";

import {
    Icon,
    Title,
    Amount,
    HighlighCardHeader,
    LastAlteration,
    HighlighCardContainer,

} from './styles'

interface HighlighCardProps {
    type: 'income' | 'outcome' | 'total',
    title: string,
    amount: string,
    lastAleration: string
}
export function HighlighCard({amount,lastAleration,title,type}: HighlighCardProps){
    const iconType = {
        income: 'arrow-up-circle',
        outcome: 'arrow-down-circle',
        total: 'dollar-sign'
    }

    return(
            <HighlighCardContainer type={type}>
                <HighlighCardHeader>
                    <Title type={type}>{title}</Title>
                    <Icon name={iconType[type]} type={type}/>
                </HighlighCardHeader>

                <View>
                    <Amount type={type}>{amount}</Amount>
                    <LastAlteration type={type}>{lastAleration}</LastAlteration>
                </View>
            </HighlighCardContainer>
    )
}