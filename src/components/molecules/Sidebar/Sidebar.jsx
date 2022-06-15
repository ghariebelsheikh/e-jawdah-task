import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "../../../assets/json/nav.json";
import { Context } from "../../atoms/Wrapper/Wrapper";
import "./Sidebar.scss";

const Sidebar = (props) => {
  const menuItems = require("../../../assets/json/nav.json");
  const context = useContext(Context);

  const navItems = (navType) => {
    return menuItems[navType].map((item) => {
      return (
        <li className="aside-wrapper__nav__item" key={item.id}>
          <Link
            to={item.link}
            className="text-white text-decoration-none opacity-75 d-block py-10 px-30"
          >
            {item.iconName ? (
              <i className={`bi ${item.iconName} mx-10 fs-5`}></i>
            ) : null}{" "}
            <FormattedMessage
              id={`${navType}.${item.name}`}
              defaultMessage={item.name}
            />
          </Link>
        </li>
      );
    });
  };

  return (
    <aside className="aside-wrapper h-100">
      <div className="aside-wrapper__brand d-flex justify-content-center align-items-center p-30">
        <div className="aside-wrapper__logo ms-10">
          <i className="bi bi-bank2 fs-1 text-white"></i>
        </div>
        <div className="aside-wrapper__name text-center">
          <p className="aside-wrapper__brand--ar text-white fw-bold mb-0">
            المركز السعودي للأعمال
          </p>
          <p className="aside-wrapper__brand--en text-white fw-bold mb-0">
            Saudi Business Center
          </p>
        </div>
      </div>

      <div className="aside-wrapper__user px-30">
        <div className="d-flex justify-content-between mb-10">
          <p className="text-white fs-6">
            <FormattedMessage id="sidebar.hello" defaultMessage="مرحباّ" />
          </p>
        </div>
        <p className="aside-wrapper__user__info text-white fs-5 pb-5 d-flex justify-content-between">
          <span className="aside-wrapper__user__name">
            <i className="bi bi-person"></i>{" "}
            <FormattedMessage
              id="sidebar.user"
              defaultMessage="أحمد خالد الغامدى القحطاني"
            />
          </span>
          <button className="btn btn-link fs-5">
            <i className="bi bi-box-arrow-left"></i>
          </button>
        </p>
      </div>

      {/* Nav Items */}

      <nav className="aside-wrapper__nav">
        <ul className="aside-wrapper__nav__items list-unstyled px-0">
          {navItems("mainNav")}
        </ul>
        <hr className="bg-white" />
        <ul className="aside-wrapper__nav__items list-unstyled px-0 mt-20">
          <p className="opacity-75 text-white px-30 fw-bold">
            <FormattedMessage
              id="sidebar.electronicServices"
              defaultMessage="الخدمات الالكترونية"
            />
          </p>
          {navItems("servicesNav")}
        </ul>
        <hr className="bg-white" />
        <ul className="aside-wrapper__nav__items list-unstyled px-0 mt-20">
          <p className="opacity-75 text-white px-30 fw-bold">
            <FormattedMessage
              id="sidebar.otherLinks"
              defaultMessage="روابط اخري"
            />
          </p>
          {navItems("otherLinks")}
        </ul>
        <select
          className="form-select mx-30"
          value={context.locale}
          onChange={context.selectLanguage}
        >
          <option defaultValue value="ar">
            العربية
          </option>
          <option value="en">English</option>
        </select>
      </nav>
    </aside>
  );
};

export default Sidebar;
