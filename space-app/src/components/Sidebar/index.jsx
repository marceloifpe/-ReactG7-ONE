import { styled } from "styled-components";
import ItemNavigation from "./ItemNavigation";

const StyledSidebar = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;

  @media (max-width: 430px) {
    display: ${(props) => (props.open ? "block" : "none")};
  }
`;

const StyledAside = styled.aside`
  @media (max-width: 768px) {
    display: flex;
    height: 100%;
    padding: 0 1.5rem;

    @media (max-width: 425px) {
      display: ${(props) => (props.open ? "block" : "none")};
    }
  }
`;

const Sidebar = ({ isMobile, isOpen }) => {
  return (
    <StyledAside open={isOpen}>
      <nav>
        <StyledSidebar open={isOpen}>
          <ItemNavigation
            activeIcon="/icons/home-ativo.png"
            inactiveIcon="/icons/home-inativo.png"
            active={true}
          >
            Início
          </ItemNavigation>
          <ItemNavigation
            activeIcon="/icons/mais-vistas-ativo.png"
            inactiveIcon="/icons/mais-vistas-inativo.png"
          >
            Mais Vistas
          </ItemNavigation>
          <ItemNavigation
            activeIcon="/icons/mais-curtidas-ativo.png"
            inactiveIcon="/icons/mais-curtidas-inativo.png"
          >
            Mais curtidas
          </ItemNavigation>
          <ItemNavigation
            activeIcon="/icons/novas-ativo.png"
            inactiveIcon="/icons/novas-inativo.png"
          >
            Novas
          </ItemNavigation>
          <ItemNavigation
            activeIcon="/icons/surpreenda-me-ativo.png"
            inactiveIcon="/icons/surpreenda-me-inativo.png"
          >
            Surpreenda-me
          </ItemNavigation>
        </StyledSidebar>
      </nav>
    </StyledAside>
  );
};

export default Sidebar;
