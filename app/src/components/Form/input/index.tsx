import { TextInputProps } from "react-native";
import { BaseInput} from './styles'
type InputProps = TextInputProps 


export function Input({...res}: InputProps){
    return(
        <BaseInput
        {...res}
        />
    )
}