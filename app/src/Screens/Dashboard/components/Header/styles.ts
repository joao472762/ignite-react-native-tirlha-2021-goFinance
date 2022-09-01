import {Feather} from '@expo/vector-icons'
import styled from "styled-components/native";
import {RFPercentage,RFValue} from 'react-native-responsive-fontsize'



export const HeaderContainer = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    height: ${RFPercentage(42)}px;
    padding:  58px 24px 0 ;
`

export const HeaderContent = styled.View`
      align-items: center;
      flex-direction: row;
`

export const Avatar = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`

export const Greeting = styled.View`
    flex: 1;
    margin-left: 17px;
    justify-content: center;

`

export const Menssage = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.PoppinsRegular};
`

export const UserName = styled.Text`

    font-size:  ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.PoppinsBold};
    color: ${({theme}) => theme.colors.shape};
`

export const LogoutButton = styled.TouchableOpacity``

export const PowerIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
     color: ${({theme}) => theme.colors.secundary};
`

