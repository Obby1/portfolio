import { useEffect, useState, createContext, useContext } from "react";

type language = "EN";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<language>("EN");

  const toggleLanguage = () => {
    if (language === "EN") {
      window.localStorage.setItem("language", "DE");
    } else {
      setLanguage("EN");
      window.localStorage.setItem("language", "EN");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      "language"
    ) as language | null;

    if (localLanguage) {
      setLanguage(localLanguage);

    
    } else if (window.matchMedia("(prefers-color-scheme: DE)").matches) {

    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }

  return context;
}
