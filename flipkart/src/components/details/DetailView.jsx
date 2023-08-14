import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/productReducer/action";
import { Box, Typography, Grid, styled } from "@mui/material";
import Actionitem from "./Actionitem";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
  background: #fff2;
  margin-top: 55px;
`;



const Container = styled(Grid)(({theme})=>({
background: "#ffffff",
  display: "flex",
  [theme.breakpoints.down("md")]:{
    margin:0
  }
}))

const RightContainer = styled(Grid)`
  margin-top: 50px;
`;

function DetailView() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((store) => store.productReducer.singleProduct);


  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  console.log("state", state);

  return (
    <Component>
      {
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <Actionitem product={state} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
          
            <ProductDetail product={state} />
          </RightContainer>
        </Container>
      }
    </Component>
  );
}

export default DetailView;
