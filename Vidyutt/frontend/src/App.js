import React from 'react';
import EntityGraph from './components/EntityGraph';
import EntityAnalysisTable from './components/EntityAnalysisTable';

const App = () => {
  const entities = [
    { id: 'delhi', title: 'Delhi' },
    { id: 'brpl', title: 'BRPL' },
    { id: 'ndpl', title: 'NDPL' },
    { id: 'bypl', title: 'BYPL' },
    { id: 'ndmc', title: 'NDMC' },
    { id: 'mes', title: 'MES' },
  ];

  return (
    <div>
      <h1>Energy Consumption Analysis</h1>
      {entities.map((entity) => (
        <div key={entity.id}>
          <EntityGraph entity={entity.id} title={entity.title} />
          <EntityAnalysisTable entity={entity.id} title={entity.title} />
        </div>
      ))}
    </div>
  );
};

export default App;
