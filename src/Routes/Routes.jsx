import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import Layout from "../Layout.jsx";
import About from "../Pages/About/About.jsx";
import Service from "../Pages/Service/index.jsx";
// import Product from "../Pages/Products/Products.jsx";
// import Projects from "../Pages/Projects/Projects.jsx";
import StudentSection from "../Pages/Student/index.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Service" element={<Service />} />
      {/* <Route path="Product" element={<Product />} /> */}
      <Route path="student-section" element={<StudentSection />} />
      {/* <Route 
      loader={() => {
        // Simulating a data fetch for the student section
        return { projectID: "12345" }; // Example project ID
      }
      }
      path="project/:projectID" 
      element={<Projects />} /> */}
    </Route>
  )
);

export default router;
