import { Link } from "react-router"
import { header, headerLogo, headerMenu } from "./Header.css"
import { HEADER_NAVIGATION_ITEMS } from "./Header.constants"

export default function Header() {
  return (
    <header className={header}>
      <h1 className={headerLogo}>
        <Link to="/">FootBridge</Link>
      </h1>
      <nav>
        <ul className={headerMenu}>
          {HEADER_NAVIGATION_ITEMS.map((item) => (
            <li key={item.id}>
              <Link to={item.href}>
                <img src={item.icon} alt={item.alt} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
