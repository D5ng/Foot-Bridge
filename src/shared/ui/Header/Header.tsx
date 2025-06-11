import { Link } from "react-router"
import { useAuthStore } from "@/shared/stores/authStore"
import { header, headerLogo, headerMenu } from "./Header.css"
import { HEADER_NAVIGATION_ITEMS } from "./Header.constants"

export default function Header() {
  const { isAuthenticated, user, signOut, isLoading } = useAuthStore()

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error("Sign out failed:", error)
      alert("로그아웃에 실패했습니다.")
    }
  }

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
                <img src={item.icon} alt={item.alt} title={item.alt} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Auth 상태에 따른 버튼 */}
      {/* <div>
        {isLoading ? (
          <span>로딩중...</span>
        ) : isAuthenticated ? (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>안녕하세요, {user?.email}</span>
            <button onClick={handleSignOut} className={authButton}>
              로그아웃
            </button>
          </div>
        ) : (
          <Link to="/login" className={authButton}>
            로그인
          </Link>
        )}
      </div> */}
    </header>
  )
}
