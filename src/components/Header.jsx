import "../CSS/header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <span className="logo">&lt;mohammad.shararah/&gt;</span>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              {" "}
              <a href="#home">ABOUT</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
