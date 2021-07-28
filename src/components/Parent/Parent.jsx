import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

function add(a, b) {
  console.log('useMemo :  rendered!');
  return a + b;
}

const Parent = () => {
  const [change, setChange] = useState('🍕');
  const [cnt, setCnt] = useState(0);
  const inputRef = useRef();

  const x = useCallback(function fn() {
    console.log('useCallback : I got rendered!');
  }, []);

  useEffect(() => {
    x();
    inputRef.current.focus();
  }, [x]);

  const memoizedValue = useMemo(() => add(cnt, 5), [cnt]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{change}</h1>
      <button
        onClick={() => (change === '🍕' ? setChange('🍩') : setChange('🍕'))}
      >
        Click to change
      </button>
      <h1>Result {memoizedValue}</h1>
      <button onClick={() => setCnt((prevCnt) => prevCnt + 5)}>Add 5</button>
      <div style={{ marginTop: 20 }}>
        <input ref={inputRef} type="text" />
        <button onClick={() => inputRef.current.focus()}>focus</button>
      </div>
    </div>
  );
};

export default Parent;
