import Navbar from '@/components/navbar/navbar'
import ListContext from '@/hooks/ListContext'
import AppBarHeader from '@/components/navbar/appBarHeader/appBarHeader'
import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import { useDebugValue, useEffect, useState } from 'react'
import SearchContext from '@/hooks/SearchContext'
import DiscountContext from '@/hooks/DiscountContext'


const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const [lInfo, setLInfo] = useState({})
  const [sInfo, setSInfo] = useState("")
  const [dInfo, setDInfo] = useState([{
      discount: "15%",
      expires: "27/06/2023"
  },
  {
      discount: "25%",
      expires: "27/06/2023"
  },
  {
      discount: "10%",
      expires: "27/06/2023"
  }])

  useEffect(() => {
    localStorage.setItem('discount', 0)
    localStorage.setItem('expires', 0)
  }, [])

  return (
    <DiscountContext.Provider value={{discountInfo: dInfo, setDiscountInfo: setDInfo}}>
      <ListContext.Provider value={{listInfo: lInfo, setListInfo: setLInfo}}>
        <SearchContext.Provider value={{searchInfo: sInfo, setSearchInfo: setSInfo}}>
          <main className={poppins.className}>
            <AppBarHeader/>
            <Component {...pageProps} />
            <Navbar/>
          </main>
        </SearchContext.Provider>
      </ListContext.Provider>
    </DiscountContext.Provider>
  )
}
