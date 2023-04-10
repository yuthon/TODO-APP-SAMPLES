import styles from "../App.module.css";

type LanguageSwitcherProps = {
  language: string;
  toggleLanguage: () => void;
};

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, toggleLanguage }) => {
  return (
    <button onClick={toggleLanguage} className={styles.languageButton}>
      {language === "en" ? "日本語に切り替え" : "Switch to English"}
    </button>
  );
};