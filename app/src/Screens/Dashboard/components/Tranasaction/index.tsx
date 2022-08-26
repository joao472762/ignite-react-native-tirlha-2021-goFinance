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

interface Category{
    name: string,
    icon: string
}

interface transactionProps {
    data:{
        type: 'income' | 'outcome'
        description: string,
        price: string,
        category: Category
        createdDate: string
    }
}

export function Transaction({data}:transactionProps){
    const {createdDate,description,price, category,type} = data

    function selectIcon(){
        switch(category.name){
            case ('Venda') :
                return 'dollar-sign';

            case ('Alimentação') :
                return 'coffee';
            
            case ('Casa'):
                return  'shopping-bag'

            default:
                return 'dollar-sign'
        }
        
    }

    const icon = selectIcon()

    return(
        <TransactionContainer>
            <Description>{description}</Description>
            <PriceHighlight type={type}>
                {type === 'outcome' && '- '}
                {price}
            </PriceHighlight>

            <TransactionFooter>
                <Category>
                    <Icon name={icon}/>
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <CriationDate>{createdDate}</CriationDate>

            </TransactionFooter>
        </TransactionContainer>
    )
}