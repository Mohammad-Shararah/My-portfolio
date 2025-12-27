import projects from "./ProjectUnitData";
import ProjectUnit from "./ProjectUnit";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../CSS/projects.css";



export default function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const projectUnitElement = projects.map((entry) => {
    return (
      <ProjectUnit
        key={entry.id}
        title={entry.title}
        description={entry.description}
        img={entry.img}
        technologies={entry.technologies}
        githubLink={entry.github}
        date={entry.date}
      />
    );
  });

  return (
    <>
      <section id="projects" className="projects-section">
        <span className="projects-header">MY PROJECTS</span>
        <div className="projects-container">
          <Slider {...settings}> {projectUnitElement} </Slider>
        </div>
      </section>

      <section className="card-group"></section>
    </>
  );
}
