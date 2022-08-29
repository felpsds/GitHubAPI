import './styles.css'
import { ReposItem } from './repositorie'
export function Card({users, profile_pic, name, follow, following, repositorie}){
    return(
        <div className="card">
            <div className="body">
                  <h1>Usuário: {users} </h1>
                  <div className="infos">
                      <img src={profile_pic} alt=""/>
                      <div className="userinfos">
                          <p className="name">Nome: {name}</p>
                          <p className="follow">Seguidores: {follow}</p>
                          <p className="following">Seguindo: {following}</p>
                      </div>
                  </div>
                  <h1>Repositorio:</h1>
                  <div className="repos">
                      {repositorie.map(repo => <ReposItem repos={repo} />)}
                  </div>
              </div>
        </div>
    )
}