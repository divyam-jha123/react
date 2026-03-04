import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";

import { useDebounce } from "./hooks/useDebounce";
// custom hook  -> useCounter

// function useCounter() {
//   const [count, setCount] = useState(0);

//   function IncreaseCount() {
//     setCount(count => count + 1);
//   }

//   return {
//     count,
//     IncreaseCount,
//   }
// }

///////////////////////////////////////////////////////

//  usePrev hook

// export default function App() {
//   const [count, setCount] = useState(0);
//   const prev = usePrev(count);

//   return (
//     <>
//       <button onClick={() => {
//         setCount(count => count + 1);
//       }}>Increase {count}</button>  

//       <p>previous value is {prev}</p>
//     </>
//   )
// }


//////////////////////////////////////////////////////


// useDebounce -> search suggestions on yt, google , facebook, amazon

export default function App() {
  const [inputVal, setInputVal] = useState("search...");
  const debounced = useDebounce(inputVal);

  const search = (e) => {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    // fetch
    console.log("req is made to the backend");
  }, [debounced]);

  return (
    <>
      <input type="text" onChange={search} placeholder="search..."/>
    </>
  )
}





