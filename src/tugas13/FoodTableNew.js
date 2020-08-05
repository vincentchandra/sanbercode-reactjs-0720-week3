import React, {Component} from 'react';
import "./FoodTableNew.css";
class Title extends Component{
    render(){
        return (
            <>
             <h1 style={{textAlign:"center", width:"600px",margin:"0 auto", marginTop:"50px",marginBottom:"50px"}}>{this.props.title}</h1>
            </>
        )
    }
}
let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
]

class FoodTableNew extends Component{
    constructor(props){
        super(props)
        this.state = {
            daftarBuah:dataHargaBuah,
            inputNama:"",
            inputHarga:"",
            inputBerat:"",
            indexOfForm:-1
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChangeNama = this.handleChangeNama.bind(this);
        this.handleChangeHarga = this.handleChangeHarga.bind(this);
        this.handleChangeBerat = this.handleChangeBerat.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      
    handleDelete(event){
        let idx = event.target.value
        let newDaftarBuah = this.state.daftarBuah
        newDaftarBuah.splice(idx,1)
        this.setState({
            daftarBuah:newDaftarBuah
        })
    }
    handleEdit(event){
        let idx = event.target.value
        let buah = this.state.daftarBuah[idx];
        this.setState({
            inputNama:buah.nama,
            inputHarga:buah.harga,
            inputBerat:buah.berat,
            indexOfForm:idx
        })
    }
    handleChangeNama(event){
        this.setState({inputNama:event.target.value});
    }
    handleChangeHarga(event){
        this.setState({inputHarga:event.target.value});
    }
    handleChangeBerat(event){
        this.setState({inputBerat:event.target.value});
    }
    handleSubmit(event){
        event.preventDefault()
        let newDaftarBuah = this.state.daftarBuah
        let index = this.state.indexOfForm
        if(index === -1){
            newDaftarBuah = [...newDaftarBuah,{nama: this.state.inputNama, harga:this.state.inputHarga, berat: this.state.inputBerat}]
        }else{
            newDaftarBuah[index] = {nama: this.state.inputNama, harga:this.state.inputHarga, berat: this.state.inputBerat}
        }
        this.setState({
            daftarBuah :newDaftarBuah,
            inputNama:"",
            inputHarga:"",
            inputBerat:"",
            indexOfForm:-1
        })
    }
    render(){
        return(
        <>
            <Title title="Tabel Harga Buah"/>
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
                    {this.state.daftarBuah.map((el, index) => {
                        return(
                            <tr>
                                <td style={{textAlign:"left"}}>{el.nama}</td>
                                <td style={{textAlign:"left"}}>{el.harga}</td>
                                <td style={{textAlign:"left"}}>{el.berat/1000} kg</td>
                                <td>
                                    <button onClick={this.handleEdit} value={index}>edit</button>   
                                    <button onClick={this.handleDelete} value={index}>delete</button>
                                 
                                    
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
                
                
            </table>
            <form style={{width:"100%"}} onSubmit={this.handleSubmit}>
                <div style={{textAlign:"center", marginBottom:"10px"}}>
                    <label>Nama Buah: </label>
                    <input type="text" value={this.state.inputNama} onChange={this.handleChangeNama}/>
                </div>
                <div style={{textAlign:"center", marginBottom:"10px"}}>
                    <label>Harga Buah: </label>
                    <input type="text" value={this.state.inputHarga} onChange={this.handleChangeHarga}/>
                </div>
                <div style={{textAlign:"center", marginBottom:"10px"}}>
                    <label>Berat Buah: </label>
                    <input type="text" value={this.state.inputBerat} onChange={this.handleChangeBerat}/>
                </div>
                <div style={{justifyContent:"center",display:'flex',alignItems:'center',}}>
                    <button>Tambah Buah</button>
                </div>
                
            </form>
        </>
        )
    }
}

export default FoodTableNew;