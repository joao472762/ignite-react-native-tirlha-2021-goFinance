import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { View } from "react-native";

export const NewTransactionContainer = styled(GestureHandlerRootView)`
    flex: 1;

    background-color: ${( {theme} ) => theme.colors.background};
`
export const Form = styled.View`
    flex:  1;
    justify-content: space-between;

    padding: 0 ${RFValue(24)}px;
    padding-bottom:  ${RFValue(24)}px;
    `
export const InputsArea = styled.View`
    padding-top:  ${RFValue(31)}px;
`
export const TransactionsType = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-top: ${RFValue(16)}px;
    margin-bottom: ${RFValue(16)}px;
`
export const LoadContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content:  center;
`



