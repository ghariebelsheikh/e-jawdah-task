import "./Navbar.scss";

const Navbar = () => {
  const links = require("../../../assets/json/nav.json");
  return (
    <nav className="navbar mt-15">
      {/* Top Navbar */}
      <div className="navbar__top-nav d-flex justify-content-between align-items-center w-100 px-25">
        <p className="navbar__user-info text-white fw-bold fs-5">
          <i className="bi bi-person fs-4"></i> أحمد خالد الغامدى
        </p>
        <select
          defaultValue={"ar"}
          className="form-select navbar__language w-auto text-start bg-transparent border-0 text-white"
        >
          <option className="text-black" value={"ar"}>
            العربية
          </option>
          <option className="text-black" value={"en"}>
            ENGLISH
          </option>
        </select>
      </div>

      {/* Main Navbar */}
      <div className="navbar__main-nav d-flex justify-content-between align-items-end w-100 px-25 py-15">
        <div className="navbar__links">
          <ul className="list-unstyled list-inline p-0">
            {links.links.map((link) => {
              return (
                <li className="list-inline-item ms-30" key={link.id}>
                  <a
                    className="text-white text-decoration-none"
                    href={link.link}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="navbar__brand d-flex justify-content-center align-items-center">
          <div className="navbar__logo ms-10">
            <i className="bi bi-bank2 fs-1 text-white"></i>
          </div>
          <div className="navbar__name text-center">
            <p className="navbar__brand--ar text-white fw-bold mb-0">
              المركز السعودي للأعمال
            </p>
            <p className="navbar__brand--en text-white fw-bold mb-0">
              Saudi Business Center
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
