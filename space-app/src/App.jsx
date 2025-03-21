import { useEffect, useState } from "react";
import { styled } from "styled-components";
import StylesGlobals from "./components/StylesGlobals";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import DialogZoom from "./components/DialogZoom";
import Footer from "./components/Footer";
import debounce from "lodash.debounce";

import bannerImage from "./assets/banner.png";
import photos from "./photos.json";

const MainContainer = styled.main.withConfig({
  shouldForwardProp: (prop) => !["isMobile", "isTablet"].includes(prop),
})`
  display: flex;
  gap: 24px;
  flex-direction: ${(props) =>
    props.isMobile || props.isTablet ? "column" : "row"};
`;

const FundoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const GalleryContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setGalleryPhotos] = useState(photos);
  const [filter, setFilter] = useState("");
  const [tag, setTag] = useState(0);
  const [photoWithZoom, setPhotoWithZoom] = useState(null);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsTablet(window.innerWidth <= 768);
      setIsMobile(window.innerWidth <= 430);
    }, 100);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const filteredPhotos = photos.filter((photo) => {
      const filterByTag = !tag || photo.tagId === tag;
      const filterByTitle =
        !filter || photo.titulo.toLowerCase().includes(filter.toLowerCase());
      return filterByTag && filterByTitle;
    });
    setGalleryPhotos(filteredPhotos);
  }, [filter, tag]);

  const toToggleFavorite = (photo) => {
    if (photo.id === photoWithZoom?.id) {
      setPhotoWithZoom({
        ...photoWithZoom,
        favorite: !photoWithZoom.favorite,
      });
    }
    setGalleryPhotos(
      fotosDaGaleria.map((photoGallery) =>
        photoGallery.id === photo.id
          ? { ...photoGallery, favorite: !photo.favorite }
          : photoGallery
      )
    );
  };

  return (
    <FundoGradiente>
      <StylesGlobals />
      <AppContainer>
        <Header
          filter={filter}
          setFilter={setFilter}
          isMobile={isMobile}
          toggleSidebar={toggleSidebar}
        />
        <MainContainer isMobile={isMobile} isTablet={isTablet}>
          <Sidebar isMobile={isMobile} isOpen={isOpen} />
          <GalleryContent>
            <Banner
              backgroundImage={bannerImage || "/assets/default-banner.png"}
              title="A galeria mais completa de fotos do espaço!"
            />
            <Gallery
              photos={fotosDaGaleria}
              setTag={setTag}
              whenSelectPhoto={(photo) => setPhotoWithZoom(photo)}
              toggleFavorite={toToggleFavorite}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <DialogZoom
        photo={photoWithZoom}
        whenClosing={() => setPhotoWithZoom(null)}
        toggleFavorite={toToggleFavorite}
      />
      <Footer />
    </FundoGradiente>
  );
};

export default App;
