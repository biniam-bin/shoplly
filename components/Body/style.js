import styled from "@emotion/styled";



export const BodyWrapper = styled.div`
    /* background-color: red; */
    height: 810px;///////////////////////////////////////////////////////////////////////////////////////////////
    width: 93%;
    margin: 0 auto 0 auto;
    border-top: 1px solid lightgray;
    display: flex;
`
export const BodyLeft = styled.div`
    /* background-color: green; */
    height: auto;
    width: 260px;
    /* position: fixed; */

    /* left: 0; */

    `

export const LeftWrapper = styled.div`
    /* background: red; */
    height: full;
    margin-top: 20px;
    /* margin-left: 10px; */

`

export const LeftText = styled.h2`
    margin-top: 5px;
    font-size: 17px;
    font-weight: 100;
    padding-bottom: 8px;
    border-bottom: 1px solid lightgray;
`;

export const FilterItem = styled.div`
    display: flex;
    margin-top: 5px;
`;

export const FilterItemCombo = styled.input`
    border: none;
    margin: none;
    accent-color: black;
    /* z-index: -10; */
`;


export const FilterItemText = styled.span`
    margin-left: 8px;
    font-size: 14px;
    /* font-weight: bold; */

`
export const LeftBottom = styled.div`
    margin-top: 30px;

`;

export const SortItemText = styled.span`

    margin-left: 8px;
    font-size: 14px;
`
export const SortItemRadio = styled.input`

    border: none;
    margin: none;
    /* outline: 1px solid black; */
    accent-color: black;
`;



export const BodyRight = styled.div`
    background-color: #f0f5f1;
    height: 100%;
    width: 100%;
    /* z-index: ${props => props.sidebar ? '-10' : '10'}; */

`
export const CardContainer = styled.div`
    margin-top: 55px;
    margin-left: 6px;
    margin-right: auto;
    width: 100%;

`;


export const CardWrapper = styled.div`
    background-color: white;
    display: inline-block;
    height: 315px;
    width: 220px;
    margin: 6px 20px;
    border-radius: 15px;
    padding:17px 0;

`

export const CardImageContainer = styled.div`
    display: flex;
    height: 200px;
    width: 70%;
    margin: 0 auto;
    /* background-color: green; */
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 10px 10px 10px 10px;
    /* min-width: 235px; */

`;

export const CardImage = styled.img`
    src: ${props => props.src};
    max-height: 100px;
    /* width: 235px; */
    display: block;
    /* object-fit: fill; */
    border-radius: 15px;
`;

export const Cardinfo = styled.div`

    display: flex;
    justify-content: space-between;
    padding-left: 8px;
    padding-right: 8px;
    align-items: center;
`

export const CardName = styled.h2`
    font-size: 17px;
    font-weight: 100;

`
export const CardPrice = styled.h2`
    font-size: 15px;
    font-weight: 100;


`

export const CardButton = styled.div`
    width: 95%;
    height: 35px;
    border-radius: 50px;
    margin-right: auto;
    margin-left: auto;
    background-color: black;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`

export const SidebarWrapper = styled.div`
    height: 100%; /* 100% Full-height */
  width: 0px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */

`




