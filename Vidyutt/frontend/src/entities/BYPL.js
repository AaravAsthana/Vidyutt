import React from 'react';
import EntityGraph from '../components/EntityGraph';
import EntityAnalysisTable from '../components/EntityAnalysisTable';

const BYPL = () => (
  <div>
    <h1>BYPL</h1>
    <EntityGraph entity="BYPL" />
    <EntityAnalysisTable entity="BYPL" />
  </div>
);

export default BYPL;
