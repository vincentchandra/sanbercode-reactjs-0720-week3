import React, {Component} from 'react';
import "./FoodTable.css";
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
class Table extends Component{
    render(){
        return(
            
            <table>
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                </tr>
                {dataHargaBuah.map(el => {
                    return(
                        <tr>
                            <td style={{textAlign:"left"}}>{el.nama}</td>
                            <td style={{textAlign:"left"}}>{el.harga}</td>
                            <td style={{textAlign:"left"}}>{el.berat/1000} kg</td>
                        </tr>
                    )
                })}
                
            </table>
        )
    }
}
function FoodTable(){
    return(
        <>
            <Title title="Tabel Harga Buah"/>
            <Table/>
        </>
    )
}

export default FoodTable;