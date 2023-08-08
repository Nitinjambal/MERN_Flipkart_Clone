import Navbar from "./Navbar";
import Banner from "./Banner";

import { styled, Box } from "@mui/material";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

function Home() {
  return (
    <>
      <Navbar />

      <Component>
        <Banner />
      </Component>
    </>
  );
}

export default Home;
