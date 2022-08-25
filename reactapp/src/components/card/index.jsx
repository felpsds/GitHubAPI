import './style.css';
export function Card(){
    var userName = '';
    return(
        <div>
            <div className="card">
                <div className="body">
                    <h1>Usuário:</h1>
                    <div className="infos">
                        <img src="https://avatars.githubusercontent.com/u/84294217?v=4" alt=""/>
                        <div className="userinfos">
                            <p className="name">
                                Nome: {name = null}
                            </p>
                            <p className="follow">Seguidores: </p>
                            <p className="following">Seguindo: </p>
                            <button className='profile'> Perfil </button>
                        </div>
                    </div>
                    <div className="repos">
                        <h2>Repositorio:</h2>

                    </div>
                </div>
            </div>
        </div>
    )
}