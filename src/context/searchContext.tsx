import React from 'react';

interface ISearch {
  term: string;
  setTerm: (val: string) => void;
  handlePress: (val: any) => void;
}

export const SearchContext = React.createContext<ISearch | null>(null);
