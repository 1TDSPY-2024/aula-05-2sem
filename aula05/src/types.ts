export type Cabecalho1Props = {
    paginaProps:string;
    numPaginaProps:string | number;
    children:React.ReactNode;
};

export type Cabecalho2Props = {
    statusProps:"loading" | "deployed";
    avisoProps:()=> void;
};