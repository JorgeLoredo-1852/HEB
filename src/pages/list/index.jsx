import { useContext } from "react";
import ListContext from "@/hooks/ListContext";
import ShoppingList from "@/components/shoppingList/shoppingList";
import { GetCollection, GetItem } from "../../api/firebase";
import BigButton from "@/atoms/buttonBig/buttonBig";
import { useRouter } from "next/router";

const List = () => {
  const foodList = GetCollection("Ingredientes");
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };

  return (
    <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
      <ShoppingList />
      <BigButton
        color="main"
        callback={onClick}
        text="Desbloquear descuentos"
        sx={{ marginBottom: "10px" }}
      />
    </div>
  );
};

export default List;

//
