import React from "react";
import { useState } from "react";
import {
  FeatureContainer,
  FeatureHeader,
  FeatureConverter,
  FormControl,
  FormSelect,
  ValueContainer,
  Capitalize,
  Result,
  Tips,
} from "./Feature.styles";
import Button from "react-bootstrap/Button";

const Feature = () => {
  const [query, setQuery] = useState("");
  const [unit, setUnit] = useState("");
  const [result, setResult] = useState("");

  const search = () => {
    const fetchData = async () => {
      await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${query}&tsyms=${unit}`
      )
        .then((response) => response.json())
        .then((res) => setResult(res));
    };
    fetchData();
  };
  return (
    <FeatureContainer>
      <FeatureHeader>Convert Currency Value</FeatureHeader>
      <FeatureConverter>
        <FormControl
          onChange={(e) => setQuery(e.target.value)}
          type='text'
          placeholder='Currency'
          value={query}
        />
        <FormSelect onChange={(e) => setUnit(e.target.value)}>
          <option value='choose'>choose unit</option>
          <option value='USD'>USD</option>
          <option value='EURO'>EURO</option>
          <option value='BTC'>BTC</option>
          <option value='ETH'>ETH</option>
        </FormSelect>
        <Button onClick={search} variant='outline-primary'>
          Convert
        </Button>
      </FeatureConverter>
      {result && (
        <ValueContainer>
          1<Capitalize>{query}</Capitalize> = <Result>{result[unit]}</Result>
          <Capitalize>{unit}</Capitalize>
        </ValueContainer>
      )}
      <Tips>* plz enter currency symbol</Tips>
    </FeatureContainer>
  );
};

export default Feature;
