import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Layout from "./Layout.jsx";
import About from "./Pages/About/About.jsx";
import Service from "./Pages/Service/Service.jsx";
import Product from "./Pages/Products/Products.jsx";
import StudentSection from "./Pages/StudentSection/StudentHero.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/About" element={<About />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/student-section" element={<StudentSection />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
