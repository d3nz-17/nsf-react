import { useState } from 'react'
import Flimes from '../../assets/img/flime.png'
import Lupa from '../../assets/img/icon-buscar.svg'
import './index.scss'
import  axios  from 'axios'
import Lista from '../lista'


export default function Consulta(){


    const [nome, setNome] = useState('');
    const [res, setRes] = useState('');
    const [result, setResult] = useState([]);



    async function MostrarResultados(){

        let resposta = await axios.get('http://www.omdbapi.com/?s=' + nome + '&apikey=633e1591')

        setRes(resposta.data.Search);
        result.push(resposta.data.Search);
        setResult([... result]);

        console.log(result);

    }


    return(
        <div className="pag-consulta">

            <div className="banner">

                <img src={Flimes} alt="" />
                <div className="imdb">
                    <p> IMDB </p>
                </div>

            </div>

            <h3>Consulta de Filmes</h3>

            <div className="pesquisa">

                <p>Nome</p>
                
                <div className="searchbar">
                    <input type="text" onChange={e => setNome(e.target.value)}></input>
                    <button className='butao' onClick={MostrarResultados}><img src={Lupa}/></button>                </div>
                </div>

                <div className='campos'>
                    <h6>Código</h6>
                    <h6>Título</h6>
                    <h6>Ano</h6>
                </div>

               {result.map ((item, i) => <Lista Poster={item[i].Poster} Title={item[i].Title} Year={item[i].Year} imdbID={item[i].imdbID}></Lista>)} 


        </div>






    )





}