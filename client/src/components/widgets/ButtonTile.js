import React from "react";
import styled from "styled-components"

function ButtonTile({id, title, subtitle, handleClick}) {

 const Button = styled.button`
 	background: rgba(3,39,86,0.8);
	background: linear-gradient(180deg, rgba(3,39,86,1) 0%, rgba(2,87,151,1) 100%);
	color: white;
	border-radius: 0;
	border: 2px solid rgb(37,129,187);
	border: linear-gradient(180deg, rgba(37,129,187,1) 0%, rgba(133,213,253,1) 100%);
	margin: 1em 1em;
	padding: 0.25em 1em;
	width: 8em;
	height: 8em;
  cursor: pointer;
	`
 return (
    <Button key={id} onClick={(e) => handleClick(e,id)}>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
    </Button>
  );
}

export default ButtonTile;
