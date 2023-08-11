import './index.scss'

export default function Lista(props){

    return(

        <div className='comp-lista'>
            <p>{props.imdbID}</p>
            <p>{props.Title}</p>
            <p>{props.Year}</p>
            <img src={props.Poster}/>
        </div>





    )








}