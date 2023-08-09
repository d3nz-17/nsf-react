import { useState } from "react";
import './index.scss';
import Carro from '../assets/carro2.png'
import Cabeca from './cabecalho.js'



export default function Compra (){

    const [valorTotal, setValorTotal] = useState('');
    const [parcelas, setParcelas] = useState('');
    const [juros, setJuros] = useState('');
    const [parcelaMostra, setParcelaMostra] = useState(0);
    const [valorMostra, setValorMostra] = useState(0);

    function Conta (){

        setJuros(juros/100)

        setValorMostra(valorTotal * (1 + juros)**parcelas);







    }







    return(

        <div className="pag-compra">

            <Cabeca></Cabeca>

            <h3>Simulador de Compra de Veículo</h3>
            <div className="card">

                <div className="carro">
                    <img src={Carro} alt="" />
                </div>

                <div className="dados">

                    <div className="vt">
                    Valor total: <input type="text"onChange={e => setValorTotal(Number(e.target.value))} value={valorTotal}></input>
                    </div>
                    <div className="parc-juros">

                        <div className="vt">
                    Parcelas: <input type="text" onChange={e => setParcelas(Number(e.target.value))} value={parcelas}></input>
                        </div>

                        <div className="vt">
                    Juros Mensal: <input type="text" onChange={e => setJuros(Number(e.target.value))} value={juros}></input>
                        </div>


                    </div>
                    <button onClick={Conta}> Calcular </button>

                    <div className="res">

                    <p>Parcela: {parcelaMostra}</p>
                    <p> Valor total: {valorMostra} </p>

                    </div>


                </div>

            </div>




        </div>





    )





}
