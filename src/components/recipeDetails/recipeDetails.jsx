import BigButton from "@/atoms/buttonBig/buttonBig";
import ListContext from "@/hooks/ListContext";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { Grid } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const RecipeDetails = ({ foodLists, dif, tiempo }) => {
  const { listInfo, setListInfo } = useContext(ListContext);
  const [data, setData] = useState({});

  console.log(dif);
  console.log(tiempo);

  useEffect(() => {
    setData({ ...listInfo });
  }, [listInfo]);

  const onClick = () => {
    foodLists.map((ingredient) => {
      if (data.hasOwnProperty(`${ingredient.nombre}`)) {
        data[`${ingredient.nombre}`] = {
          ...data[`${ingredient.nombre}`],
          quantity: data[`${ingredient.nombre}`]["quantity"] + 1,
        };
      } else {
        data[`${ingredient.nombre}`] = { ...ingredient, quantity: 1 };
      }
    });
    setListInfo({ ...listInfo, ...data });
  };

  console.log(data);
  return (
    <div style={{ margin: "0.8rem 1rem" }}>
      <Grid
        container
        columnSpacing={1}
        sx={{ display: "flex", alignItems: "stretch" }}
      >
        <Grid
          item
          xs={7}
          sx={{
            padding: "0.6rem 0 !important",
            boxShadow: "0px 2px 3px inset rgba(0,0,0,0.25)",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "1.6rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginRight: "1rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "800",
                fontSize: "0.9rem",
                marginBottom: "0.4rem",
              }}
            >
              <SignalCellularAltIcon
                sx={{ fontSize: "1rem", color: "red", marginRight: "0.2rem" }}
              />
              <div>Dificultad</div>
            </div>
            <div
              style={{
                padding: "0.2rem 0.8rem",
                backgroundColor:
                  dif === "Fácil"
                    ? "#C7EFC1"
                    : dif === "Media"
                    ? "#F8D5AC"
                    : dif === "Difícil"
                    ? "#F1B2B2"
                    : "#C7EFC1",
                fontSize: "0.8rem",
                borderRadius: "100px",
              }}
            >
              {dif}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginRight: "0.4rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "800",
                fontSize: "0.9rem",
                marginBottom: "0.4rem",
              }}
            >
              <AccessTimeIcon
                sx={{ fontSize: "1rem", color: "red", marginRight: "0.2rem" }}
              />
              <div>Tiempo</div>
            </div>
            <div
              style={{
                padding: "0.2rem 0.8rem",
                fontSize: "0.8rem",
                fontWeight: "700",
                borderRadius: "100px",
              }}
            >
              {tiempo} Min
            </div>
          </div>
        </Grid>
        <Grid item xs={5}>
          <BigButton
            color="secondary"
            callback={onClick}
            position="relative"
            text="Agregar Todo"
            icon={<PlaylistAddIcon sx={{ fontSize: "1.6rem" }} />}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default RecipeDetails;
