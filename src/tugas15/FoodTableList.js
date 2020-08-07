import React, {useContext,useState} from "react"
import {FoodTableContext} from './FoodTableContext'
import axios from 'axios'
import {FoodIdContext} from "./FoodIdContext"

const FoodTableList = () => {
    const [daftarBuah, setDaftarBuah] = useContext(FoodTableContext) 
    const [selectedId,setSelectedId]  =  useContext(FoodIdContext)

    const handleDelete = (event) => {
        let idBuah = parseInt(event.target.value)
        let newDaftarBuah = daftarBuah.filter(el => el.id !== idBuah)
        
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res=>{
            console.log(res)
        })
        
        setDaftarBuah([...newDaftarBuah])
    }
    const handleEdit = (event) => {
        let idBuah = parseInt(event.target.value)
        setSelectedId(idBuah)
    }

    return(
        <>
        <h1 style={{textAlign:"center", width:"600px",margin:"0 auto", marginTop:"50px",marginBottom:"50px"}}>Daftar Harga Buah</h1>
        <table>
            <thead>
                <tr >
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                    <th></th>
                </tr>

            </thead>
            <tbody>
                { daftarBuah !== null && daftarBuah.map((el) => {
                    return(
                        <tr>
                            <td style={{textAlign:"left"}}>{el.nama}</td>
                            <td style={{textAlign:"left"}}>{el.harga}</td>
                            <td style={{textAlign:"left"}}>{el.berat/1000} kg</td>
                            <td>
                                <button onClick={handleEdit} value={el.id}>edit</button>   
                                <button onClick={handleDelete} value={el.id}>delete</button>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
            
            
        </table>
        </>
    )


}

export default FoodTableList