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
        to="/"
        // activeClassName="active"
        className="/category/foods"
      >
        FOODS
      </NavLink>
      <NavLink
        to="/"
        // activeClassName="active"
        className="category/bills"
      >
        BILLS AND PAYMENTS
      </NavLink>
      <NavLink
        to="/"
        // activeClassName="active"
        className="category/entertainment"
      >
        ENTERTAINMENT
      </NavLink>
      <NavLink
        to="/"
        // activeClassName="active"
        className="/mystats"
      >
        MY STATS
      </NavLink>

      {/* <div className="fw-bolder text-secondary">DASHBOARDS</div>
      <div className="fw-bolder text-secondary">FOODS</div>
      <div className="fw-bolder  text-secondary">BILLS AND PAYMENTS</div>
      <div className="fw-bolder text-secondary">ENTERTAINMENT</div>
      <div className="fw-bolder text-secondary">MY STATS</div> */}
    </div>
  );
}

export default LeftSidebar;