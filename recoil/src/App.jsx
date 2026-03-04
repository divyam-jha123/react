// context API


// import { useContext } from "react";
// import { createContext, useState } from "react";

// // context api
// const CountContext = createContext();

// function CountContextProvider({ children }) {
//   const [count, setCount] = useState(0);

//   return (
//     <CountContext.Provider value={{ count, setCount }}>
//       {children}
//     </CountContext.Provider>
//   );
// }

// function Parent() {
//   return (
//     <CountContextProvider>
//       <Increase />
//       <Decrease />
//       <Value/>
//     </CountContextProvider>
//   )
// }

// function Increase() {
//   const { count , setCount } = useContext(CountContext);

//   return (
//     <button
//         onClick={() => {
//           setCount((count) => count + 1);
//         }}
//       >
//         Increase
//     </button>
//   )
// }

// function Decrease() {
//   const { count ,setCount } = useContext(CountContext);

//   return (
//     <button
//         onClick={() => {
//           setCount((count) => count - 1);
//         }}
//       >
//         Decrease
//     </button>
//   )
// }

// function Value() {
//   const { count } = useContext(CountContext);

//   return <>
//     <p>Count: {count} </p>
//   </>
// }

// function App() {
//   return (
//     <>
//       <Parent />
//     </>
//   );
// }

// export default App;


////////////////////////////////////////////////////////////

// RECOIL

import { useState } from "react";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil';
import count  from './store/atom/counter.js';


const Parent = () => {
  return <div>
    <RecoilRoot>
      <Increase />
      <Decrease />
      <Value />
    </RecoilRoot>
  </div>
}

function Increase() {
  const setCount = useSetRecoilState(count);

  return <>
    <button onClick={() => {
      setCount(count => count + 1);
    }} >
      Increase
    </button>
  </>
}

function Decrease() {
  const setCount = useSetRecoilState(count);

  return <>
    <button onClick={() => {
      setCount(count => count - 1);
    }} >
      Decrease
    </button>
  </>
}


function Value() {
  const countValue = useRecoilValue(count);

  return <p>
    count: {countValue}
  </p>
}

export default function App() {
  return (
      <div>
       <Parent />
      </div>
    )
}
