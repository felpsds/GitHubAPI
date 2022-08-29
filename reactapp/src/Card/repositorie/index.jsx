import './styles.css'
export function ReposItem({repos}){
    return(
        <div className="item">
            <div className="name">
                Nome do Projeto: {repos.name}
            </div>
            <div className="url">
                Link do Projeto: {repos.html_url}
            </div>
            <div className="lang">
                Linguagem: {repos.language}
            </div>
        </div>
    )
}