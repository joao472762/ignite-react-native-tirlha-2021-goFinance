import { useContext } from "react";
import { TransactionsContext } from "../../context/TrasactionsContext";
import { dateFormatterWithoutYear, priceFormatter } from "../../utils/formater";

export function useSumary(){
    const {transactions} = useContext(TransactionsContext)
    const sumary = transactions.reduce((acc, transaction) => {
        
        if(transaction.type === 'income'){
            acc.income.amount += Number(transaction.amount)
            acc.total.amount += Number(transaction.amount)

            if(new Date(transaction.createdDate) > acc.income.lastUpdate){
                acc.income.lastUpdate = new Date(transaction.createdDate)
                acc.total.lastUpdate = new Date(transaction.createdDate)
            }
        }
        else{
            acc.outcome.amount += Number(transaction.amount)
            acc.total.amount -= Number(transaction.amount) 
            
            if(new Date(transaction.createdDate) >= acc.outcome.lastUpdate){
                acc.outcome.lastUpdate = new Date(new Date(transaction.createdDate))
                acc.total.lastUpdate =  new Date(new Date(transaction.createdDate))
            }
        }
        return acc
    }, 
    {
        income: {
            amount: 0,
            lastUpdate: new Date('2/1/20')
        },
        outcome: {
            amount: 0,
            lastUpdate: new Date('2/1/20')
        },
        total: {
            amount: 0,
            lastUpdate: new Date('2/1/20')
        }
    })

    const dateUpdate = transactions.reduce((acc, transaction) => {
        if(new Date(transaction.createdDate) < acc.lastUpdate){
            acc.firstUpdate = new Date(transaction.createdDate)
        }

        else{
            acc.lastUpdate = new Date(transaction.createdDate)
        }
        return acc
    }, {
        firstUpdate: new Date(),
        lastUpdate : new Date
    })
    
    const dateUpdateFormated = {
        firstUpdate: dateFormatterWithoutYear.format(dateUpdate.firstUpdate),
        lastUpdate: dateFormatterWithoutYear.format(dateUpdate.lastUpdate)
    }
  

    const sumaryFormated = {
        income: {
            amount: priceFormatter.format(sumary.income.amount),
            lastUpdate: dateFormatterWithoutYear.format(sumary.income.lastUpdate)
        },
        outcome: {
            amount: priceFormatter.format(sumary.outcome.amount),
            lastUpdate: dateFormatterWithoutYear.format(sumary.outcome.lastUpdate)
        },
        total: {
            amount: priceFormatter.format(sumary.total.amount),
            lastUpdate: dateFormatterWithoutYear.format(sumary.total.lastUpdate)
        }
    }

    return {sumaryFormated, sumary, dateUpdate, dateUpdateFormated}
}