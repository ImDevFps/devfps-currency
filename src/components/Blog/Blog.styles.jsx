import styled from "styled-components";
import Typography from "@mui/material/Typography";

export const BlogContainer = styled.div`
  flex: 1 0 30%;
  margin: 20px;
`;

export const TypographyTitle = styled(Typography)`
  font-size: 18px !important;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const TypographyBody = styled(Typography)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const BlogLink = styled.a`
  text-decoration: none;
  color: #1976d2;
`;
