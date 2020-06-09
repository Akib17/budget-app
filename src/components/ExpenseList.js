import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

const ExpenseList = () => {
    const { expenseTransactions, removeTransactions } = useContext(GlobalContext);
    return (
        <div className="text-white-50 mt-5">
            <h4 className="font-weight-normal text-orange">Expense history</h4>
            <ul className="list-group">
                {
                    expenseTransactions.length ? (
                        expenseTransactions.map(expense => {
                            const { id, expenseText, expenseAmount } = expense
                            return (
                                <li key={id} className="list-group-item p-2 font-weight-light border-top d-flex justify-content-between bg-dark border-secondary rounded-sm my-2">
                                    <div>
                                        <span> {expenseText} </span>
                                    </div>
                                    <div>
                                        <span className="text-warning">${expenseAmount} </span>
                                        <span onClick={() => {
                                            if (window.confirm('Are you sure?')) {
                                                { removeTransactions(id) }
                                            }
                                        }} style={{ cursor: 'pointer' }} className="ml-2 text-danger"><i className="fas fa-trash"></i></span>
                                    </div>
                                </li>
                            )
                        })
                    ) : (
                            <h2 className="font-weight-normal"><span className="display-3">Ops!</span><br />Your have no expense history</h2>
                        )
                }
            </ul>
        </div>
    );
};

export default ExpenseList;