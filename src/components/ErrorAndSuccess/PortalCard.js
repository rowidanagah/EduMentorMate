import React from 'react';
import styled from "styled-components";


/* 
const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
}; */


export const PortalWrapper = styled.div`
  background: white;
  position: absolute;
  width: 65%;
  height: 300px;
  top: 800px;
  left: 47%;
  /* border: 1px solid; */
  border-radius: 6px;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 20px black;
  padding: 40px;

  h2 {
    font-size: 3rem;
  }

  ion-icon {
    font-size: 2rem;
    color:red;
    background: lightblue;
    padding: 10px 20px;
    border-radius: 6px;
  }

  p {
    margin-bottom: 15px;
  }

  ion-icon[name="close-outline"] {
    position: absolute;
    top: 10px;
    right: 10px;
    background: white;
    color: lightblue;
  }
`;

export default PortalWrapper;
