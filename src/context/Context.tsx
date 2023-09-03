import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Photo, Video } from "pexels";
import counterReducer, { stateType } from "./Reducer";

interface DataContextType {
  isDark: boolean;
  heroImgVideos: Photo[] | Video[] | [];
  changeTheme: (isDark: boolean) => void;
  handleHeroImgVideos: (media: Photo[] | Video[] | []) => void;
}

// provider type
type DataProvider = {
  children: ReactNode;
};

const CounterContext = createContext<DataContextType | undefined>(undefined);

const initialState: stateType = {
  isDark: true,
  heroImgVideos: [],
};

const DataProvider: React.FC<DataProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const changeTheme = (isDark: boolean) => {
    dispatch({ type: "CHANGE_THEME", payload: isDark });
  };

  const handleHeroImgVideos = (media: Photo[] | Video[] | []) => {
    dispatch({ type: "SET_HERO_IMG_VDO", payload: media });
  };

  const contextValue: DataContextType = {
    ...state,
    changeTheme,
    handleHeroImgVideos,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

export default DataProvider;

// custom hook

export const useDataProvider = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter must be used within a DataProvider");
  }

  return context;
};
