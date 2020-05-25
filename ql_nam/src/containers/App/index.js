import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';

import TaskBoard from '../TaskBoard';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskBoard />
      </div>
    </Provider>
  );
}

export default App;
