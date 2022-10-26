import React, { useState } from "react";
import axios from "axios";
import './App.css'

export default function App() {

  const [user, setUser] = useState([]);
  const [input, setInput] = useState('');
  const api = axios.create({
    baseURL: 'https://api.github.com/users/'
  })

  async function loadUser() {
    try {
      const response = await api.get(input);
      setUser(response.data);
      setInput('');
    }
    catch (error) {
      alert("Usuario não encontrado")
      setInput('');
    }
  }

  return (
    <div className="container">
      <h1>GitHub User</h1>
      <div className="areaInput">
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="button" onClick={loadUser}>
          <div className="textButton">Pesquisar</div>
        </div>
      </div>
      <div className="areaResponse">
        <div className="areaImg">
          <img src={user.avatar_url} alt="" />
        </div>
        <div className="textName">{user.name}</div>
        <a href={user.html_url} target="blank">{user.html_url}</a>

      </div>

    </div>
  )
}