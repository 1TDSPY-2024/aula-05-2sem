import { CabecalhoProps, CabecalhoProps2 } from "../../types";

 
export default function Cabecalho({paginaProps,nrPaginaProps,statusProps,avisoProps,children}:CabecalhoProps & CabecalhoProps2){


    document.title = statusProps + " - " + paginaProps;

    return( 
        <header>
            <h1>{paginaProps+"\n - " + nrPaginaProps}</h1>
            <button onClick={()=>{avisoProps()}}>Aviso</button>
            <div>{children}</div>
        </header>
    );
}