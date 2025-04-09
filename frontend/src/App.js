import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import RegisterList from './components/RegisterList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div>
      <RegisterForm onRegisterAdded={triggerRefresh} />
      <RegisterList refresh={refresh} />
    </div>
  );
}

export default App;
