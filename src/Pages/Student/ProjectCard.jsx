import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { fetchProjectData } from "../Projects/ProjectData"; // <-- Import from ProjectData.jsx
import FilterHeader from "./FilterHeader";



// ShotCard Component
const ShotCard = React.memo(({ title, imageUrl, likes, comments }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
    <div className="overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full object-cover h-52 rounded-t-lg transition-transform duration-500 hover:scale-110"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/400x300/000/FFF?text=${title.replace(/ /g, "+")}`;
        }}
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-base text-gray-800 mb-2">{title}</h3>
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <span className="flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          {likes}
          {/* Save button  SAVE SVG*/}
          <button
            className="ml-2 p-1 cursor-pointer hover:bg-gray-200 transition"
            aria-label="Save project"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-5-7 5V5z"
              />
            </svg>
          </button>
        </span>
        <span className="flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.746-1.378L2 17l1.339-3.14a7.989 7.989 0 01-2.678-5.872C1 6.134 4.582 3 9 3s8 3.134 8 7zM9 11a1 1 0 100-2 1 1 0 000 2zm3-1a1 1 0 11-2 0 1 1 0 012 0zm-6 0a1 1 0 11-2 0 1 1 0 012 0z"
              clipRule="evenodd"
            />
          </svg>
          {comments}
        </span>
      </div>
    </div>
  </div>
));
ShotCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number,
  comments: PropTypes.number,
};

// Async data loader function


const ProjectCard = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Initial number of projects to show

  useEffect(() => {
    fetchProjectData().then((data) => setAllProjects(data));
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(allProjects.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
      <FilterHeader />
      <main className="container mx-auto p-8 flex-grow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Most Popular Projects</h2>
        <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.slice(0, visibleCount).map((project) => (
            <Link
              key={project.key}
              to={`/projects/${project.index}`}
              className="block"
              style={{ textDecoration: "none" }}
            >
              <ShotCard {...project} />
            </Link>
          ))}
        </div>
        {visibleCount < allProjects.length && (
          <div className="flex justify-center mt-10">
            <button
              className="px-8 py-3 bg-blue-600 cursor-pointer text-white font-bold rounded-lg shadow hover:bg-blue-800 transition-all duration-200 flex items-center gap-2"
              style={{ minWidth: 160 }}
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectCard;
