import { createContext, useContext, useState } from "react";
import { SearchHistoryData } from "@/types/SearchTypes";

interface SearchContextProps {
  searchHistories: SearchHistoryData[];
  setSearchHistories: React.Dispatch<React.SetStateAction<SearchHistoryData[]>>;
}

interface SignUpProviderProps {
  children: React.ReactNode;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

const SearchProvider: React.FC<SignUpProviderProps> = ({ children }) => {
  const [searchHistories, setSearchHistories] = useState<SearchHistoryData[]>(
    []
  );
  console.log(searchHistories);

  return (
    <SearchContext.Provider value={{ searchHistories, setSearchHistories }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return context || { searchHistories: [], setSearchHistories: () => {} };
};

export { SearchProvider, useSearch };
