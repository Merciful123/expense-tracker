import React from 'react'
import { useSelector } from 'react-redux'
import { selectExpenses } from '../../redux/expenseSlice'

const Transactions = () => {
  const expenses = useSelector(selectExpenses)
  return (
    <div>right</div>
  )
}

export default Transactions;