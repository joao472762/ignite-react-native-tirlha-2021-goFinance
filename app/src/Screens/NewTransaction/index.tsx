import { useState } from "react";
import { InputForm } from "../../components/InputForm";
import { useForm,Controller, FormProvider} from "react-hook-form";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { SelectCategory } from "../../components/Form/SelectCategory";
import { SelectCategoryModal } from "./components/SelectCategoryModal";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import {
    Form,
    InputsArea,
    TransactionsType,
    NewTransactionContainer,
} from './styles'


export interface CreateNewTransactionSchema {
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

    const newTransactionForm = useForm<CreateNewTransactionSchema>({});

    const { 
        watch ,
        reset, 
        handleSubmit, 
        control,
        formState: {  isSubmitting} 

    } = newTransactionForm
  
    function handleOpenSectCategoryModal(){
        setModalIsVisible(true)
    }

    function handleCloseSectCategoryModal(){
        setModalIsVisible(false)
    }
    
    function handleCreateNewTransaction(data: CreateNewTransactionSchema){
        console.log(data)
        reset()
    }
        
    const currentCaterogy = watch('category')
    const currentTransactionType = watch('type')

    return(
        <NewTransactionContainer>
            <Header title='Cadastro'/>

            <Form>
                <InputsArea>

                    <InputForm
                        name="name"
                        placeholder="Nome"
                        control={control}
                    />
                    <InputForm
                        name="amount"
                        placeholder="preço"
                        control={control}
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
    )
}