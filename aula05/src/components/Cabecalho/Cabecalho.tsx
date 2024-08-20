type Cabecalho1Props = {
    paginaProps:string;
    nrPaginaProps:string | number;
    children:React.ReactNode;
}

type Cabecalho2Props = {
    statusProps:"loading" | "deployed" | "xuxu";
    avisoProps:()=>void;
}

function Cabecalho({paginaProps,nrPaginaProps,statusProps,avisoProps,children}:Cabecalho1Props & Cabecalho2Props){

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