import styles from "../App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../languageSlice";
import { RootState } from "../store";

export const LanguageSwitcher = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const dispatch = useDispatch();

  const toggleLanguage = () => {
    dispatch(setLanguage(language === "en" ? "ja" : "en"));
  };

  return (
    <button onClick={toggleLanguage} className={styles.languageButton}>
      {language === "en" ? "日本語に切り替え" : "Switch to English"}
    </button>
  );
};