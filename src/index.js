import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase } from './lib/firebase';

function FireBaseWrapper() {
  const fireBaseProviderValue = useMemo(() => ({ firebase }), [firebase]);

  return (
    <FirebaseContext.Provider value={fireBaseProviderValue}>
      <App />
    </FirebaseContext.Provider>
  );
}

ReactDOM.render(<FireBaseWrapper />, document.getElementById('root'));
