import React from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

import { Input } from "../Form/input";
import { ErrorMenssage } from "./styles";

interface FormControlProps {
    name: string,
    type: 'income' | 'outcome'
    amount: string,
    category: {
        name: string,
        key: string
    }

}

interface InputFormProps extends TextInputProps {
    control: Control<FormControlProps>
    name: 'type' | 'amount' | 'name'
    error: string | undefined
}

export function InputForm({control,name,error, ...rest}: InputFormProps){
    return(
        <>

            <Controller 
                control={control}
                name={name}
                render={({field:{onChange,value}}) => (
                    <Input 
                        {...rest}
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />
            {error && <ErrorMenssage>{error}</ErrorMenssage>}
        </>
    )
}