type Cabecalho1Props = {
    paginaProps:string;
    numPaginaProps:string | number;
    children:React.ReactNode;
};

type Cabecalho2Props = {
    statusProps:"loading" | "deployed";
    avisoProps:()=> void;
};

function Cabecalho({paginaProps, numPaginaProps, statusProps, avisoProps, children}:Cabecalho1Props & Cabecalho2Props) {

    document.title = statusProps + " - " + paginaProps;

    const aluno:{nome:string, idade:number, altura:number} = {
        nome: "João",
        idade: 20,
        altura: 1.72
    };

    const{nome, idade, altura} = aluno;

    return (
        <header>
            <h1>{paginaProps + "\n - " + numPaginaProps}</h1>
            <button onClick={()=> avisoProps()}>Aviso</button>
            
            <div>
                {children}
            </div>

            {/* destructuring */}
            <p>Nome do Aluno: {nome}</p>
            <p>Idade do Aluno: {idade}</p>
            <p>Altura do Aluno: {altura}</p>
        </header>
    );
}

export default Cabecalho;