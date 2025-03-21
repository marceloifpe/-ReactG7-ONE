import { styled } from "styled-components";
import Title from "../../Title";

import photos from "./photos-popular.json";

const ColumnPhotos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Imagem = styled.img`
  max-width: 212px;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 156px;
    height: 118px;
  }

  @media (max-width: 430px) {
    max-width: 100%;
    width: 380px;
    height: 158px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #c98cf1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

const SectionTablet = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 430px) {
    margin-right: 1rem;
  }
`;

const PopularGallery = () => (
  <SectionTablet>
    <Title>Popular Photos</Title>
    <ColumnPhotos>
      {photos.map((photo, index) => (
        <Imagem key={index} src={photo.path} alt={photo.alt} />
      ))}
    </ColumnPhotos>
    <Button>Ver Mais</Button>
  </SectionTablet>
);

export default PopularGallery;
