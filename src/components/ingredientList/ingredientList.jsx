import { Box } from "@mui/material";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import React from "react";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Stack from "@mui/joy/Stack";
import ListDivider from "@mui/joy/ListDivider";
import IconButton from "@mui/joy/IconButton";
import { Add } from "@mui/icons-material";
import BigButton from "@/atoms/buttonBig/buttonBig";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useContext } from "react";
import ListContext from "@/hooks/ListContext";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Remove } from "@mui/icons-material";

function IngredientList(props) {
  const foodLists = props.foodLists;
  const pasoList = props.pasos;

  const { listInfo, setListInfo } = useContext(ListContext);
  const [data, setData] = useState({});
  const [cantidad, setCantidad] = useState(0);
  let n = 0;

  useEffect(() => {
    setData({ ...listInfo });
  }, []);

  const router = useRouter();

  //console.log(listInfo)

  const onClickUnit = (itemData) => {
    if (data.hasOwnProperty(`${itemData.nombre}`)) {
      data[`${itemData.nombre}`] = {
        ...data[`${itemData.nombre}`],
        quantity: data[`${itemData.nombre}`]["quantity"] + 1,
      };
    } else {
      data[`${itemData.nombre}`] = { ...itemData, quantity: 1 };
    }
    setListInfo({ ...listInfo, ...data });
  };

  const onClickUnitMinus = (itemData) => {
    if (data.hasOwnProperty(`${itemData.nombre}`)) {
      data[`${itemData.nombre}`] = {
        ...data[`${itemData.nombre}`],
        quantity: data[`${itemData.nombre}`]["quantity"] - 1,
      };
    } else {
      data[`${itemData.nombre}`] = { ...itemData, quantity: 0 };
    }
    if (data[`${itemData.nombre}`].quantity < 0) {
      data[`${itemData.nombre}`].quantity = 0;
    }
    setListInfo({ ...listInfo, ...data });
  };

  return (
    <div>
      <List aria-labelledby="basic-list-demo" sx={{ marginBottom: "7.5rem" }}>
        {foodLists.map((itemData) => (
          <Box sx={{ paddingRight: "15px" }} key={itemData.nombre}>
            <ListItem
              endAction={
                <Box
                  style={{ columns: "3", display: "flex" }}
                  sx={{ borderRadius: "9px", border: "1px solid #88888863" }}
                >
                  <IconButton
                    onClick={() => onClickUnitMinus(itemData)}
                    aria-label="Remove"
                    color="danger"
                    size="sm"
                    variant="plain"
                  >
                    <Remove sx={{ paddingLeft: "2px", fontSize: "20px" }} />
                  </IconButton>
                  <div
                    style={{
                      paddingTop: "5px",
                      paddingLeft: "7px",
                      paddingRight: "7px",
                      fontWeight: "700",
                    }}
                  >
                    {listInfo[`${itemData.nombre}`]
                      ? listInfo[`${itemData.nombre}`].quantity
                      : 0}
                  </div>
                  {console.log()}
                  <IconButton
                    onClick={() => onClickUnit(itemData)}
                    sx={{ color: "#DD2B22" }}
                    aria-label="Add"
                    variant="plain"
                    size="sm"
                    color="danger"
                  >
                    <Add sx={{ fontSize: "20px" }} />
                  </IconButton>
                </Box>
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
            {itemData == foodLists[foodLists.length - 1] ? (
              <></>
            ) : (
              <ListDivider inset="gutter" />
            )}
          </Box>
        ))}
      </List>
    </div>
  );
}

export default IngredientList;
