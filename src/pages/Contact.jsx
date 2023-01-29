import { Footer } from "../components/footer/Footer";

export function ContactPage() {
  return (
    <>
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>VA Ricmond, USA</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+8048247162">+1 (804) 824-71-62</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:1levtop4ik1@gmail.com">1levtop4ik1@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
