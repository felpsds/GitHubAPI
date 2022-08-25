import './style.css';
import { Card } from '../../components/card';

export function Home() {

  function handleName(name){
    console.log(name)
  }

  return (
    <div className="container">
      <nav>
        GitHub API
      </nav>
      <div className="menu">
        <input type="text" placeholder="Digite um usuário..." onChange={e => handleName(e.target.value)} />
        <button type="button" className='search'><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      
        <Card />
    </div>
    
  )
}
