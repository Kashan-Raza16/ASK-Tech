import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Layout.jsx";
import Login from "../Auth/Login.jsx";
import Home from "../Pages/Home/Home.jsx";
import About from "../Pages/About/About.jsx";
import Service from "../Pages/Service/index.jsx";
import StudentSection from "../Pages/Student/index.jsx";
import ProjectCard from "../Pages/Student/ProjectCard";
import ProjectDetail from "../Pages/Projects/ProjectDetail.jsx";
import Dashboard from "../Pages/Dashbord/Dashboard.jsx";
// import Dashboards from "../Pages/Dashbord/Dashboards.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Service" element={<Service />} />
      <Route path="student-section" element={<StudentSection />} />
      <Route path="/projects" element={<ProjectCard />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/dashboard" element={<Dashboards />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
);

export default router;
