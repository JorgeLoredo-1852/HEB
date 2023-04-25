
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import PopularRecipes from "@/components/popularRecipes/popularRecipes";
import SearchBox from "@/molecules/searchBox/searchBox";
import Categories from "@/components/categories/categories";
import MyRecipes from "@/components/myRecipes/myRecipes";

export default function Home() {
  return (
    <>
      <Head>
        <title>HEB Go</title>
        <meta name="description" content="HEB Go" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SearchBox />
        <PopularRecipes />
        <MyRecipes/>
        <Categories />
        
      </main>
    </>
  );
}
