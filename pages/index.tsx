import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Affiliations from '../components/Affiliations'
import Banner from '../components/Banner'
import Descriptions from '../components/Descriptions'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Pricing from '../components/Pricing'
import Steps from '../components/Steps'
import Testimonials from '../components/Testimonials'
import { GetStaticProps, InferGetStaticPropsType } from 'next';




// export interface Plans{
//   monthly:[
//       {
//           description:string,
//           id:number,
//           mostPopular:boolean,
//           name:string,
//           perks:string[],
//           price:number
//       }
//   ],

//   yearly:string

// }

export interface Plans {
  description: string,
  id: number,
  mostPopular: boolean,
  name: string,
  perks: string[],
  price: number,
  planType: string
}



const Home: NextPage = ({ plans }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <div className='container'>
        <Head>
          <title>Recrowdly</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main>
          <Banner />
          <Affiliations />
          <Steps />
          <Descriptions />

        </main>

        {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
      </div>
      <Pricing plans={plans} />
      <div className='container'>
        <Testimonials />
      </div>
      <Footer />

    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(`https://recrowdly-2e455-default-rtdb.firebaseio.com/planList.json`)
  const plans: Plans[] = await data.json()

  return {
    props: {
      plans
    }
  }
}
