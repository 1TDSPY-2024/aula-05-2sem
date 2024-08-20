
type CabecalhoProps = {
    paginaProps: string;
    nrPaginaProps:string | number;
    children:React.ReactNode;
}
interface CabecalhoProps2  {
  
    statusProps:"loading" | "deployed";
    avisoProps:Function;
}

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