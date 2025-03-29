import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import styled from "styled-components";

const StyledSwitch = styled(SwitchPrimitives.Root)`
  all: unset;
  width: 42px;
  height: 24px;
  background-color: ${({ theme }) => theme.text};
  border-radius: 9999px;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.body},
      0 0 0 4px ${({ theme }) => theme.text};
  }

  &[data-state="checked"] {
    background-color: ${({ theme }) => theme.text};
  }
`;

const StyledThumb = styled(SwitchPrimitives.Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.body};
  border-radius: 9999px;
  box-shadow: 0 2px 2px ${({ theme }) => theme.text};
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state="checked"] {
    transform: translateX(20px);
  }
`;

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, onCheckedChange, className }, ref) => {
    return (
      <StyledSwitch
        ref={ref}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={className}
      >
        <StyledThumb />
      </StyledSwitch>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
