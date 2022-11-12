import { ActivityIndicator } from "react-native"
import { useTheme } from "styled-components"
import { LoaderIndicator } from "./styles"

export function Loader(){
    const {colors} = useTheme()
    return(
        <LoaderIndicator size={'small'} color={colors.shape}/>
    )
}