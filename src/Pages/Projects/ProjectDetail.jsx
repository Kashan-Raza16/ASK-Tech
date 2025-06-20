import Error from "../../UX/Error"; 
import { useEffect, useState } from "react";
import LoadingSpinner from "../../UX/LoadingSpinner";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProjectData } from "./ProjectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjectData().then((data) => {
      const found = data.find((p) => String(p.index) === String(id));
      setProject(found);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  if (!project) {
    // Show Error component with custom message
    return (
      <Error
        code={404}
        title="Project Not Found"
        message="Sorry, the project you are looking for does not exist."
      />
    );
  }

  // Example error condition (replace with your actual error handling logic)
  const errorCondition = false; // Set this to true to simulate an error

  if (errorCondition) {
    return (
      <Error
        code={500}
        title="Something went wrong"
        message="We couldn't load the data. Please try again later."
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F7FC] flex items-center justify-center py-20 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-80 object-cover rounded-xl mb-6 shadow"
        />
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{project.title}
        </h1>
        <div className="flex items-center gap-6 mb-4">
          <span className="flex items-center text-pink-600 font-semibold">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            {project.likes} Likes
          </span>
          <span className="flex items-center text-purple-600 font-semibold">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.746-1.378L2 17l1.339-3.14a7.989 7.989 0 01-2.678-5.872C1 6.134 4.582 3 9 3s8 3.134 8 7zM9 11a1 1 0 100-2 1 1 0 000 2zm3-1a1 1 0 11-2 0 1 1 0 012 0zm-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
            {project.comments} Comments
          </span>
        </div>
        <p className="text-gray-700 text-lg mb-4">
          {project.description || "No description available."}
        </p>
        <div className="mt-6 flex justify-between items-center">
          <button
            className="bg-pink-500 hover:bg-pink-600 cursor-pointer text-white font-bold py-2 px-6 rounded-full shadow transition-all duration-200"
            onClick={() => navigate(-1)}
          >
            Back to Projects
          </button>
          <button
            className="bg-pink-500 hover:bg-pink-600 cursor-pointer text-white font-bold py-2 px-6 rounded-full shadow transition-all duration-200"
            onClick={() => navigate(`/buy/${id}`)}
          >
            Buy Now
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-4 text-right">Project ID: {id}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;