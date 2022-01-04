import styled from "styled-components";
import { Table } from "react-bootstrap";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

const size = {
  mobile: "425px",
  tablet: "768px",
};

export const MenuContainer = styled.div`
  display: flex;
  min-height: 50vh;
  min-width: 50vw;
  justify-content: center;
  background-color: #161819;
  border-radius: 5px;
  border: 2px solid grey;
  margin: 20px 10vw;

  @media (max-width: ${size.mobile}) {
    margin: 20px 2vw;
  }
  @media (max-width: ${size.tablet}) {
    margin: 20px 5vw;
  }
`;

export const TableContainer = styled(Table)`
  margin-bottom: 0;
`;

export const NameTd = styled.td`
  width: 28%;
`;

export const Td = styled.td`
  width: 24%;
`;

export const CoinImage = styled.img`
  width: 35px;
`;

export const ChangeUp = styled.span`
  color: #09dd09;
`;

export const ChangeDown = styled.span`
  color: #ff4646;
`;

export const IconContainerUp = styled(FiTrendingUp)`
  margin-right: 10px;
  @media (max-width: ${size.mobile}) {
    display: none;
  }
`;

export const IconContainerDown = styled(FiTrendingDown)`
  margin-right: 10px;
  @media (max-width: ${size.mobile}) {
    display: none;
  }
`;

export const ThIdx = styled.th`
  @media (max-width: ${size.mobile}) {
    display: none;
  }
`;

export const TdIdx = styled.td`
  @media (max-width: ${size.mobile}) {
    display: none;
  }
`;

export const NameSpan = styled.span`
  color: #b8b8b8;
`;
