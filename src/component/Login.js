import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import i from "../Img/signin.png"

const MainContainer = styled.div`
  flex-direction: column;
  height: 90vh;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: black;
  @media (max-width:450px) {
    width:80vw;
  }
  @media (min-width:450px)and (max-width:1000px) {
    width:60vw;
  }
  @media (min-width:1000px) {
    width:40vw;
  }
`;

const Welcome=styled.h1`
text-align:center;
margin:3rem 02rem 0;
letter-spacing: 0.4rem;
padding-top:20px; 

`
const Paragragh=styled.p`
font-size:16px;
margin-top:60px;
`
const P=styled.p`
font-size:16px;
margin-top:10px;
`
const Inputconatiner=styled.div`
display:flex;
flex-direction:column;
padding:20px;
height:30%;
width:100%;
gap:10px;
justify-content:center;

`
const Tick=styled.div`

display:flex; 
flex-direction:column-reverse;
@media (min-width:500px) {
  display:flex; 
  flex-direction:row;
justify-content:space-between;
}
gap:10px;
padding:20px;
margin-top:50px;
`
const Box=styled.p`
cursor:pointer;
font-size:16px;
display:flex;
gap:5px;
`
const B=styled.p`
cursor:pointer;
font-size:16px;
display:flex;
gap:5px;
padding-left:20px;
`
const Span=styled.span`
cursor:pointer;
font-size:16px;
color:orange;

`
const S=styled.span`
font-size:16px;
color:orange;
text-decoration:underline;
`
const A=styled.p`
cursor:pointer;
font-size:14px;
margin-top:20px;
text-align:center;

`
const Button=styled.button`
padding:10px;
margin-left:20%;
margin-top:30px;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(8.5px);
border:none;
outline:none;
width:60%;
cursor:pointer;
`
const Container =styled.div`
display:flex;
flex-direction:column;
gap:20px;
padding:10px;
align-items:center;

@media (min-width:450px) {
  justify-content:space-between;
  flex-direction:row;
}
`
const Image=styled.img`
@media (min-width:450px)and (max-width:1000px) {
  flex-direction:row;
  width:250px;
  height:250px;
}
@media (min-width:1000px) {
  flex-direction:row;
  width:500px;
  height:500px;
}
margin-top:10px;
width:300px;

`
const Login = () => {
  return <Container>
    <Image src={i}></Image>
    <MainContainer>
    <Welcome>LOGIN</Welcome>
    <Inputconatiner>
    <Paragragh>Login Id</Paragragh>
    <Input type="text" placeholder="Enter Login Id"/>
    <P>Password</P>
    <Input type="password" placeholder="Enter password"/>
    </Inputconatiner>
    <Tick>
    <Box><input type='checkbox'/>Remember me</Box>
     <Span>Change Password</Span>
    </Tick>
    <B><input type='checkbox'/>Agree to <S>Terms & Conditions</S></B>
    <Button>Login</Button>
    <A>Don't have an account <S>Register Here</S></A>
  </MainContainer>
  </Container>;
};

export default Login;
