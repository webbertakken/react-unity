import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';

const App = () => {
  const unityContent = new UnityContent('unity/Build.json', 'unity/UnityLoader.js');

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ color: '#ccc' }}>WebGL Test</h1>
      <div style={{ border: '1px solid #ccc' }}>
        <Unity unityContent={unityContent} />
      </div>
    </div>
  );
};

export default App;
