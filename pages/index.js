import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          AWS Lambda x JWT Auth
        </h1>
        <p className={styles.description}>
          This is a simple example of JWT token based authentication using AWS Lambda that can be used across different projects.
        </p>
      </main>
    </>
  )
}
