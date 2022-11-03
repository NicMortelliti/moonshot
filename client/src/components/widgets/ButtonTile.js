import React from "react";
import styled from "styled-components"

function ButtonTile({id, title, subtitle}) {

 const Button = styled.button`
	background: palevioletred;
	color: white;
	border-radius: 0;
	border: 2px solid palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
	`
 return (
    <Button key={id} value={id} onClick={(e) => console.log(e)}>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
    </Button>
  );
}

export default ButtonTile;
