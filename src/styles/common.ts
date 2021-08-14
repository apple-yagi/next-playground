import styled from "@emotion/styled";
import { up } from "styled-breakpoints";

export const StyledContainer = styled.div`
  padding: 0 14px;

  ${up("md")} {
    padding: 0 25px;
  }

  ${up("lg")} {
    padding: 0 15px;
  }
`;

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;

  ${up("sm")} {
    grid-template-columns: 50% 50%;
  }

  ${up("lg")} {
    grid-template-columns: 33% 33% 33%;
  }
`;
