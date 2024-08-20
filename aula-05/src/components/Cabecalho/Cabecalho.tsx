
type CabecalhoProps = {
    paginaProps: string;
    nrPaginaProps:string | number;
    statusProps:"loading" | "deployed";
    avisoProps:Function;
}


export default function Cabecalho({paginaProps,nrPaginaProps,statusProps,avisoProps}:CabecalhoProps){


    document.title = statusProps + " - " + paginaProps;

    return( 
        <header>
            <h1>{paginaProps+"\n - " + nrPaginaProps}</h1>
            <button onClick={()=>{avisoProps()}}>Aviso</button>

        </header>
    );
}