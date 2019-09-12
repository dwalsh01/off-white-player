import React from 'react';

interface Search {
  term: string;
  setTerm: (val: string) => void;
  handlePress: (val: any) => void;
}

export const SearchContext = React.createContext<Search | null>(null);
