import './index.scss';
import { useState } from 'react';
import Modelo from './modelo.js';


export default function Personagens(){


    const [nome, SetNome] = useState('');
    const [classe, SetClasse] = useState('');
    const [pers, SetPers] = useState([nome, classe])
    const [fichas, SetFichas] = useState([]);

    function addFicha (e){
        fichas.push(pers);
        SetFichas([...fichas]);

    }


    return(

        <div>
            <div className='add-personagens'>

                <h1>Adicionar Personagens</h1>
                <h3>Nome: <input type="text" onChange={e => SetNome(e.target.value)}/> </h3>
                <h3>Classe: <input type="text" onChange={e => SetClasse(e.target.value)}/> </h3>
                <button onClick={addFicha}>Adicionar</button>

            </div>

                <div>
                {fichas.map ((item) =><Modelo nome={nome} classe={classe}/> )}
                </div>


        </div>



    )






}





