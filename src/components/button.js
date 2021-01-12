import React from 'react';
import styled from 'styled-components';

const Button = (props) =>{
    
    const Container = styled.button`

    box-shadow:
    0 0.8px 2.2px rgba(0, 0, 0, 0.02),
    0 1.9px 5.3px rgba(0, 0, 0, 0.028),
    0 3.6px 10px rgba(0, 0, 0, 0.035),
    0 6.5px 17.9px rgba(0, 0, 0, 0.042),
    0 12.1px 33.4px rgba(0, 0, 0, 0.05),
    0 29px 80px rgba(0, 0, 0, 0.07)
  ;
  font-family: 'Work Sans', sans-serif;
        color: ${props.color ? props.color : "black"};        
        background-color: ${props.bgColor ? props.bgColor : "transparent"};   
        font-size: 0.8rem;     
        margin: ${props.margin ? props.margin : "0"};   
        padding: 0.8rem;
        width: ${props.width ? props.width : "max-content"};   
        height: max-content;
        border: none;        
        @media screen and (min-width: 768px){
            font-size: 1.5rem;
        }
        border-radius: 5px;
        transition: background-color 0.6s ease;
        &:focus{
            outline:none;
        }
        &:hover{
            color: ${props.hoverColor ? props.hoverColor : "white"};
            background-color: ${props.hoverBgColor ? props.hoverBgColor : "#333333"};
            border-color: ${props.hoverBrColor ? props.hoverBrColor : "black"};
            cursor: pointer;
            
        }
    `;

  
    return(
        <Container onClick={props.onClick}>
            {props.children}
        </Container>
    );           
} 

export default Button;