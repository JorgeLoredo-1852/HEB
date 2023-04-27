import { Box } from "@mui/material";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import React from "react";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Stack from "@mui/joy/Stack";
import ListDivider from "@mui/joy/ListDivider";
import { useContext } from "react";
import ListContext from "@/hooks/ListContext";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./shoppingList.module.css";

function ShoppingList() {
  const { listInfo, setListInfo } = useContext(ListContext);
  const [precio, setPrecio] = useState(0);

  const [data, setData] = useState({});
  useEffect(() => {
    setData({ ...listInfo });
  }, []);

  useEffect(() => {
    let avg = 0;
    for (let i = 0; i < Object.values(listInfo).length; i++) {
      avg +=
        Object.values(listInfo)[i].precio * Object.values(listInfo)[i].quantity;
    }
    setPrecio(avg);
  }, [listInfo]);

  const descuento = precio * 0.15;
  const total = precio - descuento;

  return (
    <div>
      <List aria-labelledby="basic-list-demo">
        {Object.values(listInfo).map((itemData) => (
          ( itemData.quantity > 0 && (<Box key={itemData.nombre}>
            <ListItem
              endAction={
                <p style={{ fontSize: "20px", paddingRight: "20px" }}>
                  {" "}
                  {itemData.quantity}{" "}
                </p>
              }
            >
              <ListItemDecorator
                sx={{ alignSelf: "center", marginRight: "0.5rem" }}
              >
                <Box
                  component="img"
                  src={itemData.imagen}
                  sx={{ width: "90px", maxHeight: "100%" }}
                ></Box>
              </ListItemDecorator>
              <Stack spacing={0.6}>
                <Box style={{ fontWeight: "500" }}>{itemData.nombre}</Box>
                <Box style={{ fontSize: "13px" }}>{itemData.cantidad}</Box>
                <Box style={{ fontWeight: "700", fontSize: "15px" }}>
                  ${itemData.precio}
                </Box>
              </Stack>
            </ListItem>
            {itemData.nombre ==
            Object.values(listInfo)[Object.values(listInfo).length - 1]
              .nombre ? (
              <></>
            ) : (
              <ListDivider inset="gutter" />
            )}
          </Box>))
        ))}
      </List>

      <div className={styles.pricesDiv}>
        <div className={styles.subtotalDiv}>
          <p>Precio productos: </p>
          <p>+ ${precio.toFixed(2)}</p>
        </div>
        <div className={styles.subtotalDiv}>
          <p>Descuentos: </p>
          <p>- ${descuento.toFixed(2)}</p>
        </div>
      </div>
      <div className={styles.totalDiv}>
        <h1 className={styles.totalLetter}> Total: </h1>
        <h1 className={styles.totalLetter}> $ {total.toFixed(2)} </h1>
      </div>
    </div>
  );
}

export default ShoppingList;
