import React from 'react'


const LeftSidebar = () => {
  return (
    <div className="d-flex flex-column gap-4  p-2  min-w-100">
      <div className="fw-bolder text-secondary">DASHBOARDS</div>
      <div className="fw-bolder  text-secondary">BILLS AND PAYMENTS</div>
      <div className="fw-bolder text-secondary">EXPENSES</div>
      <div className="fw-bolder text-secondary">STATS</div>
    </div>
  );
}

export default LeftSidebar;