import React, { useRef, useEffect } from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';

const App = () => {
  const spanReference = useRef(null);
  const unityContent = new UnityContent('unity/Build.json', 'unity/UnityLoader.js');

  useEffect(() => {
    unityContent.on('UpdateRenderTime', duration => {
      spanReference.current.innerHTML = duration;
    });
  }, [unityContent]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ color: '#ccc' }}>WebGL Test</h1>
      <span style={{ color: '#666' }} ref={spanReference}>
        initial
      </span>
      <div style={{ border: '1px solid #ccc' }}>
        <Unity unityContent={unityContent} />
      </div>
    </div>
  );
};

export default App;
