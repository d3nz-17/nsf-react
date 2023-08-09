import { useState } from "react";
import Cabeca from "../compra-veiculo/cabecalho";
import ListaCompra from "../comp-lista-compra";
import Sorves from '../assets/sorves.png'
import './index.scss'

export default function Sorvete(){



    const [produto, setProduto] = useState('');
    const [preco, setPreco] = useState('');
    const [total, setTotal] = useState(0);
    const [lista, setLista] = useState([]);


    function AddProduto(){

        let obj = {

            nome: produto,
            preco: preco

        }

        lista.push(obj);

        setLista([...lista])


        setTotal(total + obj.preco);




    }






    return(


        <div className="pag-sorvetes">
            <Cabeca> </Cabeca>

            <div className="card-sorvetes">
                <div className="card-img">
                    <img src={Sorves} />

                    <div className="card-logo"> 
                        Sorveteria
                    </div>


                </div>


                     <p>Novo Item:</p>
                <div className="card-formulario">
                     <input type="text" onChange={e => setProduto(e.target.value)}/> 
                    <div className="card-preco">R$ </div> <input type="text" onChange={e => setPreco(Number(e.target.value))}/> 
                    <button onClick={AddProduto}>Adicionar</button>

                </div>

                <div className="card-lista">
                
                   <div className="card-info">
                   <h3>Lista de Compras</h3>
                    <p>Total: {total} </p>

                    </div> 
                
                <div className="card-elementos">
                    {lista.map ((item) => <ListaCompra produto={item.nome} preco={item.preco} ></ListaCompra>)}
                </div>


                </div>



            </div>




        </div>



    )











}