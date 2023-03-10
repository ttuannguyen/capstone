import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { editExpense } from './ExpensesSlice';
import { editExpense } from '../categories/CategoriesSlice';



const ExpenseEditForm = () => {

    // const [merchant, setMerchant] = useState('');
    // const [date, setDate] = useState('');
    // const [amount, setAmount] = useState('');

    const loggedIn = useSelector(state => state.user.loggedIn);
    const errors = useSelector(state => state.categories.errors);    
    const categories = useSelector(state => state.categories.entities);


    const dispatch = useDispatch();
    // const params = useParams(); 
    const params = useParams();

    const category = categories.find(e => e.id === parseInt(params.category_id));
    const expense = category.user_expenses.find(e => e.id === parseInt(params.id));
    console.log(expense)


    const [formData, setFormData] = useState({
        merchant: expense.merchant,
        date: expense.date,   
        amount: expense.amount,
        // merchant: merchant,
        // date: date,   
        // amount: amount
    });
    // console.log(formData)

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editExpense({params, formData}))

        // setFormData({
        //     merchant:'',
        //     date:'',   
        //     amount:'',
        // })
        
        // navigate(`/categories/${params.category_id}/expenses/${params.id}`)

        // fetch(`/users/${user.id}/expenses/${params.id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     dispatch(editExpense(data))
        //     navigate(`/expenses/${params.id}`)
        // })
    }

    if (loggedIn) {
        return (
            <div className='expense-edit-form'>
                <h4>Expense Edit Form ??????</h4><br/>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor='merchant'>Merchant</label>
                        <input type="text"  className="form-control" name='merchant' value={formData.merchant} onChange={handleChange} /><br/>
                    </div>
                    <div className="form-group">
                        <label className="form-group">Date</label>
                        <input type="text" className="form-control" name='date' value={formData.date} onChange={handleChange} /><br/>    
                    </div>
                    <div className="form-group">
                        <label className="form-group">Amount</label>
                        <input type="text" className="form-control" name='amount' value={formData.amount} onChange={handleChange} /><br/>
                    </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>
                {errors?.map(error => <p key={error}>{error}</p>)}
            </div>
        )
    } else {
        return (<h4>Please login or create an Account</h4>)
    }
}

export default ExpenseEditForm