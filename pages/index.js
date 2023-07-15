import Head from 'next/head'
import Header from '@components/Header'
// import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>sceneJunction.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to SceneJunction.com!" />
        <img src="/logo.png" alt="SceneJunction Logo" className={styles.logo} />
        <p className="description">
          September We Rise!
        </p>
      </main>
    </div>
  )
}
