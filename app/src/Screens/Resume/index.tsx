import { VictoryPie } from "victory-native";
import { useTheme } from "styled-components";
import { useContext, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";


import { Header } from "../../components/Header";
import { useSumary } from "../../hooks/useSumary";
import { categories } from "../../utils/categories";
import { priceFormatter } from "../../utils/formater";
import { HistoryCard } from "./components/HistoryCard";
import { MonthSelector } from "./components/MonthSelector";
import { TransactionsContext } from "../../context/TrasactionsContext";
import { 
    ResumeContent, 
    ResumeContainer, 
    ChartContainer,
} from "./styles";


interface transactionPerMonthPropsByCategory {
    name: string,
    key: string,
    amount: number,
    color: string,
    porcentage: string
}

export function Resume() {
    const {colors,fonts} = useTheme()
    const {firstDateUpdate,lastDateUpdate} = useSumary()
    const {transactions} = useContext(TransactionsContext)
    const [selectedDate, setSelectedData] = useState(new Date())

    const transactionPerMonthByCategory: transactionPerMonthPropsByCategory[] = []
    
    const transactionPerMonth = transactions.filter(transaction =>(
        new Date(transaction.createdDate).getMonth() === selectedDate.getMonth() &&
        new Date(transaction.createdDate).getFullYear() == selectedDate.getFullYear()
    ))

    const transactionsPerMonthAmount = transactionPerMonth.reduce((acc,transaction) => {
        acc += Number(transaction.amount)
        return acc
    },0)

    categories.forEach(category => {
        let categorySum = 0

        transactionPerMonth.forEach(transaction => {
            if(transaction.categoryKey === category.key){
                categorySum += Number(transaction.amount)
            }
        })

        let porcentage = `${(categorySum * 100 / transactionsPerMonthAmount).toFixed(0)}%`
        
        if(categorySum > 0){
            transactionPerMonthByCategory.push({
                key: category.key,
                name: category.name,
                color: category.color,
                amount: categorySum,
                porcentage
            })
        }
    })

    function updateTransactionDate(date: Date){
        setSelectedData(date)
    }

    const hasBeforeTransactionPerMonth = selectedDate.getMonth() > firstDateUpdate.getMonth()
    const hasAfterTransactionPerMonth = selectedDate.getMonth() < lastDateUpdate.getMonth()

    return(
        <ResumeContainer>
            <Header title="Resumo por categoria"/>

            <ResumeContent >
                <MonthSelector
                    updadteSelectedDate={updateTransactionDate}
                    transactionDate = {selectedDate}
                    hasAfterTransactionPerMonth = {hasAfterTransactionPerMonth}
                    hasBeforeTransactionPerMonth = {hasBeforeTransactionPerMonth}
                />

                <ChartContainer>
                    <VictoryPie
                        data={transactionPerMonthByCategory}
                        colorScale={transactionPerMonthByCategory.map(transaction => transaction.color)}
                        style={{
                            labels:{
                                fontSize: RFValue(18),
                                fontWeight: 'bold',
                                fontFamily: fonts.PoppinsBold,
                                fill: colors.shape,
                            },
                            
                        }}
                        labelRadius={80}
                        x= 'porcentage'
                        y= 'amount'
                    />
                </ChartContainer>

                {transactionPerMonthByCategory.map(transaction => (
                    <HistoryCard
                        amount={priceFormatter.format(transaction.amount)}
                        color = {transaction.color}
                        label = {transaction.name}
                        key = {transaction.key}
                    />

                ))}
            </ResumeContent>
        </ResumeContainer>
    )
}