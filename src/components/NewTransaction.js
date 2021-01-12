import React from 'react';
import styled from 'styled-components';
import Button from './button';

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

const Input=styled.input`
font-family: 'Work Sans', sans-serif;
     width: 100%;     
    height: 2rem;    
    border-radius: 5px;
    padding: 0.5rem;
  outline: none;
  font-size: 1.5rem;
        border: none;
        background: #e8e8e8;
`;

const NewTransaction = (props) => {

    return (
        <Container>
            <Text>New Transaction</Text>
          <hr style={{ border: '0.1px solid lightgrey'}}/>

          <div style={{ padding: '1rem 2rem 1rem 1rem'}}>
             INR              
            <Input
               id='amount'
               type="text"
               name='amount'
               placeholder="INR"
               
               onChange={props.handleChange}             
             />    
             <span style={{color: '#ee383f'}}>{props.error1}</span>         
            </div>

            <div style={{ padding: '1rem 2rem 1rem 1rem'}}>
                Add Category
            <Input            
            id='category'
            type="text"
            name='category'
            placeholder="Enter Category"
            value={props.category}
            onChange={props.handleChange}            
            />     
             <span style={{color: '#ee383f'}}>{props.error2}</span>
            </div>

            <div style={{display:"flex"}}>
                <Button onClick={props.handleSubmitExpense} hoverColor={"#ee383f"} color={"#ee383f"} width={"100%"} margin={"1rem 0rem 1rem 1rem"}>Add Expense</Button>
                <Button onClick={props.handleSubmitIncome} width={"100%"} margin={"1rem"}>Add Income</Button>
            </div>

        </Container>
    );
}

export default NewTransaction;