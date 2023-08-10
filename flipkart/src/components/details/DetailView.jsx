import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/productReducer/action";
import { Box, Typography, Grid, styled } from "@mui/material";
import Actionitem from "./Actionitem";

const Component = styled(Box)`
  background: #fff2;
  margin-top: 55px;
`;

const Container = styled(Grid)`
  background-color: #ffffff;
  display: flex;
`;

const RightContainer = styled(Grid)`
  margin-top: 50px;
`;

function DetailView() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((store) => store.productReducer.singleProduct);

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

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
            <Typography>{state?.title?.longTitle}</Typography>
            <Typography
              style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
            >
              8 Ratings & 1 Reviews
              <Box component="span">
                <img
                  src={fassured}
                  alt="assured"
                  style={{ width: 77, marginLeft: 20 }}
                />
              </Box>
            </Typography>


            <Typography>
              <Box component="span" style={{fontSize:28}}>₹{state?.price?.cost}</Box>{" "}{" "}{" "}
              <Box component="span" style={{color:"#878787"}}><strike>₹{state?.price?.mrp}</strike></Box>{" "}{" "}{" "}
              <Box component="span" style={{color:"#388E3C"}}>{state?.price?.discount}</Box>

            </Typography>
          </RightContainer>
        </Container>
      }
    </Component>
  );
}

export default DetailView;
