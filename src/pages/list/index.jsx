import ShoppingList from "@/components/shoppingList/shoppingList";
import EmptyList from "@/components/navbar/emptyList/emptyList";
import { useContext } from "react";
import ListContext from "@/hooks/ListContext";
import { useState } from "react";
import { useEffect } from "react";


const List = () => {
  const { listInfo, setListInfo } = useContext(ListContext);

  const [data, setData] = useState({});
  useEffect(() => {
    setData({ ...listInfo });
  }, []);
  
  
  if (Object.values(listInfo).length == 0){
    return <div style ={{ marginTop: "5rem", marginBottom :"5rem"}}>
      {console.log(Object.values(listInfo)[i].quantity)}
        <EmptyList />
        </div>
  }
  for (let i = 0; i < Object.values(listInfo).length; i++){
    if (Object.values(listInfo)[i].quantity > 0){
      return <div style ={{ marginTop: "5rem", marginBottom :"5rem"}}>
          {console.log(Object.values(listInfo)[i].quantity)}
          <ShoppingList />
        </div>
    }
  }
  for (let i = 0; i < Object.values(listInfo).length; i++){
    console.log(Object.values(listInfo)[i].quantity)
    if (Object.values(listInfo)[i].quantity == 0){
      return <div style ={{ marginTop: "5rem", marginBottom :"5rem"}}>
          <EmptyList />
        </div>
    }
  }
};

export default List;

//
