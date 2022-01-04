import React from "react";
import {
  ChangeDown,
  ChangeUp,
  CoinImage,
  IconContainerDown,
  IconContainerUp,
  MenuContainer,
  NameSpan,
  NameTd,
  TableContainer,
  Td,
  TdIdx,
  ThIdx,
} from "./Menu.styles";
import { AiFillDollarCircle } from "react-icons/ai";

const Menu = ({ data }) => {
  return (
    <MenuContainer id='pricing'>
      <TableContainer striped hover variant='dark' borderless>
        <thead>
          <tr>
            <ThIdx>#</ThIdx>
            <th></th>
            <th>name</th>
            <th>
              <AiFillDollarCircle />
              price
            </th>
            <th>Change 24H</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.Data.map((item, idx) => (
              <tr key={item.CoinInfo.Id}>
                <TdIdx>{idx + 1}</TdIdx>
                <td>
                  <CoinImage
                    src={`https://www.cryptocompare.com/${item.CoinInfo.ImageUrl}`}
                    alt=''
                  />
                </td>
                <NameTd>
                  <span>
                    {item.CoinInfo.FullName}
                    <br />
                    <NameSpan>{item.CoinInfo.Name}</NameSpan>
                  </span>
                </NameTd>
                <Td>{item.DISPLAY.USD.PRICE}</Td>
                <Td>
                  {item.DISPLAY.USD.CHANGEPCT24HOUR >= 0 ? (
                    <ChangeUp>
                      <IconContainerUp /> %{" "}
                      <span>{item.DISPLAY.USD.CHANGEPCT24HOUR}</span>
                    </ChangeUp>
                  ) : (
                    <ChangeDown>
                      <IconContainerDown /> % {item.DISPLAY.USD.CHANGEPCT24HOUR}
                    </ChangeDown>
                  )}
                </Td>
                <Td>{item.DISPLAY.USD.MKTCAP}</Td>
              </tr>
            ))}
        </tbody>
      </TableContainer>
    </MenuContainer>
  );
};

export default Menu;
