import { useState } from 'react';
import {FiSearch} from 'react-icons/fi'
import './styles.css';
import api from './services/api';


function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch(){
    //53437400/json/

    if(input === ''){
      alert("Preencha o campo com um CEP.")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");

    }catch{
      alert("Erro ao buscar o CEP.");
      setInput("")
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Informe o cep..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='white'/>
        </button>
      </div>


      {Object.keys(cep).length > 0 && ( 
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>{cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

        </main>
      )}
     

    </div>
  );
}

export default App;
