// import { useMemo, useState } from "react";
// const UseMemo = () => {
//   const [number, setNumber] = useState(0);
//   const [dark, setDark] = useState(false);

//   const doubleNumber = useMemo(() => {
//     if (dark) {
//       return slowMyUIRender(number);
//     }
//   }, [number]);

//   const themStyles = {
//     backgroundColor: dark ? "black" : "red",
//     color: dark ? "red" : "black",
//   };

//   return (
//     <>
//       <input
//         type={"number"}
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       ></input>
//       <button onClick={() => setDark((e) => !e)}>Change theme</button>
//       <div style={themStyles}>{doubleNumber}---THEME TEXT</div>
//     </>
//   );
// };

// const slowMyUIRender = (data) => {
//   console.log(data, "calling slowrender function");
//   for (let i = 0; i <= 100000; i++) {
//     console.log(i);
//   }
//   return data * 2;
// };

// export default UseMemo;
