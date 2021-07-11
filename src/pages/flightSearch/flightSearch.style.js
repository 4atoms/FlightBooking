import styled from "styled-components";
import Imgsrc from "../../assets/images/AerialView.jpg";

export const MainDiv = styled.div`
  background-image: url(${Imgsrc});
  background-size: cover;
  height: auto;
  width: 100%;
  display: block;
  & > Imgsrc {
    width: 1400 px;
    height: 1200 px;
  }
`;

export const SkyDiv = styled.div`
  width: 100%;
  height: 20px;
  text-align: right;
  & > h2 {
    padding: 10px 10px 0px 0px;
  }
`;

export const LogoDiv = styled.div`
  margin: 30px 0px 0px 30px;
  width: 70%;
  display: inline-block;
  text-align: left;
  & > h1 {
    font-size: 30px;
  }
`;
export const LogOutButton = styled.button`
  text-decoration: none;
  color: #ffffff;
  border: 0.5px;
  border-radius: 5px;
  border-color: black;
  border-style: solid;
  padding: 5px 30px 5px 30px;
  margin: 0px 0px 0px 250px;
  background-color: transparent;
  font-size: 17px;
  text-decoration: none;
  & > Link {
    color: white;
  }
`;

export const ContainerDiv = styled.div`
  width: 100%;
  display: inline-flex;
`;

export const ListOfFlights = styled.div`
  width: 20%;
  height: 400px;
  color: white;
  & > h2 {
    padding: 10px 0px 0px 20px;
  }
  & > li {
    font-size: 25px;
    padding: 10px 0px 0px 20px;
    margin: 10px 0px 0px 5px;
    list-style: none;
  }
`;

export const SearchDiv = styled.div`
  display: flex;
  width: 65%;
  padding: 20px 0px 0px 100px;
  margin: 0px 0px 0px 0px;
`;

export const DateInput = styled.div`
  margin: 0px 30px 0px 0px;
  padding: 0px 0px 0px 0px;
  & > input {
    border: 0.5px;
    border-radius: 3px;
    padding: 7px 30px 7px 30px;
    font-size: 17px;
  }
  color: gray;
`;

export const SourceInput = styled.div`
  margin: 0px 30px 0px 0px;
  padding: 0px 0px 0px 0px;
  & > input {
    border: 0.5px;
    border-radius: 3px;
    padding: 7px 30px 7px 30px;
    font-size: 17px;
  }
`;

export const Destination = styled.div`
  margin: 0px 30px 0px 0px;
  padding: 0px 0px 0px 0px;
  & > input {
    border: 0.5px;
    border-radius: 3px;
    padding: 7px 30px 7px 30px;
    font-size: 17px;
  }
`;

export const SearchButton = styled.div`
  margin: 0px 30px 0px 0px;
  padding: 0px 0px 0px 0px;
  color: grey;
  & > button {
    border: 0.5px;
    border-radius: 4px;
    padding: 7px 30px 7px 30px;
    font-size: 17px;
    outline: none;
  }
`;
