function UserDetails({nome, idade, profissao, CNH}) {
    
    return (

        <div>
            <ul>
                <li>Nome: {nome}</li>
                <li>Idade: {idade}</li>                
                <li>Profissão: {profissao}</li>    
            </ul>
            {CNH ? "Aprovado" : "Reprovado"} 
        </div>
    )
}

export default UserDetails;