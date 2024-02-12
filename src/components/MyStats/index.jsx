import React from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyStats = () => {
  return (
    <div>
      <ListGroup.Item action href="#link1">
              <Link to={"/"}><Button>Back</Button></Link>
              Mystats
      </ListGroup.Item>
    </div>
  );
}

export default MyStats