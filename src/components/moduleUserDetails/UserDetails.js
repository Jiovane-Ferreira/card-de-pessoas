import './UserDetails.css';

function UserDetails({nome, idade, profissao, CNH}) {
    
    return (

    <div className="user-card">
        <ul className="list-card">
            <li><span>Nome:</span> {nome}</li>
            <li><span>Idade:</span> {idade}</li>                
            <li><span>Profissão:</span> {profissao}</li>    
        </ul>
        {CNH ? "Aprovado" : "Reprovado"} 
    </div>

    )
}

export default UserDetails;