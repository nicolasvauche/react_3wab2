import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "../pages/Homepage";
import Aboutpage from "../pages/Aboutpage";
import Characterspage from "../pages/Characterspage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/a-propos" element={<Aboutpage />} />
        <Route path="/personnages" element={<Characterspage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
