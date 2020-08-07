import React, {useState, createContext} from 'react';

export const FoodIdContext = createContext()
export const FoodIdProvider = props => {
    const [selectedId, setSelectedId]  =  useState(-1)
    return(
        <FoodIdContext.Provider value = {[selectedId,setSelectedId]}>
            {props.children}
        </FoodIdContext.Provider>
    );
};

export default FoodIdContext