import React from 'react';
import EntityGraph from '../components/EntityGraph';
import EntityAnalysisTable from '../components/EntityAnalysisTable';

const MES = () => (
  <div>
    <h1>MES</h1>
    <EntityGraph entity="MES" />
    <EntityAnalysisTable entity="MES" />
  </div>
);

export default MES;
