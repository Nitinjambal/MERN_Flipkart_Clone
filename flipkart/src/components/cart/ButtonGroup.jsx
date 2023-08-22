import { Button, ButtonGroup, styled } from "@mui/material";
import React from "react";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledBtn = styled(Button)`
  border-radius: 50%;
`;

function BtnGroup() {
  const [value, setValue] = useState(1);
  return (
    <Component>
      <StyledBtn onClick={() => setValue((prev) => prev - 1)}>-</StyledBtn>
      <StyledBtn disabled>{value}</StyledBtn>
      <StyledBtn onClick={() => setValue((prev) => prev + 1)}>+</StyledBtn>
    </Component>
  );
}

export default BtnGroup;
