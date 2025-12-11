import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "../pages/Homepage";
import Aboutpage from "../pages/Aboutpage";
import Characterspage from "../pages/Characterspage";
import NotFoundpage from "../pages/Notfoundpage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/a-propos" element={<Aboutpage />} />
        <Route path="/personnages" element={<Characterspage />} />
        <Route path="*" element={<NotFoundpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
