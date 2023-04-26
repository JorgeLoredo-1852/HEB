import { useContext } from "react";
import ListContext from "@/hooks/ListContext";
import ShoppingList from "@/components/shoppingList/shoppingList";
import { GetCollection, GetItem } from "../../api/firebase";
import BigButton from "@/atoms/buttonBig/buttonBig";

const List = () => {
  const { listInfo, setListInfo } = useContext(ListContext);
  const foodList = GetCollection("Ingredientes");

  const onClick = () => {
    //Pending to add route
  };

  return (
    /*
    <div style={{ marginTop: "6rem" }}>
      {Object.keys(listInfo).map((key) => {
        return (
          <div>
            {key} // {listInfo[key]}
          </div>
        );
      })}
    </div>*/

    <div style={{ marginTop: "6rem" }}>
      <ShoppingList foodLists={foodList} />
      <BigButton
        color="main"
        callback={onClick}
        position="fixed"
        text="Desbloquear descuentos"
      />
    </div>
  );
};

export default List;

//
