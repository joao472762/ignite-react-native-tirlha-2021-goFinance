import { useState } from "react";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Form/input";
import { SelectCategory } from "../../components/Form/SelectCategory";
import { SelectCategoryModal } from "./components/SelectCategoryModal";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import {
    Form,
    InputsArea,
    TransactionsType,
    NewTransactionContainer,
} from './styles'

export interface categorySelectedProps {
    key: string,
    name: string,
    icon: string,
    color: string
}

export function NewTransaction(){
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [categorySelected, setCategorySelected] = useState<categorySelectedProps>()
    const [transactionTypeSelected, setTransactionTypeSelected] = useState<'income' |'outcome'|''>('')

    function handleSelectTransactionType(transactionType: 'income' | 'outcome'){
        setTransactionTypeSelected(transactionType)
    }

    function handleSelectCategory(category: categorySelectedProps){
        setCategorySelected(category)
    }

    function handleOpenSectCategoryModal(){
        setModalIsVisible(true)
    }
    function handleCloseSectCategoryModal(){
        setModalIsVisible(false)
    }
   
    return(
        <NewTransactionContainer>
            <Header title='Cadastro'/>

            <Form>
                <InputsArea>
                    <Input placeholder="Nome"  />
                    <Input placeholder="Preço"/>

                    <TransactionsType>
                        <TransactionTypeButton
                            type="Income"
                            isActive={transactionTypeSelected === 'income'}
                            onPress={() => handleSelectTransactionType('income')}
                        />
                        <TransactionTypeButton
                            type="Outcome"
                            isActive={transactionTypeSelected === 'outcome'}
                            onPress={() => handleSelectTransactionType('outcome')}
                        />

                    </TransactionsType>
                    <SelectCategory 
                        title={categorySelected ? categorySelected.name : 'Categoria'}
                        onPress={handleOpenSectCategoryModal}
                    />
                </InputsArea>

                <Button title="Enviar"/>

            </Form>
            
            <SelectCategoryModal 
                animationType = 'slide'
                visible={modalIsVisible}
                onSelectCategory={handleSelectCategory}
                closeSectCategoryModal = {handleCloseSectCategoryModal}
                categoryKeyAlreadySelected={categorySelected ? categorySelected.key : ''}
            />
        </NewTransactionContainer>
    )
}