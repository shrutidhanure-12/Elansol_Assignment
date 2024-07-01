import React from 'react';
import { Table } from 'react-bootstrap';
import './Dashboard.css'; 

import user1 from"../images/user1.png"
import user2 from"../images/user3.png"
import user3 from"../images/user2.png"

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <Table className="dashboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src={user1} alt=" " className="user-avatar" />
              Michael Holz
            </td>
            <td>04/10/2013</td>
            <td>Admin</td>
            <td><span className="status-dot status-active"></span>Active</td>
            <td>
              <span className="action-icon">⚙️</span>
              <span className="action-icon">❌</span>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img src={user2} alt=" " className="user-avatar" />
              shruti dhanure
            </td>
            <td>03/12/2002</td>
            <td>SDE</td>
            <td><span className="status-dot status-inactive"></span>inactive</td>
            <td>
              <span className="action-icon">⚙️</span>
              <span className="action-icon">❌</span>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <img src={user3} alt=" " className="user-avatar" />
              John singh
            </td>
            <td>07/23/1996</td>
            <td>Admin</td>
            <td><span className="status-dot status-suspended"></span>suspended</td>
            <td>
              <span className="action-icon">⚙️</span>
              <span className="action-icon">❌</span>
            </td>
          </tr>
          {/* Add more rows here following the same structure */}
        </tbody>
      </Table>
    </div>
  );
}

export default Dashboard;