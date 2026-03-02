import styles from './Layout.module.css'

function Layout({ header, sidebar, children }) {
  return (
    <div className={styles.layout}>
      {header && <div className={styles.headerArea}>{header}</div>}
      <div className="container-fluid">
        <div className="row">
          {sidebar && (
            <aside className={`col-12 col-md-3 col-lg-2 ${styles.sidebarArea}`}>
              {sidebar}
            </aside>
          )}
          <main className={`col-12 ${sidebar ? 'col-md-9 col-lg-10' : ''} ${styles.contentArea}`}>
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
