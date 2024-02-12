import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { selectExpenses } from "../../redux/expenseSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategoryExpenseFoods = () => {
  const expenses = useSelector(selectExpenses);
  console.log(expenses);
  return (
    <ListGroup>
      <ListGroup.Item action href="#link1">
        <Link to={"/"}>
          <Button>Back</Button>
        </Link>
      </ListGroup.Item>
      {expenses?.map((cat) => {
        if (cat.category === "food and Drinks") {
          return (
            <ListGroup.Item action href="#link1" key={cat.id}>
              {cat.itemName}
            </ListGroup.Item>
          );
        }
        return null; // Skip rendering if itemName or price is empty
      })}
    </ListGroup>
  );
};

export default CategoryExpenseFoods;



export const CategoryExpenseBills = () => {
  const expenses = useSelector(selectExpenses);
  console.log(expenses);
  return (
    <ListGroup>
      <ListGroup.Item action href="#link1">
        <Link to={"/"}>
          <Button>Back</Button>
        </Link>
      </ListGroup.Item>
      {expenses?.map((cat) => {
        if (cat.category === "Bills and Payment") {
          return (
            <ListGroup.Item action href="#link1" key={cat.id}>
              {cat.itemName}
            </ListGroup.Item>
          );
        }
        return null; // Skip rendering if itemName or price is empty
      })}
    </ListGroup>
  );
};



export const CategoryExpenseEntertainment = () => {
  const expenses = useSelector(selectExpenses);
  console.log(expenses);
  return (
    <ListGroup>
      <ListGroup.Item action href="#link1">
        <Link to={"/"}>
          <Button>Back</Button>
        </Link>
      </ListGroup.Item>
      {expenses?.map((cat) => {
        if (cat.category === "Entertainment") {
          return (
            <ListGroup.Item action href="#link1" key={cat.id}>
              {cat.itemName}
            </ListGroup.Item>
          );
        }
        return null; // Skip rendering if itemName or price is empty
      })}
    </ListGroup>
  );
};