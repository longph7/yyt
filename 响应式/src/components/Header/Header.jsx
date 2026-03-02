import styles from './Header.module.css'

function Header() {
  return (
    <header className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.header}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${styles.logo}`} href="#">Logo</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="#">首页</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="#">关于</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="#">联系</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
