import { addMonths, format, subMonths } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
    MonthSelectButton,
    MonthSelectorContainer,
    MonthSelectIcon,
    Month,
} from './styles'

interface MonthSelectorProps{
    updadteSelectedDate: (date: Date) => void,
    transactionDate: Date,
    hasAfterTransactionPerMonth: boolean,
    hasBeforeTransactionPerMonth: boolean
}


export function MonthSelector({
    transactionDate,
    updadteSelectedDate,
    hasBeforeTransactionPerMonth,
    hasAfterTransactionPerMonth,
    }:MonthSelectorProps){

    function handleIncreaseDate(){
        const newDate = addMonths(transactionDate,1)
        updadteSelectedDate(newDate)
    }

    function handleDecreaseDate(){
        const newDate = subMonths(transactionDate,1)
        updadteSelectedDate(newDate)
    }

    return(
        <MonthSelectorContainer>
            {
                hasBeforeTransactionPerMonth && (
                    <MonthSelectButton
                        onPress={handleDecreaseDate}
                    >
                        <MonthSelectIcon name='chevron-left'/>
                    </MonthSelectButton>
                )
            }

            <Month>{format(transactionDate, 'MMMM, yyyy',{
                locale: ptBR,
            })}</Month>

            {
                hasAfterTransactionPerMonth && (

                <MonthSelectButton
                    onPress={handleIncreaseDate}
                >
                    <MonthSelectIcon name='chevron-right'/>
                </MonthSelectButton>
                )
            }
        </MonthSelectorContainer>
    )
}