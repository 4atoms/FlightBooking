import styled from "styled-components";

export const Modal_final = styled.div`
    position : fixed;
    left:0;
    right:0;
    bottom:0;
    top:0;

    transform: translate(-50%, -50%) scale(0);
    transition: 200ms ease-in-out;
    border: 1px solid black;
    border-radius: 10px;
    z-index: 10;
    background-color: white;
    width: 500px;
    max-width: 80%;


`;


export const Modal_content = styled.div`
    width: 500px;
    background-color: #fff;

`;

export const Modal_header = styled.div`
    padding:10px;

`;

export const Modal_footer = styled.div`
    padding:10px;

`;

export const Modal_title = styled.div`
    margin:0;
`;

export const Modal_body_1 = styled.div`
    padding:10px
    border-top: 1px solid #eee;
    boarder-bottom: 1px solid #eee

`;
