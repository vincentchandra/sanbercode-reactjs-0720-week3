import React, {useContext, useState, useEffect} from 'react'
import {FoodTableContext} from './FoodTableContext'
import axios from 'axios'

const FoodTableForm = () => {
    // const [{daftarBuah, setDaftarBuah},{inputNama, setInputNama},{inputHarga, setInputHarga},
    // {inputBerat, setInputBerat},{selectedId, setSelectedId},{statusForm, setStatusForm}] = useContext(FoodTableContext)
    const [daftarBuah, setDaftarBuah] = useContext(FoodTableContext)
    const [inputNama, setInputNama] = useState("")
    const [inputHarga, setInputHarga] = useState("")
    const [inputBerat, setInputBerat] = useState(0)
    // let [selectedId, setSelectedId]  =  useContext(FoodIdContext)
    const [statusForm, setStatusForm]  =  useState("create")
    const [tempId, setTempId] = useState(-2)

    useEffect(() => {
        if(daftarBuah.selectedId==-1){
            return;
        }
        if(daftarBuah.selectedId!=-1){
            let buah = daftarBuah.list.find(x => x.id === daftarBuah.selectedId)
            setInputNama(buah.nama)
            setInputHarga(buah.harga)
            setInputBerat(buah.berat)
            setStatusForm("edit")
            setTempId(daftarBuah.selectedId)
            setDaftarBuah({...daftarBuah,selectedId:-1})
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        let name = inputNama
        let weight = inputBerat
        let price = inputHarga
        if (name.replace(/\s/g,'') !== "" ){  
            if(statusForm === "create"){
                axios.post(`http://backendexample.sanbercloud.com/api/fruits`,{name,price,weight})
                .then(res => {
                    setDaftarBuah({...daftarBuah,list:[...daftarBuah.list, {id: res.data.id, nama: name, harga: price, berat: weight}]})
                })
            } else if(statusForm === "edit"){
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${tempId}`,{name,price,weight})
                .then(res=>{
                    let dataBuah = daftarBuah.list.find(el => el.id === tempId)
                    dataBuah.nama = name
                    dataBuah.berat = weight
                    dataBuah.harga = price
                    setDaftarBuah({...daftarBuah,list:[...daftarBuah.list]})
                })
            }
            setInputNama("")
            setInputHarga("")
            setInputBerat(0)
            setStatusForm("create")
        }
    }
    
    const handleChangeNama = (event) => {
        setInputNama(event.target.value)
    }
    const handleChangeHarga = (event) => {
        setInputHarga(event.target.value)
    }
    const handleChangeBerat = (event) => {
        setInputBerat(event.target.value)
    }
    return(

    <>
        <form style={{width:"100%"}} onSubmit={handleSubmit}>
            <div style={{textAlign:"center", marginBottom:"10px"}}>
                <label>Nama Buah: </label>
                <input type="text" value={inputNama} onChange={handleChangeNama}/>
            </div>
            <div style={{textAlign:"center", marginBottom:"10px"}}>
                <label>Harga Buah: </label>
                <input type="text" value={inputHarga} onChange={handleChangeHarga}/>
            </div>
            <div style={{textAlign:"center", marginBottom:"10px"}}>
                <label>Berat Buah: </label>
                <input type="text" value={inputBerat} onChange={handleChangeBerat}/>
            </div>
            <div style={{justifyContent:"center",display:'flex',alignItems:'center'}}>
                <button>Tambah Buah</button>
            </div>
            
        </form>
    </>
    )


}

export default FoodTableForm