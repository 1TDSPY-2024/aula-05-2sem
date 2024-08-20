type CabecalhoProps = {
    tituloProps:string;
    avisoProps:void; 
};

function Cabecalho({tituloProps,avisoProps}:CabecalhoProps){

    document.title = tituloProps;

    // //Desestruturação---------------------
    // const aluno = {
    //     nome:'João',
    //     idade:20
    // }
     
    // const{nome,idade} = aluno;
    // //Desestruturação---------------------

    return(
        <header>
            <h1>{tituloProps}</h1>
            <button onClick = {()=> avisoProps()}>Aviso</button>
            {/* <p>Nome do aluno: {nome}</p>
            <p>Idade do aluno: {idade}</p> */}
        </header>
    );
}

export default Cabecalho;