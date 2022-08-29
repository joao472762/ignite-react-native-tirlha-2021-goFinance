import { useState } from "react";

import { categorySelectedProps } from "../..";
import { Button} from '../../../../components/Button'
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
    categoryKeyAlreadySelected: string,
    closeSectCategoryModal: () => void,
    onSelectCategory: (category:categorySelectedProps) => void
}

export function SelectCategoryModal({
    categoryKeyAlreadySelected,
    closeSectCategoryModal,
    onSelectCategory,
    ...rest
}:SelectCategoryModalProps){

    const [categoryKeySelected, setCategoryKeySelected] = useState('')

    function handleSelectCategory(category: categorySelectedProps){
        onSelectCategory(category)
        setCategoryKeySelected(category.key)
    }
  
    function handleCloseModal(){
        closeSectCategoryModal()
        setCategoryKeySelected(categoryKeyAlreadySelected)
    }

    return(
        <Modal {...rest}  statusBarTranslucent  >
            <Header title="Categoria"/>

            <SelectCategoryModalContent>
                
                <FlatList
                    data={categories}
                    keyExtractor={item => item.key}
                    renderItem= {({item}) => (
                        <Category
                            isSelected = {item.key === categoryKeySelected}
                            onPress = {() => handleSelectCategory(item)}
                        >
                            <Icon name={item.icon}/>
                            <CategoryName>{item.name}</CategoryName>
                        </Category>
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