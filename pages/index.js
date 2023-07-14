import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>sceneJunction.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to screenJunction.com!" />
        <img src="/logo.png" alt="Netlify Logo" className={styles.logo} />
        <p className="description">
          Coming Soon
        </p>
      </main>

      <Footer />
    </div>
  )
}
