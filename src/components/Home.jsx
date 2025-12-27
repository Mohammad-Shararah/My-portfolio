import ProfileImage from "../images/profile-image.webp";
import CodeIcon from "../images/code-icon.png";
import "../CSS/home.css"


export default function Home() {
  return (
    <>
      <section id="home" className="home-section">
        <div className="intro-section">
          <p className="intro">
            Hello, I'm <span className="intro-name">Mohammad Shararah</span>{" "}
            <br />A <span className="intro-position">Front-end Developer </span>.
          </p>
          <p className="intro-paragraph">
            Front-end developer and Computer Science student at
            Al-Balqa Applied University. Passionate about creating clean,
            responsive web interfaces using HTML, CSS, JavaScript, and React.
            Always learning and building projects to grow my skills.
          </p>
        </div>

        <div className="profile-view-container">
          <div class="profile-image-container">
            <img className="profile-image" src={ProfileImage} />
          </div>
          <img className="code-icon" src={CodeIcon} />
        </div>
      </section>
    </>
  );
}
