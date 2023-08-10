import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/productReducer/action";
import { Box, Typography, Grid, styled } from "@mui/material";
import Actionitem from "./Actionitem";

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;

function DetailView() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((store) => store.productReducer.singleProduct);
  //   console.log("state", state)

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  console.log("state", state);

  return (
    <Component>
      {
        <Grid container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <Actionitem product={state} />
          </Grid>
          <Grid item lg={8} md={8} sm={8} xs={12}>
            <Typography>{state?.title?.longTitle}</Typography>
          </Grid>
        </Grid>
      }
    </Component>
  );
}

export default DetailView;
