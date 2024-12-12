import React from 'react';
import EntityGraph from '../components/EntityGraph';
import EntityAnalysisTable from '../components/EntityAnalysisTable';

const Delhi = () => (
  <div>
    <h1>Delhi</h1>
    <EntityGraph entity="Delhi" />
    <EntityAnalysisTable entity="Delhi" />
  </div>
);

export default Delhi;
