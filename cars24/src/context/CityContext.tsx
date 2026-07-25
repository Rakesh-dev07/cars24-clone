"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CityContextType = {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
};

const CityContext = createContext<CityContextType | undefined>(undefined);

export const CityProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selectedCity, setSelectedCityState] =
    useState("India");

  useEffect(() => {
    const city = localStorage.getItem("selectedCity");

    if (city) {
      setSelectedCityState(city);
    }
  }, []);

  const setSelectedCity = (city: string) => {
    setSelectedCityState(city);
    localStorage.setItem("selectedCity", city);
  };

  return (
    <CityContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => {
  const context = useContext(CityContext);

  if (!context) {
    throw new Error(
      "useCity must be used within CityProvider"
    );
  }

  return context;
};