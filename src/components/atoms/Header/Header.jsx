import { FormattedMessage } from "react-intl";

const Header = ({ title, color }) => {
  return (
    <header className="section-header mb-20">
      <h2 className="section-header__title fw-bold" style={{ color: color }}>
        <FormattedMessage
          id="section.header"
          defaultMessage={title}
          values={{ title: title }}
        />
      </h2>
    </header>
  );
};

export default Header;
