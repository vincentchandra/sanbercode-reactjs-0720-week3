import React, {useState, useEffect, createContext} from 'react';
// import "./FoodTableNew.css";
import axios from 'axios';

export const FoodTableContext = createContext()

export const FoodTableProvider = props => {
    const [daftarBuah, setDaftarBuah] = useState({
        list:null,
        selectedId:-1
    })
    useEffect( () => {
        if(daftarBuah.list === null ){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setDaftarBuah({...daftarBuah,list:res.data.map(el => {
                    return {id:el.id, nama: el.name, harga:el.price, berat: el.weight}
                })})
            })
        }
    },[daftarBuah])
    return(
        <FoodTableContext.Provider value={[daftarBuah, setDaftarBuah]}>
            {props.children}
        </FoodTableContext.Provider>
    );

};

export default FoodTableContext;


