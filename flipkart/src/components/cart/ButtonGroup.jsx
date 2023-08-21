import { Button, ButtonGroup, styled } from "@mui/material";
import React from "react";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledBtn = styled(Button)`
  border-radius: 50%;
`;

function BtnGroup() {
  return (
    <Component>
      <StyledBtn>-</StyledBtn>
      <StyledBtn disabled>1</StyledBtn>
      <StyledBtn>+</StyledBtn>
    </Component>
  );
}

export default BtnGroup;
