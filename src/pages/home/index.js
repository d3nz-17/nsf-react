
import {Link} from 'react-router-dom';



export default function Home(){



return (
    
    <div className="sexo">

            <h1>Home</h1>

             <Link to = "/media" className='Media' >Ir para Média</Link>
             <Link to = '/tarefas' className='Tarefas'> Ir para Tarefas</Link>
             <Link to = '/personagens' className='Personagens'> Ir para Personagens</Link>
             <Link to = '/fichas' className='Fichas'> Ir para Fichas</Link>


        </div>


    )




}