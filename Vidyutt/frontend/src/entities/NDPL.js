import React from 'react';
import EntityGraph from '../components/EntityGraph';
import EntityAnalysisTable from '../components/EntityAnalysisTable';

const NDPL = () => (
  <div>
    <h1>NDPL</h1>
    <EntityGraph entity="NDPL" />
    <EntityAnalysisTable entity="NDPL" />
  </div>
);

export default NDPL;
