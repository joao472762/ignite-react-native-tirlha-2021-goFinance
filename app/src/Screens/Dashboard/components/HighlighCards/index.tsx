import { useContext } from "react"
import { TransactionsContext } from "../../../../context/TrasactionsContext"
import { useSumary } from "../../../../hooks/useSumary"
import { HighlighCardsContainer} from './styles'
import { Card } from './components/Card'

export function HighlighCards(){
    const {transactions} = useContext(TransactionsContext)
    const {sumaryFormated} = useSumary()

    const transactionsExist = transactions.length ? true : false
    const transactionsIncomeExist = transactions.some(transaction => transaction.type ==='income')
    const transactionsOutcomeExist = transactions.some(transaction => transaction.type ==='outcome')
    
    return(
        <HighlighCardsContainer>

        <Card
            type="income"
            title="Entrada"
            amount={sumaryFormated.income.amount}
            lastAlteration = {
                transactionsIncomeExist 
                ? `Útima entrada dia ${sumaryFormated.income.lastUpdate}`
                :'Não há transações'
            }
        />
        <Card
            type="outcome"
            title="Saída"
            amount={sumaryFormated.outcome.amount}
            lastAlteration={ transactionsOutcomeExist 
                ?`Útima saída dia ${sumaryFormated.outcome.lastUpdate}`
                : 'Não há transações'
            }
        />
        <Card
            type="total"
            title="Total"
            amount={sumaryFormated.total.amount}
            lastAlteration={ transactionsExist
                ?`01 á ${sumaryFormated.total.lastUpdate}`
                : ''
            }
        />
        
    </HighlighCardsContainer>

    )
}