import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

const Container=styled.div`
background: #f5f5f7;
box-shadow:
  0 0.4px 1.1px -7px rgba(0, 0, 0, 0.038),
  0 1px 2.7px -7px rgba(0, 0, 0, 0.047),
  0 1.9px 5px -7px rgba(0, 0, 0, 0.052),
  0 3.4px 8.9px -7px rgba(0, 0, 0, 0.056),
  0 6.3px 16.7px -7px rgba(0, 0, 0, 0.062),
  0 15px 40px -7px rgba(0, 0, 0, 0.08)
;

width: 100%;
@media screen and (min-width: 768px){
width: 50%;
}
@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px){ 
  width: 100%;
}
margin: auto;
border-radius: 10px;

`;

const Text=styled.div`
text-align: left;
font-size: 1rem;
@media screen and (min-width: 768px){
font-size: 2.5rem;
}
padding: 1rem;
`;

const Amount=styled.span`
color: #ee383f;
float: right;
`;

const Balance=({counter})=>{
     
    const balance=useSelector(state=> state.expenseLimitReducer);
    console.log(balance);
    
    return(
    <Container>
    <Text>Balance    
    <Amount>
    {counter}
    </Amount> </Text>    
 
    </Container>
    );
}

export default Balance;