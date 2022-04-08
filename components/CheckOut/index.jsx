import React, { useState } from 'react'
import Link from "next/link"
import { Aggreements, Bodywrapper, Cartimage, Cartinfo, CartText, cartText, Checkoutitem, CheckoutWrapper, ChoiceSection, CompleteBtn, Footer, Form, FormText, Header, Image, Input, InputWrapper, ItemDescription, ItemName, Main, PriceSection, ReturnBtn, ShippingInputs, SingleAmount, SmallInput, SubSection, SubSectionWrapper } from "./style"
import { SortItemRadio } from '../Body/style'
import { openNav } from '../Nav'
import { useMutation, gql } from "@apollo/client"
import { useSelector, useDispatch } from "react-redux"
import { getOrder } from "../../features/checkout/checkoutSclice"
import { useRouter } from "next/router"

// var nodemailer = require('nodemailer');


export const CheckoutItem = ({ item }) => {
    const { name, image, price, description, amount } = item
    return (
        <Checkoutitem>
            <Cartimage style={{ width: '90px', height: '90px' }} src={image} />
            <SingleAmount>{amount}</SingleAmount>
            <div className="" style={{ width: '100%', marginLeft: 32 }}>
                <ItemName>{name}</ItemName>
                <ItemDescription>{ description }</ItemDescription>
            </div>
            <PriceSection>
                <p>${ price }</p>
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




const CHECKOUT = gql`

mutation Checkout($email: String!, $name: String!, $address1: String!, $address2: String!, $city: String!, $country: String!, $zip: String!, $orderItems:  [OrderItemInput]){
    createOrder(input: {
        customerEmailPhone: $email,
        customerFullName: $name,
        customerAddress1: $address1,
        customerAddress2: $address2,
        customerCity: $city,
        country: $country,
        zipCode: $zip,
        orderItems: $orderItems,
    }){
        orderId
        deliveryDate
        customerFullName,
        customerAddress1,
        customerCity,
        country
        customerEmailPhone,
        orderItems{
        quantity
        product{
            name
            description
            price
            images{
               url
            }
            
        }
        }
  }
}


`

const index = () => {

    const [email, setEmail] = useState('');
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [fAddress, setfAddress] = useState('');
    const [sAddress, setsAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');

    const dispatch = useDispatch()
    const router = useRouter()


    const CartItems = useSelector(state => state.cart.cartItems)
    const total = useSelector(state => state.cart.total)

    let checkoutItems = []

    for (var item of CartItems) {
        checkoutItems.push({ productId: item.productId, quantity: item.amount})
    }


    let [submit, { data, loading, error }] = useMutation(CHECKOUT, {
        onCompleted: (data) => {
            dispatch(getOrder(data))
            router.push('/summary')
            
        }
    });


    // submit()
    const submitData = async () => {
        // e.preventDefault();
        submit({
            variables: {
                email: email, name: fName, address1: fAddress, address2: sAddress, city: city, country: country, zip: zip, orderItems: checkoutItems}})
        // console.log(data, error, loading)
    }


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
                            {CartItems.map((item) => {
                                return (
                                    <CheckoutItem key={item.name} item={item} />
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
                                    ${total}
                                </PriceSection>
                            </SubSectionWrapper>
                            {/* </div> */}
                            {/* <div className="" style={{ marginTop: "-18px" }}> */}
                            <SubSectionWrapper marginTop="-18px">
                                <CartText>
                                    SHIPPING
                                </CartText>
                                <PriceSection>
                                    $150
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
                                    ${total > 0 ? total + 150: 0}
                                </PriceSection>
                            </SubSectionWrapper>
                        </SubSection>
                    </div>
                </Bodywrapper>
                <ChoiceSection>
                    <Link href="/">
                        <ReturnBtn onClick={() => setTimeout(openNav, 1200)}><Image src="/Icons/arrow_left.svg" /><span>RETURN TO CART</span></ReturnBtn>
                    </Link>
                    <CompleteBtn onClick={submitData}>Complete Order</CompleteBtn>
                </ChoiceSection>
            </Main>
            {/* <Footer>

            </Footer> */}
        </CheckoutWrapper>
    )
}

export default index