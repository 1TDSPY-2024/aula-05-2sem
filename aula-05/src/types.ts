export type CabecalhoProps = {
    paginaProps: string;
    nrPaginaProps:string | number;
    children:React.ReactNode;
}
export interface CabecalhoProps2  {
  
    statusProps:"loading" | "deployed";
    avisoProps:Function;
}
