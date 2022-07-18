import './App.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Voyager } from 'graphql-voyager';

function introspectionProvider(query) {
  return fetch(window.GRAPHENE_SETTINGS.graphqlHost, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: query }),
  }).then((response) => response.json());
}

function App() {
  return (
    <div className="App">
      <div>
        <Voyager introspection={introspectionProvider} />
      </div>
    </div>
  );
}

export default App;
