import styled, { css } from "styled-components";



// .box-with-classname {
//   width: 100px;
//   height: 100px;
//   background-color: green;
//   margin: 2rem;
// }

// .box-with-classname:hover {
//   background-color: red;
// }

// .box-with-classname--black {
//   background-color: black;
// }

export default function BoxWithStyledComponents({ isBlack }) {
  return (
    <>
    <Box/>
    <Box $props={isBlack}/>
    </>
  )
}
const Box = styled.div`
  width: 100px;
margin: 2rem;
height: 100px; 
background-color:${(props) => (props.$highlighted ? "green" : "black") }


`;



