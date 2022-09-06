import { TouchableOpacityProps } from 'react-native'
import {
    SelectCategoryContainer,
    Category,
    Icon,
} from './styles'

interface SelectCategoryProps extends  TouchableOpacityProps {
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