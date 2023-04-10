import styles from "../App.module.css";
import { languageState } from "../RecoilAtoms";
import { useRecoilState } from "recoil";

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ja" : "en");
  };

  return (
    <button onClick={toggleLanguage} className={styles.languageButton}>
      {language === "en" ? "日本語に切り替え" : "Switch to English"}
    </button>
  );
};