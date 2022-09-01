import * as yup from 'yup'
import { useContext, useState } from "react";
import { yupResolver} from '@hookform/resolvers/yup'
import { useForm,Controller, FormProvider} from "react-hook-form";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputForm } from "../../components/InputForm";
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SelectCategory } from "../../components/Form/SelectCategory";
import { SelectCategoryModal } from "./components/SelectCategoryModal";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import {
    Form,
    InputsArea,
    TransactionsType,
    NewTransactionContainer,
} from './styles'
import { useNavigation } from '@react-navigation/native';
import { TransactionsContext } from '../../context/TrasactionsContext';


const NewTransactionSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    amount: 
    yup.number()
        .typeError('digite um número')
        .positive('digite um número positivo')
        .required('digite algum valor')
})

export interface CreateNewTransactionSchema  {
    name: string,
    type: 'income' | 'outcome',
    amount: string,
    category: {
        name: string,
        key: string,
    }
}

export function NewTransaction(){
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const navigation = useNavigation()
    const {addNewTransaction} = useContext(TransactionsContext)

    const newTransactionForm = useForm<CreateNewTransactionSchema>({
        resolver: yupResolver(NewTransactionSchema),
        defaultValues:({
            category:{
                name:'',
                key: ''
            }
        })
    });

    const { 
        watch ,
        reset, 
        handleSubmit, 
        control,
        formState: { isSubmitting,errors} 
    } = newTransactionForm
  
    function handleOpenSectCategoryModal(){
        setModalIsVisible(true)
    }

    function handleCloseSectCategoryModal(){
        setModalIsVisible(false)
    }
    
    function checkFilds(data: CreateNewTransactionSchema){
        if(!data.type){
            return Alert.alert('selecione o tipo da tansação')
        }
    
        if(!data.category.name){
            return Alert.alert('Selecione uma categoria')
        }
        
    }

    function redirectUserToDashBoard(){
        navigation.navigate('Listagem')
        reset()
    }

    async function handleCreateNewTransaction(data: CreateNewTransactionSchema){
        checkFilds(data)

        try{
            const {amount,category,name,type} = data
            
            const newTranasction = {
                amount,
                name,
                type,
                id: uuid.v4() as string, 
                createdDate: String(new Date()),
                categoryKey: category.key,
            }
            
            const dataKey = '@gofinances:transactions'

            const currentStorage = await AsyncStorage.getItem(dataKey)
            const currentStorageFormated = currentStorage? JSON.parse(currentStorage): []

            const storageUpdated = [
                newTranasction,
                ...currentStorageFormated,
            ]
            
            const storageUpdatedInStringfy = JSON.stringify(storageUpdated)
            await AsyncStorage.setItem(dataKey, storageUpdatedInStringfy)
            addNewTransaction(newTranasction)

        }
        catch(error){
            console.error(error)
            Alert.alert('não foi possível salvar')
        }

        redirectUserToDashBoard()
    }
        
    const currentCaterogy = watch('category')
    const currentTransactionType = watch('type')

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <NewTransactionContainer>
                <Header title='Cadastro'/>

                <Form>
                    <InputsArea>

                        <InputForm
                            name = "name"
                            placeholder ="Nome"
                            control = {control}
                            autoCapitalize ={ 'sentences'}
                            autoCorrect = {false}
                            error = {errors.name && errors.name.message}
                        />
                        <InputForm
                            name="amount"
                            placeholder="preço"
                            control={control}
                            keyboardType={'numeric'}
                            error = {errors.amount && errors.amount.message}
                        />
        
                        <Controller
                            name="type"
                            control={control}
                            render = {( {field} ) => (
                                <TransactionsType>
                                    <TransactionTypeButton
                                        type="Income"
                                        onPress={ () => {field.onChange('income') }}
                                        isActive={currentTransactionType === 'income'}
                                    />
                                    <TransactionTypeButton
                                        type="Outcome"
                                        onPress={ () => {field.onChange('outcome') }}
                                        isActive={currentTransactionType === 'outcome'}
                                    
                                    />
                                </TransactionsType>
                            )}
                        />

                        <SelectCategory 
                            title={currentCaterogy.name || 'Categoria'}
                            onPress={handleOpenSectCategoryModal}
                        />
                    </InputsArea>

                    <Button 
                        title="Enviar" onPress={handleSubmit(handleCreateNewTransaction)}
                        disabled = {isSubmitting}
                    />
                </Form>

                <FormProvider {...newTransactionForm}>
                    <SelectCategoryModal 
                        visible={modalIsVisible} 
                        closeSectCategoryModal = {handleCloseSectCategoryModal}
                    />
                </FormProvider>
                
            </NewTransactionContainer>
        </TouchableWithoutFeedback>
    )
}