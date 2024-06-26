import UserDetails from "./components/moduleUserDetails/UserDetails";
import './App.css';

function App() {
  
  
  const pessoas = [

    { id: 1, nome: "Jiovane", idade: 36, profissao: "Desenvolvedor React", CNH: true },
    { id: 2, nome: "Jéssica", idade: 26, profissao: "Taróloga", CNH: true },
    { id: 3, nome: "Suelen Carvalho", idade: 42, profissao: "Advogada", CNH: false },
    { id: 4, nome: "Carol", idade: 32, profissao: "vendedora", CNH: false }
    
  ];
  
  
  
  return (

    <div className="App">

      <div className="app-titulo">
        <h1>Lista de Profissões</h1>
      </div>

      <section className="card-section">
        <div className="user-card-container">
        
          
          {pessoas.map((pessoa) => (
            <UserDetails 

              id={pessoa.id}
              nome={pessoa.nome}
              idade={pessoa.idade}
              profissao={pessoa.profissao}
              CNH={pessoa.CNH}

            />
          ))}
        </div>
      </section>

      <section className="footer-section">
        <div className="credentials-footer-text">
          <p>Desenvolvido por Jiovane Ferreira</p>
        </div>
      </section>

    </div>

    

  );
}

export default App;

