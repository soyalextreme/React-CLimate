import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

// styled components

const MessageContainer = styled.div`
  text-align: center;
  background-color: yellow;
  color: black;
  border-radius: 4rem;
  font-size: 20px;
`;

const Climate = ({ data }) => {
  const { name, main } = data;

  if (!name)
    return (
      <MessageContainer>
        <p>Select a place</p>
      </MessageContainer>
    );

  return (
    <>
      <div className="card-panel white col s12">
        <div className="black-text">
          <h2>The climate of {name} city.</h2>
          <p className="temperatura">
            {parseFloat(main.temp - 273.15, 10).toFixed(2)}{" "}
            <span> &#x2103;</span>
          </p>
          <p>
            Max Temperature:
            {parseFloat(main.temp_max - 273.15, 10).toFixed(2)}{" "}
            <span> &#x2103;</span>
          </p>
          <p>
            Min Temperature:
            {parseFloat(main.temp_min - 273.15, 10).toFixed(2)}{" "}
            <span> &#x2103;</span>
          </p>
          <p>
            Humidity: {""}
            {main.humidity}
          </p>
        </div>
      </div>
    </>
  );
};

Climate.propTypes = {
  data: PropTypes.object.isRequired
};

export default Climate;
