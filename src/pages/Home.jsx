import {Header} from './../components/header/Header'
export function HomePage () {
  return(
    <>
    <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
                <p>JavaScript, TypeScript, ReactJS, HTML, CSS</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MySQL, MongoDB, Apache</p>
            </li>
          </ul>
        </div>
      </main>

    </>
  )
}