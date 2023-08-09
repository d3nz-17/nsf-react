import './index.scss'


export default function ListaCompra (props){

    return(

        <div className="comp-lista-compra">
            <div className="comp-item">
                <p>{props.produto} </p>
                <p>R$ {props.preco}</p>
            </div>



        </div>





    )





}