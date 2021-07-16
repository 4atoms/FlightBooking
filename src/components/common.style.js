import styled from "styled-components";

export const Modalfirst = styled.div`
    position:fixed;
    padding-left: 10px;
    padding-top: 0px;
    border: 1px solid black;
    border-radius: 10px;
    z-index: 10;
    width: 500px;
    max-width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin:0px;
    padding-top: 20px;
    & > button{
        height:25px;
        
    }


`;

export const Modalfooter = styled.div`
    padding:10px;

`;

export const Modaltitle = styled.div`
    margin:0;
`;

export const Flightroot = styled.div`
    padding:10px
    border-top: 1px solid #eee;
    boarder-bottom: 1px solid #eee
    display: flex;

    width:49%;
    

`;

export const Flightday = styled.div`
    padding:10px
    border-top: 1px solid #eee;
    boarder-bottom: 1px solid #eee
    margin-right:0px;
    display: flex;
    
    width:49%;

`;

export const Bagdetails = styled.div`
    padding:10px
    border-top: 1px solid #eee;
    boarder-bottom: 1px solid #eee

`;

export const Adultdetails = styled.div`
    padding:10px
    border-top: 1px solid #eee;
    boarder-bottom: 1px solid #eee

`;





