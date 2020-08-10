import React from "react"
import {FoodTableProvider} from './FoodTableContext'
import FoodTableList from './FoodTableList'
import FoodTableForm from './FoodTableForm'

const FoodTableApp = () => {
    return(
        <>
        <FoodTableProvider>
            <FoodTableList/> 
            <FoodTableForm/> 

        </FoodTableProvider>
        </>
    )
}

export default FoodTableApp