import React, {useState} from 'react'
import Link from "next/link"
import { Aggreements, Bodywrapper, Cartimage, Cartinfo, CartText, cartText, Checkoutitem, CheckoutWrapper, ChoiceSection, CompleteBtn, Footer, Form, FormText, Header, Image, Input, InputWrapper, ItemDescription, ItemName, Main, PriceSection, ReturnBtn, ShippingInputs, SingleAmount, SmallInput, SubSection, SubSectionWrapper } from "./style"
import { SortItemRadio } from '../Body/style'
import { openNav } from '../Nav'



export const CheckoutItem = ({ item }) => {
    const { name, image, price, description, amount } = item
    return (
        <Checkoutitem>
            <Cartimage style={{ width: '90px', height: '90px' }} src="https://picsum.photos/200/200" />
            <SingleAmount>3</SingleAmount>
            <div className="" style={{ width: '100%', marginLeft: 32 }}>
                <ItemName>ONYX  WOOD CHAIR</ItemName>
                <ItemDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque libero quis magni perferendis facere. Sit a soluta sunt.</ItemDescription>
            </div>
            <PriceSection>
                <p>$4562</p>
            </PriceSection>
        </Checkoutitem>
    )
}

const cartData = [
    {
        name: "ONYX wood chair",
        image: "https://picsum.photos/240/200",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Possimus nesciunt officiis vero soluta.",
        price: 456.99,
        amount: 1,
    },
    {
        name: "ONYX wood chair",
        image: "https://picsum.photos/240/200",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Possimus nesciunt officiis vero soluta.",
        price: 456.99,
        amount: 2,
    },


]


const index = () => {

    const [email, setEmail] = useState('');
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [fAddress, setfAddress] = useState('');
    const [sAddress, setsAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');


    return (
        <CheckoutWrapper id="checkout-page">
            <Header>
                <Link href="/">
                    <Image src="/Icons/logo.svg" />
                </Link>
            </Header>
            <Main>
                <Bodywrapper >

                    <Form>
                        <FormText margin="20px">Contact Information</FormText>
                        <InputWrapper>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} width="350px" placeholder="Email or Phone number" />
                        </InputWrapper>


                        <FormText margin="10px" margintop="20px">Shipping Address</FormText>
                        <ShippingInputs>
                            <div style={{ display: 'flex' }}>
                                <InputWrapper>
                                    <Input value={fName} onChange={(e) => setfName(e.target.value)} width="150px" placeholder="First Name" />
                                </InputWrapper>
                                <InputWrapper>
                                    <Input value={lName} onChange={(e) => setlName(e.target.value)} width="150px" placeholder="Last Name" />
                                </InputWrapper>
                            </div>
                            <InputWrapper>
                                <Input value={fAddress} onChange={(e) => setfAddress(e.target.value)} width="350px" placeholder="Address Line 1" />
                            </InputWrapper>
                            <InputWrapper>
                                <Input value={sAddress} onChange={(e) => setsAddress(e.target.value)} width="350px" placeholder="Address Line 2" />
                            </InputWrapper>
                            <InputWrapper>
                                <Input value={city} onChange={(e) => setCity(e.target.value)} width="350px" placeholder="City/Town" />
                            </InputWrapper>


                            <div style={{ display: 'flex' }}>
                                <InputWrapper>
                                    <Input value={country} onChange={(e) => setCountry(e.target.value)} width="150px" placeholder="Country" />
                                </InputWrapper>
                                <InputWrapper>
                                    <Input value={zip} onChange={(e) => setZip(e.target.value)} width="150px" placeholder="Postal/Zip" />
                                </InputWrapper>
                            </div>
                        </ShippingInputs>
                        <Aggreements>
                            <SortItemRadio type="radio" />
                            <span style={{ marginLeft: '8px' }}>Save this information for the next time</span>
                        </Aggreements>
                    </Form>
                    <div style={{ display: 'flex', marginLeft: '110px', width: '100%', flexDirection: 'column' }} className="">

                        <Cartinfo>
                            {cartData.map((item) => {
                                return (
                                    <CheckoutItem key={item.amount} item={item} />
                                )
                            })}
                        </Cartinfo>
                        <SubSection>
                            {/* <div className="" style={{ marginTop: "-10px" }}> */}
                            <SubSectionWrapper marginTop="-10px">
                                <CartText>
                                    SUBTOTAL
                                </CartText>
                                <PriceSection>
                                    $450
                                </PriceSection>
                            </SubSectionWrapper>
                            {/* </div> */}
                            {/* <div className="" style={{ marginTop: "-18px" }}> */}
                            <SubSectionWrapper marginTop="-18px">
                                <CartText>
                                    SHIPPING
                                </CartText>
                                <PriceSection>
                                    $450
                                </PriceSection>
                            </SubSectionWrapper>
                            {/* </div> */}
                        </SubSection>
                        <SubSection>
                            <SubSectionWrapper marginTop="0px">
                                <CartText>
                                    TOTAL
                                </CartText>
                                <PriceSection>
                                    $450
                                </PriceSection>
                            </SubSectionWrapper>
                        </SubSection>
                    </div>
                </Bodywrapper>
                <ChoiceSection>
                    <Link href="/">
                        <ReturnBtn onClick={() => setTimeout(openNav, 1200)}><Image src="/Icons/arrow_left.svg" /><span>RETURN TO CART</span></ReturnBtn>
                    </Link>
                    <CompleteBtn>Complete Order</CompleteBtn>
                </ChoiceSection>
            </Main>
            {/* <Footer>

            </Footer> */}
        </CheckoutWrapper>
    )
}

export default index