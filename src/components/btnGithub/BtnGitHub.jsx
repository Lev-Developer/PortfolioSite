import gitHubBlack from './../../img/icons/gitHub-black.svg'
import "./style.css"

export function BtnGitHub ({link}) {
return(
          <a href={link} target='_blank' rel="noreferrer" className="btn-outline">
              <img src={gitHubBlack} alt="" />
              GitHub repo
          </a>
)
}