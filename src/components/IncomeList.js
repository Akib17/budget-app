import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

const IncomeList = () => {
    const { incomeTransactions, removeTransactions } = useContext(GlobalContext)
    return (
        <div className="text-white-50 mt-5">
            <h4 className="font-weight-normal text-success">Income history</h4>
            <ul className="list-group">
                {
                    incomeTransactions.length ? (
                        incomeTransactions.map(income => {
                            const { id, incomeText, incomeAmount } = income
                            return (
                                <li key={id} className="list-group-item p-2 font-weight-light border-top d-flex justify-content-between bg-dark border-secondary rounded-sm my-2">
                                    <div>
                                        <span> {incomeText} </span>
                                    </div>
                                    <div>
                                        <span className="text-warning">${incomeAmount} </span>
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
                            <h2 className="font-weight-normal"><span className="display-3">Ops!</span><br />Your have no income history</h2>
                        )
                }
            </ul>
        </div>
    );
};

export default IncomeList;