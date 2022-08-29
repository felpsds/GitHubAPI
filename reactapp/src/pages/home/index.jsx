import './style.css';
import { Card } from '../../Card';
import React, {Fragment, useState} from 'react';
import Axios from 'axios';
var user = '';
var render = false;
export function Home() {

  const [users, setUsers] = useState();
  const [picture, setPicute] = useState();
  const [name, setName] = useState();
  const [follow, setFollow] = useState();
  const [following, setFollowing] = useState();
  const [repositorie,setRepositorie] = useState([])

  function handleName (input){ 
    user = document.querySelector("input").value;
    if(input == undefined){
      (user == '') ? alert("Digite um usuário válido!") : gitCall(user); 
    }
  }
  
  function gitCall (userName){
    render = true;
    Axios.get(`http://localhost:8290/github/${userName}`)
    .then(
        (response) => {
          var dataUser = response.data;
          let size = dataUser.length;
          setUsers(dataUser[size-1].user)
          setPicute(dataUser[size-1].infos.avatar_url)
          setName(dataUser[size-1].infos.name)
          setFollow(dataUser[size-1].infos.followers)
          setFollowing(dataUser[size-1].infos.following)
          dataUser.pop()
          setRepositorie(dataUser)
        })
    .catch((error) => {
      if (error.response.status == 404) {
        alert("Usuário não encontrado... Infome novamente!")
      } else {
        alert("Serviço indisponível! Tente novamente mais tarde...")
      }
    })
  }
  

  return (
    <div className="container">
      <nav>
        GitHub API
      </nav>
      <div className="menu">
        <input type="text" placeholder="Digite um usuário..."/>
        <button type="button" className="search" onClick={e => handleName(e.target.value)}><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div>
        {
          render ? <Card users={users} profile_pic = {picture} name={name} follow={follow} following={following} repositorie={repositorie}/> : null
        }
      </div>
      <footer>
        <p> Devesenvolvido por FelpsDS </p>
      </footer>
    </div>
    
  )
}
