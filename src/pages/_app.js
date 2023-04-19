import Navbar from '@/components/navbar/navbar'
import UserContext from '@/hooks/UserContext'
import HeaderImg from '@/molecules/header/HeaderImg'
import '@/styles/globals.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <UserContext.Provider>
      <main className={poppins.className}>
        <Component {...pageProps} />
        <Navbar/>
      </main>
    </UserContext.Provider>
  )
}
