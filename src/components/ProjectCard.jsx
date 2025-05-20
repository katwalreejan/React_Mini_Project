const ProjectCard = ({ tag, title, imageSrc, imageAlt }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="projects-thumb">
        <div className="projects-info">
          <small className="projects-tag">{tag}</small>

          <h3 className="projects-title">{title}</h3>
        </div>

        <a
          href="images/projects/the-5th-IQYR7N67dhM-unsplash.jpg"
          className="popup-image"
        >
          <img
            src={imageSrc}
            className="projects-image img-fluid"
            alt={imageAlt}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
