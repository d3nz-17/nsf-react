import { useState } from "react"
import axios from 'axios';



export default function Correio(){


    const [CEP, setCEP] = useState('');
    const [info, setInfo] = useState('');

    async function Buscar(){

        let url = 'https://viacep.com.br/ws/'+ CEP + '/json/';
        let resposta = await axios.get(url);
        setInfo(resposta.data.bairro);


    }

    return(
        <div className="pag-correio">
            <div>
                CEP: <input type="text" onChange={e => setCEP(e.target.value)} value={CEP}/>   <button onClick={Buscar}>Buscar</button>
            </div>

            <h3>
                {info}
            </h3>


        </div>




    )




}