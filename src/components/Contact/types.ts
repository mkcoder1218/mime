import { TFunction } from "react-i18next";

export interface ContactProps {
  title: string;
  content: string;
  id: string;
  t: TFunction;
}

export interface ValidationTypeProps {
  name?: string;
  email?: string;
  message?: string;
  type?: string;
}

export interface validateProps {
  name?: string;
  email?: string;
  message?: string;
}
