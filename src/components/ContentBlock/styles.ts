import styled from "styled-components";
import { Row } from "antd";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;
  background: ${({ theme }) => theme.body};
  transition: all 0.3s ease;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
  gap: 2rem;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 1.2rem;
  line-height: 1.2;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;

export const MinPara = styled("p")`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
