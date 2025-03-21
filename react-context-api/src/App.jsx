import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PaginaErro from "./pages/PaginaErro";

import "./App.css";

function App() {
  return (
    <BrowserRouter
      // // v7_startTransition and v7_relativeSplatPath são opções de configuração do React Router.
      // future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <CarrinhoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </CarrinhoProvider>
    </BrowserRouter>
  );
}

export default App;
