import React from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

import { Input } from "../Form/input";

interface FormControlProps {
    name: string,
    type: string,
    amount: string,
    category: {
        name: string,
        key: string
    }

}

interface InputFormProps extends TextInputProps {
    control: Control<FormControlProps>
    name: 'type' | 'amount' | 'name'| 'category'
}

export function InputForm({control,name, ...rest}: InputFormProps){
    return(
        <Controller 
            control={control}
            name={name}
            render={({field:{onChange,value}}) => (
                <Input 
                    {...rest}
                    value={value.toString()}
                    onChangeText={onChange}
                />
            )}
        />
    )
}