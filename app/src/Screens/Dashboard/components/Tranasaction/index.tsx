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

    const transaction  = categories.find(category => category.key === key)


    return(
        <TransactionContainer>
            <Description>{name}</Description>
            <PriceHighlight type={type}>
                {type === 'outcome' && '- '}
                {price}
            </PriceHighlight>

            <TransactionFooter>
                <Category>
                    <Icon name={transaction?.icon}/>
                    <CategoryName>{transaction?.name}</CategoryName>
                </Category>
                <CriationDate>{'2020'}</CriationDate>

            </TransactionFooter>
        </TransactionContainer>
    )
}