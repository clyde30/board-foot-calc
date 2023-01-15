import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='flex items-center justify-center bg-white h-screen'>
      <Head>
        <title>Board Foot Calculator</title>
      </Head>

      <main>
        <div className='w-96'>
          <div className='container bg-orange-300 pt-6 px-6 rounded-t-lg shadow-2xl'>
            <div className='flex flex-col'>
              <div className="mb-4 flex flex-col">
                <label htmlFor="price">Price / BF</label>
                <input type="number" name="price" id="price" placeholder='$'/>
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="length">Length(ft)</label>
                <select name="length" id="length">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="width">Width(in)</label>
                <select name="width" id="width">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                </select>
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="thickness">Thickness(in)</label>
                <select name="thickness" id="thickness">
                  <option value="4/4">4/4</option>
                  <option value="5/4">5/4</option>
                  <option value="8/4">8/4</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-black text-white text-center py-4 rounded-b-lg">$100.00</div>
        </div>
      </main>
    </div>
  )
}

export default Home
