import {
    HistoryCardContainer,
    Label,
    AmountContainer,
    Currency,
    Amount,

} from './styles'

interface historyCardProps {
    label: string,
    color: string,
    amount: string,
}
export function HistoryCard({amount,color,label}: historyCardProps){
    const amountFormated = amount.replace('R$','')
    return(
        <HistoryCardContainer color={color}>
            <Label>{label}</Label>
            <AmountContainer>
                <Currency>R$</Currency>
                <Amount>{amountFormated}</Amount>
            </AmountContainer>
        </HistoryCardContainer>
    )
}