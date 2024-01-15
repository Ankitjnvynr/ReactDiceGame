import styled from "styled-components";

export const Button = styled.button`
color: white;
border-radius: 10px;
padding: 10px 18px;
background-color: black;
min-width: 220px;
border:none;
font-size: 16px;
border:  1px solid black;
transition:0.4s background ease-in;
cursor: pointer;


&:hover{
  background-color: white;
  color: black;
  border:  1px solid black;
}
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    color: Black;
    border:  1px solid black;
    &:hover{
        background-color: black;
        color: White;
        border:  1px solid transparent;
        }

`;