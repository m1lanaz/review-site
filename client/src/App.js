import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./routes/Home";
import ResturantDetailsPage from "./routes/ResturantDetailPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
return (
    <BrowserRouter>
      <Routes>
        <Route path="/resturant/:id/update" element={<UpdatePage />}/>
        <Route index element={<Home />} />
        <Route path="/resturant/:id" element={<ResturantDetailsPage />} />
      </Routes>
    </BrowserRouter>
)
}

export default App;