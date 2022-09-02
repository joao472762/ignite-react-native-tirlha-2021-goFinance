import { RectButtonProps } from 'react-native-gesture-handler'
import {
    SelectCategoryContainer,
    Category,
    Icon,
} from './styles'

interface SelectCategoryProps extends RectButtonProps {
    title: string
}

export function SelectCategory({title,...rest}: SelectCategoryProps){
    return(
        <SelectCategoryContainer {...rest}>
            <Category> {title} </Category>
            <Icon name='chevron-down'/>
        </SelectCategoryContainer>
    )
}