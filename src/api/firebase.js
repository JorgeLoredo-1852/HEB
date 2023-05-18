import { useState } from 'react';
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, orderBy} from 'firebase/firestore/lite';

export const firebaseConfig = {
  apiKey: "AIzaSyCWT4mLjto-JRexnFS99V5BZNGPE0YBOzs",
  authDomain: "heb-go.firebaseapp.com",
  databaseURL: "https://heb-go-default-rtdb.firebaseio.com",
  projectId: "heb-go",
  storageBucket: "heb-go.appspot.com",
  messagingSenderId: "855494035420",
  appId: "1:855494035420:web:83d130a72d5b73f01db119",
  measurementId: "G-TYR8D6KKNZ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export function GetCollection(col){
    const [docs, setDocs] = useState([]);
    const collectionReference = collection(db, col); // Referencia para la coleccion que quieres

    const getCollection = async() => {
        
        
        const data = await(getDocs(collectionReference)); // Esta funcion hace la call
        setDocs(data.docs.map((doc) => ({...doc.data()}))) // mapea la informacion de los documentos a variable docs
    }

    useEffect(() => {
        getCollection(); 
    }, []);

    return docs.length == 0?[]:docs; // Regresa el arreglo con informacion de docs
}

export function GetItem(col, id){
    const [docs, setDocs] = useState([]);
    const collectionReference = collection(db, col);

    const q = query(collectionReference, where("id", "==", parseInt(id)));

    const getItem = async() => {
        const data = await(getDocs (q))
        setDocs(data.docs.map((doc) => ({...doc.data()})))
    } 

    useEffect(() => {
        getItem(); 
    }, []);
    return docs;
}

export function GetItemArray(col, ids){
    const [docs, setDocs] = useState([]);
    const collectionReference = collection(db, col);

    const q = query(collectionReference, where("id", "in", ids)); 

    const getItemArray = async() =>  {
        const data = await(getDocs(q))
        setDocs(data.docs.map((doc) => ({...doc.data()})))
    }

    useEffect(() => {
        getItemArray();
    }, []);

    return docs;
}
// Col, es colección, recetas/ingredientes, tag el query
//regresa arreglo con documentos
export function GetFilter(col, tag){
    const [docs, setDocs] = useState([]);
    const collectionReference = collection(db, col);

    const q = query(collectionReference, where("tags", "array-contains", tag));

    const getItemArray = async() => {
        const data = await(getDocs(q))
        setDocs(data.docs.map((doc) => ({...doc.data()})))
    }

    useEffect(()=> {
        getItemArray();
    }, []);

    return docs;
}
//tag es un arreglo, para buscar con varios tags
export function GetFilterAny(col, tag){
    const [docs, setDocs] = useState([]);
    const collectionReference = collection(db, col);

    const q = query(collectionReference, where("tags", "array-contains-any", tag));

    const getItemArray = async() => {
        const data = await(getDocs(q))
        setDocs(data.docs.map((doc) => ({...doc.data()})))
    }

    useEffect(()=> {
        getItemArray();
    }, []);
    
    return docs;
}