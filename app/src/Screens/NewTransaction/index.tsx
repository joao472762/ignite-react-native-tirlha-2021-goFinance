import * as yup from 'yup'
import { useState } from "react";
import { yupResolver} from '@hookform/resolvers/yup'
import { useForm,Controller, FormProvider} from "react-hook-form";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputForm } from "../../components/InputForm";
import { SelectCategory } from "../../components/Form/SelectCategory";
import { SelectCategoryModal } from "./components/SelectCategoryModal";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import {
    Form,
    InputsArea,
    TransactionsType,
    NewTransactionContainer,
} from './styles'
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";


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
    type: string,
    amount: string,
    category: {
        name: string,
        key: string,
    }
}

export function NewTransaction(){
    const [modalIsVisible, setModalIsVisible] = useState(false)

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
    
    function handleCreateNewTransaction(data: CreateNewTransactionSchema){
        if(!data.type){
            return Alert.alert('selecione o tipo da tansação')
        }

        if(!data.category.name){
            return Alert.alert('Selecione uma categoria')
        }
        
        console.log(data)
      
        reset()
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