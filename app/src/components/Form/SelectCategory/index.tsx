import {
    SelectCategoryContainer,
    Category,
    Icon,
} from './styles'

interface SelectCategoryProps {
    title: string
}

export function SelectCategory({title}: SelectCategoryProps){
    return(
        <SelectCategoryContainer>
            <Category> {title} </Category>
            <Icon name='chevron-down'/>
        </SelectCategoryContainer>
    )
}