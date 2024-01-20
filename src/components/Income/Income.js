import React from 'react';
import'./Income.css'
import Header from './../Header/Header';

const Income = (props) => {
    const income = props.income;
    const total= income.reduce((total , prd) => total + prd.income,0);
    return (
        <div className='cart'>

            <Header></Header>


            <h2>This is Cart : {income.length}</h2>
            <h3> Total income : ${total}</h3>
            
        </div>
    );
};

export default Income;