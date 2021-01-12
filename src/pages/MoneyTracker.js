import React from 'react';
import NewTransaction from '../components/NewTransaction';
import Balance from '../components/Balance';
import ExpenseLimit from '../components/ExpenseLimit';
import styled from 'styled-components';
import TransactionHistory from '../components/TransactionsHistory';
import useForm from '../components/useForm';
import { validateNumber, validateInfo } from '../components/validateInfo';
import { useSelector } from 'react-redux';


const Container = styled.div`
padding: 1rem;
@media screen and (min-width: 768px){
padding: 2rem 5rem 2rem 5rem;
}
background: #ededed;
`;

const Heading = styled.h1`
text-align: center;
font-size: 2rem;
color: grey;
@media screen and (min-width: 768px){
    font-size: 4rem;
}
`;

const MoneyApp = () => {

    const { values, list, handleSubmitExpense, handleSubmitIncome, handleChange, errors } = useForm({ validateNumber, validateInfo });
    const counter = useSelector(state => state.counter);

    const displayLimit = () => {
        if (isNaN(values.expenseLimit)) {
        } else {
            return (
                <span>{values.expenseLimit}</span>
            );
        }
    }

    return (
        <Container>
            <Heading >Money Tracker</Heading>
            <br />
            <Balance counter={counter}></Balance>
            <br />
            <br />
            <ExpenseLimit errors={errors.expenseLimit} displayLimit={displayLimit} expenseLimit={values.expenseLimit} handleChange={handleChange} ></ExpenseLimit>
            <br />
            <br />
            <NewTransaction error1={errors.amount} error2={errors.category} handleChange={handleChange} amount={values.amount} category={values.category} handleSubmitExpense={handleSubmitExpense} handleSubmitIncome={handleSubmitIncome} />
            <br />
            <br />
            <TransactionHistory list={list} category={values.category} />
        </Container>
    );
}

export default MoneyApp;