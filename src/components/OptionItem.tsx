import React, { useCallback } from "react";
import { OptionItemWrapper } from "../styled/Shared.styled";

interface OptionItemProps {
  label: string;
  value: string;
  type: "checkbox" | "radio";
  checked: boolean;
  onChange: (value: string, checked: boolean) => void;
}

const OptionItem = ({ label, value, type, checked, onChange }: OptionItemProps) => {
  const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(value, e.target.checked);
      },
      [onChange, value]
  );

  return (
      <OptionItemWrapper className="option-item">
        {label}
        <input
            type={type}
            value={value}
            checked={checked}
            onChange={handleChange}
        />
      </OptionItemWrapper>
  );
};

export default React.memo(OptionItem);
