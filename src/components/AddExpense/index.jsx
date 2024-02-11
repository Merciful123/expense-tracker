import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, selectExpenses } from "../../redux/expenseSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";

const AddExpense = () => {
  const [show, setShow] = useState(false);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const expenses = useSelector(selectExpenses);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Generate UUID for the expense
    const expenseId = uuidv4();

    // Construct the expense object
    const expense = {
      id: expenseId,
      itemName: itemName,
      price: price,
      category: category,
      date: date,
    };

    // Dispatch the addExpense action to add the expense to the store
    dispatch(addExpense(expense));

    // Save expenses to local storage
    localStorage.setItem("expenses", JSON.stringify([...expenses, expense]));

    // Reset form data
    setItemName("");
    setPrice("");
    setCategory("");
    setDate("");

    console.log(expenses);
    // Close the modal
    handleClose();
  };

  return (
    <>
      <Button className="mt-1 px-2 bg-black border-0" onClick={handleShow}>
        ADD EXPENSE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Item name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select value={category} onChange={handleCategoryChange}>
                <option value="">Select Category</option>
                <option value="food and Drinks">Foods and Drinks</option>
                <option value="Bills and Payment">Bills and payment</option>
                <option value="Entertainment">Entertainment</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={handleDateChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddExpense;
