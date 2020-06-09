import React, { useState, useContext } from 'react';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';
import { v4 as uuidv4 } from 'uuid'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const { addIncome, addExpense } = useContext(GlobalContext)
    const [income, setIncome] = useState({
        incomeText: '',
        incomeAmount: ''
    })
    const [expense, setExpense] = useState({
        expenseText: '',
        expenseAmount: ''
    });
    const { incomeText, incomeAmount } = income
    const { expenseText, expenseAmount } = expense
    const incomeChangeHandler = e => {
        setIncome({
            ...income, [e.target.name]: e.target.value
        })
    }
    const expenseChangeHandler = e => {
        setExpense({
            ...expense, [e.target.name]: e.target.value
        })
    }
    const incomeSubmitHandler = e => {
        e.preventDefault()
        if (!income.incomeAmount || !income.incomeText) {
            alert('Please add your income details')
        } else {
            let textFormate = /^(^[a-zA-Z ]*$)/
            if (textFormate.test(income.incomeText)) {
                const newIncomeTransaction = {
                    id: uuidv4(),
                    incomeText,
                    incomeAmount: incomeAmount * 1
                }
                addIncome(newIncomeTransaction)
                setIncome({
                    incomeText: '',
                    incomeAmount: ''
                })
            } else {
                alert('Please use "TEXT" for INCOME details')
            }
        }
    }
    const expenseSubmitHandler = e => {
        e.preventDefault()
        if (!expense.expenseText || !expense.expenseAmount) {
            alert('Please add your EXPENSE details')
        } else {
            let textFormate = /^(^[a-zA-Z ]*$)/
            if (textFormate.test(expense.expenseText)) {
                const newExpenseTransaction = {
                    id: uuidv4(),
                    expenseText,
                    expenseAmount: expenseAmount * 1
                }
                addExpense(newExpenseTransaction)
                setExpense({
                    expenseText: '',
                    expenseAmount: ''
                })
            } else {
                alert('Please use "TEXT" for EXPENSE details')
            }
        }
    }
    return (
        <div className="row mt-4">
            <div className="col-md-6 text-left">
                <form onSubmit={incomeSubmitHandler}>
                    <div className="form-group">
                        <input type="text" className="form-control border-secondary bg-dark text-white-50" placeholder="Add Income" name="incomeText" value={income.incomeText} autoComplete="off" onChange={incomeChangeHandler} />
                        <br />
                        <input type="text" pattern="[0-9]*" className="form-control border-secondary bg-dark text-white-50" placeholder="Amount" name="incomeAmount" value={income.incomeAmount} autoComplete="off" onChange={incomeChangeHandler} />
                        <br />
                        <input type="submit" className="btn btn-success border-0 btn-sm" />
                    </div>
                </form>
                <IncomeList />
            </div>
            <div className="col-md-6 text-left">
                <form onSubmit={expenseSubmitHandler}>
                    <div className="form-group">
                        <input type="text" className="form-control border-secondary bg-dark text-white-50" placeholder="Add Expense" name="expenseText" autoComplete="off" value={expense.expenseText} onChange={expenseChangeHandler} />
                        <br />
                        <input type="text" className="form-control border-secondary bg-dark text-white-50" placeholder="Amount" pattern="[0-9]*" name="expenseAmount" autoComplete="off" value={expense.expenseAmount} onChange={expenseChangeHandler} />
                        <br />
                        <input type="submit" className="btn btn-danger border-0 btn-sm" />
                    </div>
                </form>
                <ExpenseList />
            </div>
        </div>
    );
};

export default AddTransaction;