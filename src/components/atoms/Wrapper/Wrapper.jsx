import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Arabic from "../../../lang/ar.json";
import English from "../../../lang/en.json";

export const Context = React.createContext();
const local = navigator.language;
let lang;
local === "en" ? (lang = English) : (lang = Arabic);

const Wrapper = ({ children }) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  const selectLanguage = (e) => {
    const newLocale = e.target.value;
    const htmlPage = document.getElementById("page");
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
      htmlPage.setAttribute("dir", "ltr");
    } else {
      setMessages(Arabic);
      htmlPage.setAttribute("dir", "rtl");
    }
  };

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
