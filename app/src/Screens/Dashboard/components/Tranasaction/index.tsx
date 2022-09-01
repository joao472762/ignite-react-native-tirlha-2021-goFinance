import {
    Icon,
    Category,
    Description,
    CategoryName,
    CriationDate,
    PriceHighlight,
    TransactionFooter,
    TransactionContainer,

} from './styles'

import {categories} from '../../../../utils/categories'
import { dateFormatter, priceFormatter } from '../../../../utils/formater'


interface transactionProps {
    data:{
        type: 'income' | 'outcome'
        name: string,
        key: string
        price: string,
        createdDate: string
    }
}

export function Transaction({data}:transactionProps){
    const {createdDate,name,price,type,key} = data

    const category  = categories.find(category => category.key === key)


    return(
        <TransactionContainer>
            <Description>{name}</Description>
            <PriceHighlight type={type}>
                {type === 'outcome' && '- '}
                {priceFormatter.format(Number(price))}
            </PriceHighlight>

            <TransactionFooter>
                <Category>
                    <Icon name={category?.icon}/>
                    <CategoryName>{category?.name}</CategoryName>
                </Category>
                <CriationDate>{dateFormatter.format(new Date(createdDate))}</CriationDate>

            </TransactionFooter>
        </TransactionContainer>
    )
}