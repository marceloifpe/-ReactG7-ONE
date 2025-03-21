/* eslint-disable react/prop-types */
import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Popular from "./Popular";
import Images from "./Images";

const GalleryContainer = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    margin: 2.5rem 0 0 1.75rem;
  }

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Gallery = ({ photos = [], setTag, whenSelectPhoto, toggleFavorite }) => {
  return (
    <>
      <Tags setTag={setTag} />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ImageContainer>
            {photos.map((photo) => (
              <Images
                key={photo.id}
                photo={photo}
                requestToZoom={whenSelectPhoto}
                toggleFavorite={() => toggleFavorite(photo)}
              />
            ))}
          </ImageContainer>
        </FluidSection>
        <Popular />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
