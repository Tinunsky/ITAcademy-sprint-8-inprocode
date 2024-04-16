import { useTranslation } from "react-i18next";
import esFlag from "../../assets/es_flag.png";
import enFlag from "../../assets/en_flag.png";
import catFlag from "../../assets/cat_flag.png";

export function LanguageSelector() {
  const locales = {
    en: { title: "English", flag: enFlag },
    es: { title: "Español", flag: esFlag },
    cat: { title: "Català", flag: catFlag },
  };

  const { i18n } = useTranslation();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "right" }}>
        {Object.keys(locales).map((locale) => (
          <div key={locale}>
            <div onClick={() => i18n.changeLanguage(locale)}>
              <img
                src={locales[locale].flag}
                alt={locales[locale].title}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "60px",
                  cursor: "pointer",
                  marginBottom: "10px",
                  margin: "5px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
