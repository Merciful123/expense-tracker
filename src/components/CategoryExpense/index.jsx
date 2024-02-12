import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { selectExpenses } from '../../redux/expenseSlice';
import { useSelector } from 'react-redux';

const CategoryExpense = () => {
    const expenses = useSelector(selectExpenses);
    console.log(expenses)
  return (
    <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action href="#link1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" disabled>
        Link 2
      </ListGroup.Item>
      
    </ListGroup>
  );
}

export default CategoryExpense;