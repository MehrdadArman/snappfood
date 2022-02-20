import styled from "styled-components";
import { theme } from "../../configs/theme";

export const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 400px;
  flex-shrink: 0;
  flex-grow: 0;
  max-width: 100%;
  background-color: #fff;
  margin-bottom: ${(props) => props.marginBottom}px;
  box-shadow: ${theme.boxShadow.base};
  min-height: 250px;
  background-color: #fff;
  border-radius: 4px;
`;

export const CardImageWrapper = styled.header`
  width: 100%;
  min-height: 150px;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px 8px 0px 0px;
`;

export const CardLogo = styled.img`
  position: absolute;
  bottom: -10%;
  right: 10px;
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: contain;
  box-shadow: ${theme.boxShadow.base};
  background-color: #fff;
  padding: 3px;
  border: 3px solid #eee;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  flex-shrink: 0;
  flex-grow: 0;
  padding: 20px;
`;
