import styled from "@emotion/styled";


export const SummaryWrapper = styled.div`

    width: 85%;
    margin-right: auto;
    margin-left: auto;
`
export const ThankyouSection = styled.div`
    /* background-color: red; */
    height: 100vh;
    width: 100%;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
`
export const ThankyouWrapper = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

export const ThankyouText = styled.h1`
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 0;

`
export const Backbtn = styled.div`
    padding: 10px 60px;
    border: 1px solid black;
    background-color: white;
    color: black;
    border-radius: 50px;
    cursor: pointer;
    transition: all 1s;
    margin-top: 50px;
    &:hover {
        background-color: black;
        color: white;
    }
`


export const SummarySection = styled.div`

    /* background-color: blue; */
    height: 100%;
    width: 100%;
    padding: 40px 30px;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;

`

export const SummaryText = styled.h4`
    font-size: 13px;
    color: gray;
    /* text-decoration: capitalize; */
    text-transform: uppercase;

`

export const SummaryValue = styled.div`


`

export const TotaltextSection = styled.div`

    display: flex;
    width: 90%;
    margin-left: auto;
    align-items: center;
    /* align-self: center; */
    justify-content: space-between;
`

export const TotalValue = styled.p`

`