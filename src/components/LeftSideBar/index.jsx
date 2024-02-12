import React from 'react'
import { NavLink } from 'react-router-dom';


const LeftSidebar = () => {
  return (
    <div className="d-flex flex-column gap-4  p-2  min-w-100">
      <NavLink
        to="/"
        // activeClassName="active"
        className="category-tabs-style"
      >
        DASHBOARDS
      </NavLink>
      <NavLink
        to="/category/foods"
        // activeClassName="active"
      >
        FOODS
      </NavLink>
      <NavLink
        to="/category/bills"
        // activeClassName="active"
      >
        BILLS AND PAYMENTS
      </NavLink>
      <NavLink
        to="/category/entertainment"
        // activeClassName="active"
      >
        ENTERTAINMENT
      </NavLink>
      <NavLink
        to="/mystats"
        // activeClassName="active"
      >
        MY STATS
      </NavLink>
    </div>
  );
}

export default LeftSidebar;