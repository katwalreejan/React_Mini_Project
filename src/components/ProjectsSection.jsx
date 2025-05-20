import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="projects section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12 ms-auto">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
              <img
                src="images/white-desk-work-study-aesthetics.jpg"
                className="avatar-image img-fluid"
                alt=""
              />

              <h2 className="text-white ms-4 mb-0">Projects</h2>
            </div>
          </div>

          <div className="clearfix"></div>

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              tag={project.tag}
              title={project.title}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
