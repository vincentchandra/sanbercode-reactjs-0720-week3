import React from "react"
import {FoodTableProvider} from './FoodTableContext'
import FoodTableList from './FoodTableList'
import FoodTableForm from './FoodTableForm'
import { FoodIdProvider } from "./FoodIdContext"

const FoodTableApp = () => {
    return(
        <>
        <FoodTableProvider>
            <FoodIdProvider>
                <FoodTableList/> 
                <FoodTableForm/> 

            </FoodIdProvider>
        </FoodTableProvider>
        </>
    )
}

export default FoodTableApp