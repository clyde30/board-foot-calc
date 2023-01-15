import type { NextPage } from 'next'
import Head from 'next/head'
import Calculator from '../components/calculator'

const Home: NextPage = () => {
  return (
    <div className='flex items-center justify-center bg-white h-screen'>
      <Head>
        <title>Board Foot Calculator</title>
      </Head>

      <main>
        <Calculator />
      </main>
    </div>
  )
}

export default Home
