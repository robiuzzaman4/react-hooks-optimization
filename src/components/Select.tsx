/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, createContext, useContext, useState } from "react";

interface ISelectProps {
  children: ReactNode;
}
interface ISelectOptionProps {
  children: ReactNode;
  value: any;
}

const SelectContext = createContext(null);

const Select: React.FC<ISelectProps> = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");
  console.log(SelectOption);

  return (
    <SelectContext.Provider value={{ selectedOption, setSelectedOption }}>
      <select onChange={(e) => setSelectedOption(e?.target?.value)}>
        {children}
      </select>
    </SelectContext.Provider>
  );
};

const SelectOption: React.FC<ISelectOptionProps> = ({ children, value }) => {
  const { selectedOption } = useContext(SelectContext);
  const isActive = selectedOption === value;
  return (
    <option className={`${isActive && "bg-purple-500"}`} value={value}>
      {children}
    </option>
  );
};

Select.SelectOption = SelectOption;

export default Select;
