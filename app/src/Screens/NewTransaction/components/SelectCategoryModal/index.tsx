import { Controller, useFormContext } from "react-hook-form";

import { CreateNewTransactionSchema } from "../..";
import { Button} from '../../../../components/Button';
import { Header } from "../../../../components/Header";
import { categories } from "../../../../utils/categories";
import { FlatList, Modal, ModalProps } from "react-native";
import {
    Icon,
    Footer,
    Category,
    CategoryName,
    ItemSeparator,
    SelectCategoryModalContent,
} from './styles'

interface SelectCategoryModalProps extends ModalProps {
    closeSectCategoryModal: () => void,
}

export function SelectCategoryModal({ closeSectCategoryModal,...rest }:SelectCategoryModalProps){

    function handleCloseModal(){
        closeSectCategoryModal()
    }

    const {control,watch} =  useFormContext<CreateNewTransactionSchema>()
    const currentCategory = watch('category')

    return(
        <Modal {...rest}  statusBarTranslucent  >      
            <Header title="Categoria"/>

            <SelectCategoryModalContent>
                
                <FlatList
                    data={categories}
                    keyExtractor={item => item.key}
                    renderItem= {({ item }) => (

                        <Controller
                            name="category"
                            control={control}
                            render= {({ field:{onChange}}) => (

                                <Category
                                    isSelected = {item.key === currentCategory.key}
                                    onPress = {() => onChange(
                                        {
                                              name: item.name,
                                            key: item.key
                                        }
                                    )}
                                >
                                    <Icon name={item.icon}/>
                                    <CategoryName>{item.name}</CategoryName>
                                </Category>

                            )}
                        />
                    )}

                    style={{flex: 1}}
                    ItemSeparatorComponent={() => <ItemSeparator/>}
                />

                <Footer>
                    <Button 
                        title="Selecionar"
                        onPress={handleCloseModal}
                    />
                </Footer>
            </SelectCategoryModalContent>
        </Modal>
    )
}