import { Route, Routes } from "react-router-dom";
import { Disco, Info, Inicio, Pelicula, Radio, Records } from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/info" element={<Info />} />
        <Route path="/pelicula" element={<Pelicula />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/records" element={<Records />} />
        <Route path="/records/disco" element={<Disco />} />
      </Routes>
    </>
  );
};
