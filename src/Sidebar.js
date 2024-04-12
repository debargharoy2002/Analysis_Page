import React from 'react';
import styled from 'styled-components';
import './Sidebar.css';
import './App.css';

const SidebarContainer = styled.div`
  background-color: #333;
  color: #fff;
  width: 200px;
  padding: 20px;
`;

const CategoryTitle = styled.h3`
  margin-top: 20px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <CategoryTitle>MAIN</CategoryTitle>
      <ul>
        <li>Homepage</li>
        <li>Profile</li>
      </ul>
      <CategoryTitle>LISTS</CategoryTitle>
      <ul>
        <li>Users</li>
        <li>Products</li>
        <li>Orders</li>
        <li>Posts</li>
      </ul>
      <CategoryTitle>GENERAL</CategoryTitle>
      <ul>
        <li>Elements</li>
        <li>Notes</li>
        <li>Forms</li>
        <li>Calendar</li>
      </ul>
      <CategoryTitle>MAINTENANCE</CategoryTitle>
      <ul>
        <li>Settings</li>
        <li>Backups</li>
      </ul>
      <CategoryTitle>ANALYTICS</CategoryTitle>
      <ul>
        <li>Charts</li>
        <li>Logs</li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;