import Navbar from '@/components/navbar/navbar'
import UserContext from '@/hooks/UserContext'
import AppBarHeader from '@/components/navbar/appBarHeader/appBarHeader'
import '@/styles/globals.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <UserContext.Provider>
      <main className={poppins.className}>
        <AppBarHeader/>
        <Component {...pageProps} />
        <Navbar/>
      </main>
    </UserContext.Provider>
  )
}
