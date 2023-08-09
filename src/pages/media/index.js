
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Media(){

    const [N1, setN1] = useState(0);
    const [N2, setN2] = useState(0);
    const [N3, setN3] = useState(0);
    const [Total, setTotal] = useState(0);


    const alterarValor1 = (e) => {


        setN1(Number(e.target.value));


    }



    
    const alterarValor2 = (e) => {


        setN2(Number(e.target.value));


    }


    
    const alterarValor3 = (e) => {


        setN3(Number(e.target.value));


    }

    const media  = () =>{

        setTotal((N1 + N2 + N3) / 3);
    }




    return (

        <div className="pag-media">

            <div className="quadradatero">

                <h1>Média</h1>

                <div className="nota">
                    Nota 01: <input type="text" value={N1} onChange={alterarValor1}/>
                </div>

                <div className="nota">
                    Nota 02: <input type="text" value={N2} onChange={alterarValor2}/>
                </div>

                <div className="nota">
                    Nota 03: <input type="text" value={N3} onChange={alterarValor3}/>
                </div>

                <button onClick={media}> Calcular </button>

                < div className="total">
                    Total:  {Total}
                </div>

                <Link to = '/'> Voltar pra Home </Link>

            </div>



        </div>





    )



}