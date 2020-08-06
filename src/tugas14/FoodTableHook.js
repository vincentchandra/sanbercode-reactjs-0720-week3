import React, {useState, useEffect} from 'react';
import "./FoodTableNew.css";
import axios from 'axios';
const Title = ()=> {
    return (
        <>
            <h1 style={{textAlign:"center", width:"600px",margin:"0 auto", marginTop:"50px",marginBottom:"50px"}}>Daftar Harga Buah</h1>
        </>
    )
}

const FoodTableNew = () => {
    
    const [daftarBuah, setDaftarBuah] = useState(null)
    const [inputNama, setInputNama] = useState("")
    const [inputHarga, setInputHarga] = useState("")
    const [inputBerat, setInputBerat] = useState(0)
    const [indexOfForm, setIndexOfForm] = useState(-1)
    const [selectedId, setSelectedId]  =  useState(0)
    const [statusForm, setStatusForm]  =  useState("create")
    useEffect( () => {
        if(daftarBuah === null ){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setDaftarBuah(res.data.map(el => {
                    return {id:el.id, nama: el.name, harga:el.price, berat: el.weight}
                }))
            })
        }
    },[daftarBuah])
    
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
        let buah = daftarBuah.find(x => x.id === idBuah);
        setInputNama(buah.nama)
        setInputHarga(buah.harga)
        setInputBerat(buah.berat)
        setSelectedId(idBuah)
        setStatusForm("edit")
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
    const handleSubmit = (event) => {
        event.preventDefault()
        let name = inputNama
        let weight = inputBerat
        let price = inputHarga
        if (name.replace(/\s/g,'') !== "" ){  
            if(statusForm === "create"){
                axios.post(`http://backendexample.sanbercloud.com/api/fruits`,{name,price,weight})
                .then(res => {
                    setDaftarBuah([...daftarBuah, {id: res.data.id, nama: name, harga: price, berat: weight}])
                })
            } else if(statusForm === "edit"){
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`,{name,price,weight})
                .then(res=>{
                    let dataBuah = daftarBuah.find(el => el.id === selectedId)
                    dataBuah.nama = name
                    dataBuah.berat = weight
                    dataBuah.harga = price
                    setDaftarBuah([...daftarBuah])
                })
            }
            setInputNama("")
            setInputHarga("")
            setInputBerat(0)
            setSelectedId(0)
            setInputNama("")
            setStatusForm("create")
        }


        
    }
    
    return(
    <>
        <Title/>
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
            <div style={{justifyContent:"center",display:'flex',alignItems:'center',}}>
                <button>Tambah Buah</button>
            </div>
            
        </form>
    </>
    )
    
}

export default FoodTableNew;