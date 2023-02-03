import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoriesAsync } from './CategoriesSlice';
import Category from './Category';
import CategoryAddForm from './CategoryAddForm';

const Categories = () => {
  
  const categories = useSelector(state => state.categories.data)
  const loggedIn = useSelector(state => state.auth.loggedIn)


  if (loggedIn) {

    const categoriesList = categories.map(category => <Category key={category.id} category={category} />)
    
    return (
      <div>
        {categoriesList}
        <CategoryAddForm />
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>) 
  }
}

export default Categories