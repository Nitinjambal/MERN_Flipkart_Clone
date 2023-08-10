import { Box } from "@mui/material";
import Header from "./components/header/Header";
import Home from "../src/components/home/Home";
import DataProvider from "./context/DataProvider";
import { Routes, Route } from "react-router-dom";
import DetailView from "./components/details/DetailView";

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailView />} />
        </Routes>
      </Box>
    </DataProvider>
  );
}

export default App;
