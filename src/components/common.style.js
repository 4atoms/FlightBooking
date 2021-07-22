import styled from "styled-components";

export const Modalfirst = styled.div`
    position:fixed;
    top: 15%;
    left: 35%;
    border: 1px solid black;
    border-radius: 10px;
    z-index: 11;
    width: 500px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

export const Modalcontent = styled.div`
    width: 420px;
    background-color: #fff;

`;

export const Modalheader = styled.div`
    padding:10px;
    display:flex;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 2px;
    width:100%;
    margin:0px;
    padding-top: 20px;
    & > button{
        height:25px;
        
    }


`;

export const Modalfooter = styled.div`
    padding:10px;
    color:grey;
    border-top: 1px solid black;
    border-bottom: 1px solid #black;

`;

export const Modaltitle = styled.div`
    margin:0;
    border-radius:100%;
`;

export const Flightroot = styled.div`
    padding:10px
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee
    display: flex;

`;

export const AirlineName = styled.div`
    padding:10px
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee
    display: flex;
    color: blue;

`;

export const Date = styled.div`
    padding:10px
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee
    display: flex;
    align-content: left;

`;



export const Bagdetails = styled.div`
    padding:20px
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    color:black;


`;

export const Adultdetails = styled.div`
    padding:10px
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    color:black;

`;





