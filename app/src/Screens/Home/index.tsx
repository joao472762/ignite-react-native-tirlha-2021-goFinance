import { View,Text } from "react-native";
import { Title } from "./style";

interface HomeProps  {
    title: string
}
export function Home({title}: HomeProps){
    return(
        <View>
            <Title>
                {title}
            </Title>
        </View>
    )
}