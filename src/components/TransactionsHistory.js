import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
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

const Text = styled.div`
text-align: left;
font-size: 1rem;
@media screen and (min-width: 768px){
  font-size: 2.5rem;
}
padding: 1rem;
`;

const DateRight = styled.span`
color: #ee383f;
float: right;
font-size: 0.8rem;
@media screen and (min-width: 768px){
  font-size: 1.5rem;
}
`;

const Category = styled.span`
float: left;
font-size: 0.8rem;
@media screen and (min-width: 768px){
  font-size: 1.5rem;
}
`;

const Lists = styled.div`
font-size: 0.8rem;
@media screen and (min-width: 768px){
  font-size: 1.5rem;
}
`;

const Amount = styled.span`
position: absolute;
left: 47vw;
font-size: 0.8rem;
@media screen and (min-width: 768px){
  font-size: 1.5rem;
}
`;

const Input = styled.input`  
font-size: 1.5rem;   
     width: 100%;     
    height: 2rem;     
    border-radius: 5px;
    padding: 0.5rem;
  outline: none;  
  font-family: 'Work Sans', sans-serif;
        border: none;
        background: #e8e8e8;
`;

const Results = styled.div`
text-align: center;
width: 100%;     
height: 20rem;     
border-radius: 5px;
overflow-y:scroll;
font-size: 1.5rem;
outline: none;  
    border: none;
    background: #e8e8e8;
`;

const TransactionHistory = (props) => {

  var today = new Date(),
    date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

  const [search, setSearch] = useState('');
  var filteredData;

  const searchFilter = e => {
    setSearch(e.target.value);
  }

  filteredData = props.list.filter(data => {
    if (data.category.toLowerCase().includes(search.toLowerCase()) || data.amount.toLowerCase().includes(search.toLowerCase())) {
      return data
    }
  }).map(data => <Lists style={{ padding: '0.5rem 1rem 0rem 1rem' }} key={data}><Category>{data.category}</Category>{data.amount}<DateRight>{date}</DateRight></Lists>)

  return (
    <Container>
      <Text>Transaction History </Text>
      <hr style={{ border: '0.1px solid lightgrey' }} />
      <div style={{ padding: '1rem 2rem 0rem 1rem' }}>
        <Input type="text" placeholder="Search" onChange={searchFilter} />
      </div>
      <div style={{ padding: '1rem' }}>
        <div style={{ padding: '0rem 1rem 2.5rem 0.5rem' }}><Category>CATEGORY</Category><Amount>AMOUNT</Amount><DateRight>DATE</DateRight></div>
        <Results>
          {filteredData}
        </Results>
      </div>
    </Container>
  );
}

export default TransactionHistory;