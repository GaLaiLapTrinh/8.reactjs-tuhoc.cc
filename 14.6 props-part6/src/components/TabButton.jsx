export default function TabButton({children}) {
  //js
  // const btn = document.querySelector("button");
  // btn.addEventListener("click", ()=>{
  //   //làm việc j đó
  // })

  function handleClick() {
    alert("Nút bấm được click");
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}

// export default function TabButton({batky}) {
//     return (
//       <li>
//         <button>{batky}</button>
//       </li>
//     );
//   }
