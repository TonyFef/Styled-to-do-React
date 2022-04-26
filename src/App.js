import React from 'react';
import { RecoilRoot } from 'recoil';

import { Home } from './screens';

function App() {
  return (
    <RecoilRoot>
      <div>
        <Home />
      </div>
    </RecoilRoot>
  );
}

export default App;
