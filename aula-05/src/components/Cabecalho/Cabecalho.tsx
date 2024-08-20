export default function Cabecalho(props:{tituloProps: string}){

    document.title = props.tituloProps;
    return( 
        <header>
            <h1>Cabeçalho</h1>
        </header>
    );
}