import React from 'react';
import EntityGraph from '../components/EntityGraph';
import EntityAnalysisTable from '../components/EntityAnalysisTable';

const NDMC = () => (
  <div>
    <h1>NDMC</h1>
    <EntityGraph entity="NDMC" />
    <EntityAnalysisTable entity="NDMC" />
  </div>
);

export default NDMC;
