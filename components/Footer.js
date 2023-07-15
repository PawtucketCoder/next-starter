import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo.png" alt="SceneJunction Logo" className={styles.logo} />
      </footer>
    </>
  )
}
