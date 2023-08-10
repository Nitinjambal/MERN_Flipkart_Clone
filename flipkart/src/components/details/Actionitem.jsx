import React from "react";
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
`;

const Image = styled("img")({
  padding: "15px",
});

const StyledBtn = styled(Button)`
  width: 48%;
  height: 50px;
  border-radius: 2px;
`;


function Actionitem({ product }) {
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <Button
        variant="contained"
        style={{ marginLeft: "10px", background: "#ff9f00" }}
      >
        <ShoppingCartIcon />
        Add to Cart
      </Button>
      <Button variant="contained" style={{ background: "#FB541B" }}>
        <FlashOnIcon />
        Buy Now
      </Button>
    </LeftContainer>
  );
}

export default Actionitem;
