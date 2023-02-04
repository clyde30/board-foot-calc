import type { NextPage } from 'next'
import Head from 'next/head'
import Calculator from '../components/calculator'
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {

  const { data: session } = useSession();


  // todo redirect to login if not logged in
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
