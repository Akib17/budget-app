import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
    const { incomeTransactions, expenseTransactions } = useContext(GlobalContext)
    const incomeAmount = incomeTransactions.map(income => income.incomeAmount)
    const expenseAmount = expenseTransactions.map(expense => expense.expenseAmount)

    const totalIncome = incomeAmount.reduce((acc, item) => (acc += item), 0)
    const totalExpense = expenseAmount.reduce((acc, item) => (acc += item), 0)

    return (
        <div className="my-5">
            {
                totalIncome - totalExpense < 0 ? (
                    <h4 className="font-weight-normal text-danger my-5">Your balance: <br /><br /> <span className="font-weight-bold">${totalIncome - totalExpense} </span></h4>
                ) : (
                        <h4 className="font-weight-normal text-white-50 my-5">Your balance: <br /><br /> <span className="font-weight-bold">${totalIncome - totalExpense} </span></h4>
                    )
            }
            <br />
            <div className="row">
                <div className="col-md-6">
                    <h5 className="font-weight-normal text-success">Income <br /><br /> <span className="font-weight-bold">+ ${totalIncome} </span></h5>
                </div>
                <div className="col-md-6">
                    <h5 className="font-weight-normal text-orange">Expense <br /><br /> <span className="font-weight-bold">- ${totalExpense} </span></h5>
                </div>
            </div>
        </div>
    );
};

export default Balance;