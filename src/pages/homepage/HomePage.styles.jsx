import styled from "styled-components";
import { CarouselItem } from "react-bootstrap";

export const HomePageContainer = styled.div`
  margin: 0;
`;

export const CarouselItemContainer = styled(CarouselItem)`
  max-height: 90vh;
`;

export const BlogsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80vw;
  margin: auto;
`;

export const SliderImage = styled.img`
  display: block;
  width: 100%;
  height: 90vh;
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 5vh;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  background-color: #303030;
`;
