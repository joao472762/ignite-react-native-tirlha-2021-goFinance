import { useState } from "react";

import { Header } from "../../components/Header";
import { Input } from "../../components/Form/input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import {
    Form,
    InputsArea,
    TransactionsType,
    NewTransactionContainer,
} from './styles'
import { SelectCategory } from "../../components/Form/SelectCategory";


export function NewTransaction(){
    const [transactionTypeSelected, setTransactionTypeSelected] = useState<'income' |'outcome'|''>('')

    function handleSelectTransactionType(transactionType: 'income' | 'outcome'){
        setTransactionTypeSelected(transactionType)
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
                    <SelectCategory title="Categoria"/>
                </InputsArea>



                <Button title="Enviar"/>

            </Form>
        </NewTransactionContainer>
    )
}