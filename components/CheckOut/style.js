import styled from "@emotion/styled";



export const CheckoutWrapper = styled.div`

    width: 85%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    /* background-color: red; */

`

export const Header = styled.div`
    /* background-color: gray; */
    width: 100%;
    height: 70px;
    align-items: center;
    display: flex;
    border-bottom: 1px solid lightgray;

`

export const Image = styled.img`

    src: ${props => props.src};
    cursor: pointer;

`

export const Main = styled.div`
   /* height: 600px; */
   /* display: flex; */
   `
export const Bodywrapper = styled.div`
    /* background-color: blue; */
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    /* flex-wrap: wrap; */

`

export const Form = styled.div`

`

export const FormText = styled.div`
    font-size:14px;
    font-weight:bold;
    margin-bottom: ${props => props.margin};
    margin-top: ${props => props.margintop ? props.margintop : ""};

`;

export const InputWrapper = styled.div`
    /* background-color: red;  */
    border: 1px solid lightgray;
    padding: 5px 12px;
    border-radius: 9px;
    height:38px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    width: auto;
    margin: 10px;

    margin-bottom: 10px;
    

`

export const SmallInput = styled.div`

background-color: red;

`

export const Input = styled.input`
    width: ${props => props.width};
    border-radius: 5px;
    font-size: 13px;
    /* height: 18px !important; */
    border: none;
    background-color: transparent;
    &:focus{
        outline: none !important;
    }

`
export const ShippingInputs = styled.div`


`

export const Aggreements = styled.div`
    font-size: 13px;
    font-weight: bold;
    display: flex;align-items: center;
    padding: 10px 0;

`
export const Cartinfo = styled.div`
    /* background-color: red; */
    width: 100%;

`

export const ChoiceSection = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;

`

export const ChoiceButton = styled.div`
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 13px;
    display: flex;
    align-items: center;
    cursor: pointer;
    /* font-weight: bold; */
    
    `

export const ReturnBtn = styled(ChoiceButton)`

    /* background-color: red; */
    color: #cccac6;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    span{
        margin-left: 12px;
    }
    margin-left: -30px;
    `

export const CompleteBtn = styled(ChoiceButton)`

background-color: black;
color: white;
padding: 10px 65px;
margin-left: 90px;
`;

export const Checkoutitem = styled.div`
    width: 100%;
    height: 110px;
    /* background-color: green; */
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    border-bottom: 1px solid lightgray;


`

export const Cartimage = styled.img`
    src: ${props => props.src};
    /* src: ${props => props.src}; */
    /* height: 130 !important; */
    object-fit: contain;
    /* width: 130px; */
    border-radius: 8px;
    display: block;
    margin: 5px 0;

`
export const SingleAmount = styled.span`
    background-color: blue;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    /* left: 1000px; */
    margin-left: 80px;


    background-image: linear-gradient(to bottom right, #1c60d6 , #c916c3);
    /* border-radius: 50%; */
    color: white;
    padding: 4px 6px;
    /* position: absolute; */
    font-size: 10px;

    

`

export const ItemName = styled.h3`
    font-size: 13px;
    font-weight: bold;
    margin: 0;
    margin-top: 8px;
`

export const ItemDescription = styled.p`

    font-size: 12px;
    width: 290px;

`


export const PriceSection = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: black; */
    margin-right: 30px;
    font-size: 13px;
    font-weight: bold;

`

export const CartText = styled.h4`
    font-size: 13px;
    color: gray;

`

export const CartTextValue = styled.h5`

`

export const SubSection = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 10px;
    margin: 0;
    border-bottom: 1px solid lightgray;

`

export const SubSectionWrapper = styled.div`
    margin-top: ${props => props.marginTop};
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const Footer = styled.div`

    height: 120px;
    background-color: gray;
    bottom: 0;

`