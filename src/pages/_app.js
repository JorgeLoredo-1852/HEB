import Navbar from '@/components/navbar/navbar'
import UserContext from '@/hooks/UserContext'
import AppBarHeader from '@/components/navbar/appBarHeader/appBarHeader'
import HeaderImg from '@/molecules/header/HeaderImg'
import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyCWT4mLjto-JRexnFS99V5BZNGPE0YBOzs",
  authDomain: "heb-go.firebaseapp.com",
  databaseURL: "https://heb-go-default-rtdb.firebaseio.com",
  projectId: "heb-go",
  storageBucket: "heb-go.appspot.com",
  messagingSenderId: "855494035420",
  appId: "1:855494035420:web:83d130a72d5b73f01db119",
  measurementId: "G-TYR8D6KKNZ"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
/*
async function getCities(db) {
  const citiesCol = collection(db, 'Ingredientes');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

console.log(getCities(db))*/

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <UserContext.Provider>
      <main className={poppins.className}>
        <AppBarHeader showBackButton='true' showListButton='true' listLink='/search' backLink='/search'/>
        <Component {...pageProps} />
        <Navbar/>
      </main>
    </UserContext.Provider>
  )
}
