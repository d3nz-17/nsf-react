import { useState } from "react"






export default function Tarefas(){


    const [lisTaf, setLisTaf] = useState([]);
    
    const [taf, setTaf] = useState('');

    function altTaf (e){


        setTaf(e.target.value);



    }

    function addTaf () {

        lisTaf.push(taf);
        setLisTaf([... lisTaf]);

        setTaf('');

    }

    function removerItem (){
        lisTaf.pop(taf);
        setLisTaf([... lisTaf]);

        setTaf('');
        




    }

    function Apertar (e){

        if(e.key == 'Enter'){



            addTaf();
        }



    }
    

    return(

        <div className="pag-tarefas">

            <div className="quadratero">

                <h1>Lista de tarefas</h1>

                <p>Adicionar Tarefa: </p> <input type="text" onChange={altTaf} onKeyDown={Apertar}/> <button onClick={addTaf}>Adicionar</button>

                <ul>
                    {lisTaf.map (item =><li> {item} <button onClick={removerItem}> x </button> </li> )}
                </ul>

                <button onClick={() => setLisTaf([])}> limpar tarefas </button>

            </div>

            
        </div>




    )





}