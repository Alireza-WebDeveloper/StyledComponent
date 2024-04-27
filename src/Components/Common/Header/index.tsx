import React from "react";
import styled from "styled-components";
// !! Type
interface HeaderProps {
  children: React.ReactNode;
}

// !! Styled Component

const StyledHeader = styled.div`
  display: flex;
  font-size: var(--font-400);
  padding: 1rem 0.5rem;
  background-color: var(--primary-200);
  font-weight: normal;
  gap: 20px;
`;

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
