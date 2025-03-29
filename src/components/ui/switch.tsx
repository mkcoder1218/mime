import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import styled from "styled-components";
import { Theme } from "../../styles/ThemeContext";

const StyledSwitch = styled(SwitchPrimitives.Root)<{ theme: Theme }>`
  position: relative;
  width: 48px;
  height: 26px;
  background-color: ${({ theme }) => theme.secondaryBackground};
  border-radius: 13px;
  border: 2px solid ${({ theme }) => theme.secondaryBorder};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.accent}40;
  }

  &[data-state="checked"] {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
    border-color: transparent;
  }
`;

const ThumbWrapper = styled.div<{ checked?: boolean }>`
  position: absolute;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translate(2px, -50%);
  will-change: transform;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
  font-size: 12px;
  top: 50%;

  &[data-state="checked"] {
    transform: translate(24px, -50%);
    background: ${({ theme }) => theme.background};
    box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
  }
`;

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ checked, ...props }, ref) => (
  <StyledSwitch {...props} ref={ref}>
    <ThumbWrapper data-state={checked ? "checked" : "unchecked"}>
      {checked ? "🌙" : "☀️"}
    </ThumbWrapper>
  </StyledSwitch>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
