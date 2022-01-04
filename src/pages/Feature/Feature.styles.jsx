import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const FeatureHeader = styled.div`
  display: flex;
  width: 50vw;
  justify-content: center;
  align-items: center;
  height: 20vh;
  font-size: 24px;
  font-weight: bold;
  font-style: oblique;
  color: white;
  text-transform: capitalize;
`;

export const FeatureConverter = styled.div`
  display: flex;
  justify-content: center;
  width: 60vw;
`;

export const FormControl = styled(Form.Control)`
  margin: 0 5px 0 0;
  width: 100%;
`;

export const FormSelect = styled(Form.Select)`
  margin: 0 5px;
  width: 40%;
`;

export const ValueContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  color: white;
  height: 10vh;
  align-items: center;
  font-size: 20px;
`;

export const Capitalize = styled.span`
  text-transform: uppercase;
  color: red;
  margin: 0 2px;
`;

export const Result = styled.span`
  margin: 0 5px;
  color: lightgreen;
`;

export const Tips = styled.div`
  display: flex;
  text-transform: capitalize;
  height: 10vh;
  font-size: 16px;
  color: orangered;
  width: 60vw;
`;
