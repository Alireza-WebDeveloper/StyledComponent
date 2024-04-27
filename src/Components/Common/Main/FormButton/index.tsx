import styled from "styled-components";
import { font } from "../../../../Utils/font";

export const ButtonForm = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.slate};
  font-size: ${font.p4};
  background-color: ${({ theme }) => theme.purple};
  &:hover {
    background-color: ${({ theme }) => theme.purpleHover};
  }
`;
