export type Cabecalho1Props = {
    paginaProps:string;
    nrPaginaProps:string | number;
    children:React.ReactNode;
}

export interface Cabecalho2Props  {
    statusProps:"loading" | "deployed" | "xuxu";
    avisoProps:()=>void;
}