import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";

const Project = () => {
  const { project } = config;
  const projects = project.items;

  function ProjectStatus(props: { project: any }) {
    const project = props.project;
    if (project.available) {
      return (
        <a href={"https://" + project.title} className="text-primary font-bold">
          See more at {project.title}
        </a>
      );
    }
    return (
      <span className="text-gray-500">
        Available from {project.available_date}
      </span>
    );
  }

  return (
    <section className={`bg-background py-8`} id="projects">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {project.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <div>
              <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
                <div className="grid grid-cols-1 gap-1">
                <div>
                    <img src={project.logo} alt="" />
                  </div>
                  <div>
                    <div>
                      <h2 className="text-gray-800 text-3xl font-semibold">
                        <span className="text-primary">{project.title}</span>
                      </h2>
                      <p className="mt-2 text-gray-600">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex justify-end mt-4">
                      <ProjectStatus project={project} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
