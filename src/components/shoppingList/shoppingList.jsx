import { Box } from "@mui/material";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import React from "react";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Stack from "@mui/joy/Stack";
import ListDivider from "@mui/joy/ListDivider";
import IconButton from "@mui/joy/IconButton";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import BigButton from "@/atoms/buttonBig/buttonBig";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useContext } from "react";
import ListContext from "@/hooks/ListContext";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./shoppingList.module.css";

function ShoppingList() {
  const { listInfo, setListInfo } = useContext(ListContext);

  const [data, setData] = useState({});
  useEffect(() => {
    setData({ ...listInfo });
  }, []);

  console.log(Object.values(listInfo)[0])


  return (
    <div>
      <List aria-labelledby="basic-list-demo">
        { Object.values(listInfo).map((itemData) => (
          <Box key={itemData.nombre}>
            <ListItem
              endAction={
                <p style={{ fontSize: "20px", paddingRight: "20px" }}> {itemData.quantity} </p>
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
            {itemData.nombre == Object.values(listInfo)[Object.values(listInfo).length - 1].nombre ? (
              <></>
            ) : (
              <ListDivider inset="gutter" />
            )}
          </Box>
        ))}
      </List>

      <div className={styles.pricesDiv}>
        <div className={styles.subtotalDiv}>
          <p>IVA: </p>
          <p>+ $160.00</p>
        </div>
        <div className={styles.subtotalDiv}>
          <p>Descuentos: </p>
          <p>- $323.00</p>
        </div>
      </div>
      <div className={styles.totalDiv}>
        <h1 className={styles.totalLetter}> Total: </h1>
        <h1 className={styles.totalLetter}> $1,700.00 </h1>
      </div>
    </div>
  );
}

export default ShoppingList;
