import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";
import LinkContainer from "../../Components/Common/Main/LinkContainer";
import { GlobalStyled } from "../../Utils/global";
import StyledComponentThemeProvider from "../../Components/Context/StyledComponentThemeProvider";

const Layout = () => {
  return (
    <StyledComponentThemeProvider>
      <Header>
        <LinkContainer href="/" title="home" />
        <LinkContainer href="/about" title="about" />
      </Header>
      <main className="mt-3 mx-auto container p-2">{<Outlet />}</main>
      <GlobalStyled />
    </StyledComponentThemeProvider>
  );
};

export default Layout;
