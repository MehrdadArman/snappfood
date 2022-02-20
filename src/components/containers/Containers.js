import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  flex-direction: ${(props) => props.direction};
  flex-wrap: wrap;
  padding: ${(props) => props.padding};
`;

Wrapper.defaultProps = {
  padding: 0,
  justifyContent: "space-between",
  direction: "row",
};
