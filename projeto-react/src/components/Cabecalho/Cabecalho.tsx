import { Cabecalho1Props, Cabecalho2Props } from "../../types";

// Intersection de tipos ao passar as Props
function Cabecalho({paginaProps,nrPaginaProps,statusProps,avisoProps, children}:Cabecalho1Props & Cabecalho2Props){

    document.title = statusProps+" - "+nrPaginaProps;

    return(
        <header>
            <h1>{paginaProps+"\n - "+nrPaginaProps}</h1>
            <button onClick={()=> avisoProps()}>Aviso</button>
            <div>
                {children}
            </div>
        </header>
    );
}
export default Cabecalho;