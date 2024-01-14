import React from "react";
import Select from "./Select";

const CompoundComponent: React.FC = () => {
  return (
    <div className="grid gap-6 w-full max-w-[540px] mx-auto rounded-lg bg-slate-50 shadow-md p-4 my-20">
      <Select>
        <Select.SelectOption value="Development">Development</Select.SelectOption>
        <Select.SelectOption value="Design">Design</Select.SelectOption>
        <Select.SelectOption value="Marketing">Marketing</Select.SelectOption>
      </Select>
    </div>
  );
};

export default CompoundComponent;
