import styles from "../styles/Layout.module.css"
const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <main className={styles.container}>
{/*             <h1>hello</h1>
 */}            {children}
            </main>
            
        </div>
    )
}

export default Layout
