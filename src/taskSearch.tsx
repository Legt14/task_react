import React from "react";

interface SearchState{
  searchValue: string;
  setSearchValue: (value:string) => void;
}

export function TaskSearch({searchValue, setSearchValue}:SearchState) {
  // const [searchValue, setSearchValue] = React.useState('')


  const OnSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log(newValue);
    setSearchValue(newValue)
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search Task"
        value={searchValue}
        onChange={OnSearchValueChange}
      />
    </>
  );
}
