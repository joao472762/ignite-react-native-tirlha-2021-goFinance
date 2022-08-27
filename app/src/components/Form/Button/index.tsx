import {ButtonContainer,Title} from './styles'
import {  TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    title: string,

}
export function Button({title, ...rest}: ButtonProps){
    return(
        <ButtonContainer {...rest}>
            <Title>{title}</Title>
        </ButtonContainer>
    )
}