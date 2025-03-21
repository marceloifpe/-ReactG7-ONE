import { styled } from "styled-components";
import TextInput from "../TextInput";
import { FaBars } from "react-icons/fa";

const HeaderStylized = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  img {
    max-width: 212px;
  }

  @media (max-width: 768px) {
    padding: 2.8rem 1.5rem;
  }

  @media (max-width: 430px) {
    max-width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 2rem 1.5rem;
    img {
      max-width: 120px;
    }
  }
`;

const MenuIcon = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`;

const Image = styled.img`
  @media (max-width: 430px) {
    margin-right: 0.5rem;
  }
`;

// const StyledTextInput = styled.input`
// @media (max-width: 430px) {
//   margin: 2rem;
// }

// eslint-disable-next-line react/prop-types
const Header = ({ setFilter, isMobile, toggleSidebar }) => {
  return (
    <HeaderStylized>
      {isMobile && (
        <MenuIcon onClick={toggleSidebar}>
          <FaBars size={27} />
        </MenuIcon>
      )}
      <Image src="/images/logo.png" alt="logo" />
      <TextInput setFilter={setFilter} />
    </HeaderStylized>
  );
};

export default Header;
