import styled from "styled-components";

export const Title = styled.h2`
  font-size: 1.7rem;
  text-align: center;
  font-weight: normal;
  margin: 25px auto 26px;
  color: ${(props) => props.theme.colors.siteBlack};
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0 10px;
`;

export const ModalContent = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
