import "./style.css"
import instagramm from './../../img/icons/instagram.svg'
import gitHub from './../../img/icons/gitHub.svg'

export function Footer () {
  return(
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item"><a href="#!"><img src={instagramm} alt="Link"/></a></li>
            <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
          </ul>
          <div className="copyright">
            <p>LevDevPro</p>
          </div>
        </div>
      </div>
    </footer>
  )
}