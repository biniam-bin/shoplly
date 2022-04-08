import styled from "@emotion/styled";


export const NavWrapper = styled.div`
    /* background-color: red; */
    height: 90px;
    border-bottom: 1px solid lightgray;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* margin-top: 12px; */

`;

export const LogoWrapper = styled.div`
    /* background-color: blue; */
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -20px;
    /* width: 100px; */

`;

export const Navigations = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
    margin-right: 90px;
    
    `;

export const NaviationUl = styled.ul`
    /* background-color: green; */
    /* margin-top: auto; */
    margin-top: 10px;
    display: flex;
    width: auto;
    list-style: none;
    justify-content: center;
    align-items: flex-start;
    color: gray;
    margin-top: 10px;
    `

export const Nav = styled.li`
    margin: 0px 25px;
    text-decoration: none; 
    position: relative;
    cursor: pointer;
    font-size: 14px;
    color: ${props => props.active ? "black" : "gray"};
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


export const ProfileSection = styled.div`
        /* background-color: purple; */
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80px;
        margin-top: -15px;
`;


export const ShopBag = styled.div`
    width: 30px;
    height: 30px;
    margin-top: 4px;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const CartValue = styled.span`
    /* background-color: blue; */
    /* background: rgb(2,0,36); */
    /* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(191,37,159,1) 35%, rgba(0,212,255,1) 100%); */
    background-image: linear-gradient(to bottom right, #1c60d6 , #c916c3);
    border-radius: 50%;
    color: white;
    margin-right: -20px;
    margin-top: -23px;
    font-size: 12px;
    padding: 2px 6px;
    position: absolute;
    font-size: 10px;

`

export const Image = styled.img`
    src: url(${props => props.src});
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin-left: 3px;


`
export const CartImage = styled.img`
    src: url(${props => props.src});
    height: 12px;
    width: 12px;
    /* border-radius: 50%; */
    /* margin-left: 3px; */


`

export const SidebarWrapper = styled.div`
    height: 100%; /* 100% Full-height */
  width: 0px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background-color: white; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  overflow-y: hidden; /* Disable horizontal scroll */
  
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  z-index: 9000;
  display: flex; 
  flex-direction: column;


`


export const SidebarTop = styled.div`
 /* background-color: red; */
 height: 100px;
 width: 85%;
 margin-left: auto;
 margin-right: auto;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 border-bottom: 1px solid lightgray;

`

export const CloseSidebar = styled.div`
    padding: 8px 15px;
    background-color: white;
    font-size: 14px;
    border: 1px solid lightgray;
    border-radius: 50px;
    display: flex;
    cursor: pointer;
    
`
export const CloseCartvalue = styled(CartValue)`
    margin-top: 0;
    margin-right: 0;
    position: relative;
    margin-left: 5px;

`

export const SidebarBody = styled.div`
    /* background-color: green; */
    height: 100%;
    width: 87%;
    margin-left: auto;
    margin-right: auto;
    overflow-y: scroll;
    
`
export const SidebarTitle = styled.h2`
    font-size: 17px;
    margin: 25px 0;
`
export const CartsContainer = styled.div`

`
export const CartItemwrapper = styled.div`
    width: 100%;
    /* background-color: red; */
    height: 142px;
    margin: 10px 0;
    border-bottom: 1px solid light-gray;
    display: flex;

`

export const CartLeft = styled.div`

`
export const SideCartImage = styled.img`
    src: ${props => props.src};
    height: auto;
    object-fit: contain;
    width: 130px;
    border-radius: 8px;
    display: block;
`
export const CartRight = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-right: 40px;

`

export const CartInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    padding: 10px 0;
`

export const CartTitle = styled.h2`
    font-size: 14px;
    margin: 0;


`

export const CartDescription = styled.p`
    font-size:12px;
    width: 330px;
    margin-top: 5px;
`

export const Icon = styled.img`
    src: ${props => props.src};
    height: ${props => props.height};
    width: ${props => props.width};
    cursor: pointer;
`
export const CartItemBottom = styled.div`
    width: 138%;
    /* background-color: black; */
    display: flex;
    height: 20px;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;

`

export const CartPrice = styled.p`
    font-size: 13px;
    font-weight: bold;
    margin: 0;
`

export const CartItemAmountContainer = styled.div`
    display: flex;
    align-items: center;

`

export const Amount = styled.p`
    margin: 0 15px;
    font-size:12px;

`


export const SidebarFooter = styled.div`
    /* background-color: blue; */
    bottom: 0;
    height: 130px;
    display: flex;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    padding-top: -30px;
`

export const TaxSection = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    justify-content: space-between;
    width: 100%;

`

export const TaxText = styled.h3`

  font-size: 13px;
  font-weight: bold;

`

export const TotalValue = styled.p`
    font-weight: bold;
    font-size: 13px;
    font-weight: bold;
`

export const BottonsSection = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-end;

`
export const SidebarButton = styled.div`

    padding: 8px 13px;
    border-radius: 50px;
    border: 1px solid black;
    cursor: pointer;
    margin: 8px;
    font-size: 13px;

`

export const ContinueShpping = styled(SidebarButton)`

  background-color: white;
  color: black;

`
export const CheckOut = styled(SidebarButton)`

  background-color: black;
  color: white;

`






