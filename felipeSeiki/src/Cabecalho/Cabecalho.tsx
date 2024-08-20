type Cabecalho1Props = {
    paginaProps:string;
    nrPaginaProps:string | number;
};

type Cabecalho2Props = {
    statusProps:"loading";
    avisoProps:()=>void; 
};

function Cabecalho({paginaProps,nrPaginaProps,statusProps,avisoProps}:Cabecalho1Props & Cabecalho2Props){

    document.title = statusProps+" - "+nrPaginaProps;

    return(
        <header>
            <h1>{paginaProps+"\n - "+nrPaginaProps}</h1>
            <button onClick = {()=> avisoProps()}>Aviso</button>
        </header>
    );
}

export default Cabecalho;