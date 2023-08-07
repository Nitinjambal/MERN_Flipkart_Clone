import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import React from "react";
import Search from "./Search";
import CustomButton from "./CustomButton";

const StyledHeader = styled(AppBar)`
  background-color: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PluseImge = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});


const CustomBtnWrapper=styled(Box)`
  margin:0 5% 0 auto ;
`

function Navbar() {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight:55}}>
        <Component>
          <img src={logoURL} alt="logo" style={{ height: "20px",marginRight:30 }} />
          <Box style={{ display: "flex" }}>
            <Subheading>
              Explore{" "}
              <Box component={"span"} style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </Subheading>
            <PluseImge src={subURL} alt="sub_logo" />
          </Box>
        </Component>
        <Search />
        <CustomBtnWrapper>
          <CustomButton />
        </CustomBtnWrapper>
      </Toolbar>
    </StyledHeader>
  );
}

export default Navbar;
