import styled from "@emotion/styled";



export const HeroWrapper = styled.div`
    /* background-color: red; */
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* border-bottom: 1px solid lightgray; */
    
    /* justify-content: center; */
    align-items: center;
    padding: 10px 0;

`;

export const SearchWrapper = styled.div`
    /* background-color: green; */
    border: 1px solid lightgray;
    height: 45px;
    border-radius: 35px;
    margin: 25px 0px 10px 5px;
    width: 30%;
    display: flex;
    padding: 5px 5px;
    padding-left: 20px;
    align-items: center

`

export const SearchIcon = styled.img`
    src: ${props => props.src};
    height: 17px;
    width: 17px;
    margin-right: 2px;
    transition: all 1s ease-in;

`

export const SearchInput = styled.input`
    
    width: 92%;
    height: 100%;
    background-color: transparent;
    border: none;
    font-size:15px;
    margin-left: 8px;
    &:focus{
        outline: none;
    }

`

export const TypesWrapper = styled.div`
    margin-bottom: 15px;
    /* background-color: red; */
    /* position: sticky; */
`

export const TypesList = styled.ul`
    list-style: none;
    display: flex;
    /* background-color: blue; */
    color: gray;
    width: 600px;
    margin-left: -50px;
    align-items: center;
    justify-content: space-between;
    font-size:14px;
    `
    
export const Type = styled.li`
    font-weight: ${props => props.active ? "600" : ''};
    color: ${props => props.active ? "black" : ""};
    cursor: pointer;
    position: relative;
    &:before {
        position: absolute;
        content: '';
        height: 3px;
        bottom: -8px;
        margin: 0 auto;
		left: 0;
        right: 0;
		width: 20px;
		background: ${props => props.active ? "black" : ''};
        border-radius: 10px;
        -o-transition:.5s;
  		  -ms-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition:.5s;
  }

    

`


