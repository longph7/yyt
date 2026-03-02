import styles from './Sidebar.module.css'

function Sidebar() {
  return (
    <aside className={`bg-light border-end ${styles.sidebar}`}>
      <h5 className={`p-3 border-bottom ${styles.title}`}>菜单</h5>
      <nav>
        <ul className="nav flex-column p-2">
          <li className="nav-item mb-2">
            <a className={`nav-link ${styles.menuLink}`} href="#">菜单项 1</a>
          </li>
          <li className="nav-item mb-2">
            <a className={`nav-link ${styles.menuLink}`} href="#">菜单项 2</a>
          </li>
          <li className="nav-item mb-2">
            <a className={`nav-link ${styles.menuLink}`} href="#">菜单项 3</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
