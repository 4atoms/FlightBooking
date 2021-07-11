import styled from "styled-components";
import Imgsrc from "../../assets/images/airplane.jpg";
//import { themeColors } from "Theme";

// export const Imgback = styled.div`
//   height: 2000px;
//   width: 2000px;
// `;

export const Wrapper = styled.div`
  background-image: url(${Imgsrc});
  height: 2000px;
  width: 2000px;
  position: fixed;
  z-index: 1;
`;
export const InnerWrapper = styled.div`
  z-index: 10;
`;

// export const FormStyle = styled.form`
//   margin-top: 100px;
//   margin-bottom: 100px;
//   margin-right: 150px;
//   margin-left: 20px;
// `;
export const LoginContent = styled.div`
  border: 1px solid;
  border-radius: 10px;
  text-align: left;
  height: 300px;
  font-family: "Helvetica";
  font-size: 18px;
  width: 30%;
  height: 350px;

  color: white;
  border-color: #add8e6;
  display: block;
  padding-left: 100px;
  text-transform: uppercase;

  margin-left: 23%;
  margin-top: 5%;

  & > h3 {
    text-align: center;
    margin-right: 30px;
  }
  margin-top: 100px & > htmlFor {

  }
  & > form {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  & > label {
    padding: 0px 0px 0px 0px;
  }
`;

export const InputTypes = styled.div`
  & > input {
    border-radius: 20px;
    border: 0.5px;
    padding: 5px;
    width: 70%;
    margin: 10px 10px 10px 0px;
  }
`;

export const ButtonBlock = styled.div`
  margin: 0px 30px 0px 0px;
  & > button {
    color: white;
    padding: 10px 20px 10px 20px;
    border-radius: 20px;
    border-color: darkgrey;
    background-color: #4b0082;
    border-style: solid;
    margin: 8px 0px 0px 60px;
  }
`;

export const ForgotPassword = styled.h4`
  cursor: pointer;
`;
