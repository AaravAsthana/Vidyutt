import React from 'react';
import EntityGraph from '../components/EntityGraph';
import EntityAnalysisTable from '../components/EntityAnalysisTable';

const BRPL = () => (
  <div>
    <h1>BRPL</h1>
    <EntityGraph entity="BRPL" />
    <EntityAnalysisTable entity="BRPL" />
  </div>
);

export default BRPL;
