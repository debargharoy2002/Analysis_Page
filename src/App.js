import React from 'react';
import './App.css';
import './Layout.css'
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from './Sidebar.js';
import TopDeals from './TopDeals.js';
import TotalVisit from './TotalVisit.js';
import GridSection from './GridSection.js';
import LeadsBySource from './LeadsBySource.js';
import RevenueAnalysis from './RevenueAnalysis.js';
import ProfitEarned from './ProfitEarned.js';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f2f2f2; /* Light background color */
    color: #333; /* Text color */
  }
`;

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Content = styled.div`
  flex: 1;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Content className='totalPage'>
          <div className='firstcolumn'>
            <TopDeals />
            <TotalVisit />
          </div>
          <div className='secondcolumn'>
            <GridSection />
            <RevenueAnalysis />
          </div>
          <div className='thirdcolumn'>
            <LeadsBySource />
            <ProfitEarned />
          </div>
        </Content>
      </Container>
    </>
  );
};

export default App;

