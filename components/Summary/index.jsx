import React from 'react'
import { Backbtn, SummarySection, SummaryText, SummaryValue, SummaryWrapper, ThankyouSection, ThankyouText, ThankyouWrapper, TotaltextSection, TotalValue } from './style'
import { Bodywrapper, Cartinfo, SubSectionWrapper, CartText, PriceSection, FormText, Header, Image } from "../CheckOut/style"
import Link from "next/link"
import { CheckoutItem } from "../CheckOut"
import { ContinueShpping } from '../Nav/style'
import { Controls, PlayState, Tween } from 'react-gsap';
import Confetti from 'react-confetti'
import { useSelector, useDispatch } from "react-redux"

import { Checkoutitem, Cartimage, SingleAmount, ItemName, ItemDescription } from "../CheckOut/style"



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

const Index = () => {
    const order = useSelector(state => state.checkout.order.createOrder)
    // alert(order.createOrder.orderId)

    try {
        return (
            <SummaryWrapper>
                {!order.orderId ?
                    ''
                    :
                    <>
                        <Confetti
                            width={600}
                            height={820}
                        ></Confetti>
                        <Header>
                            <Link href="/">
                                <Image src="/Icons/logo.svg" />
                            </Link>
                        </Header>
                        <Bodywrapper>
                            <ThankyouSection>
                                <ThankyouWrapper>
                                    <Tween to={{ x: '300px', rotation: 360 }} duration={4} ease="back.out(1.7)">
                                        <Image src="/Icons/success.svg" style={{ height: '70px' }} />
                                    </Tween>
                                    <ThankyouText>Thank you for shoping with Shoplly.</ThankyouText>
                                    Your orders are on the way.
                                    <Link href="/">
                                        <Backbtn>BACK TO SHOPPING</Backbtn>
                                    </Link>
                                </ThankyouWrapper>
                            </ThankyouSection>
                            <SummarySection>
                                <FormText>
                                    Order Summary
                                </FormText>
                                <SubSectionWrapper marginTop="5px" style={{ width: '50%' }}>
                                    <CartText>
                                        ORDER NO
                                    </CartText>
                                    <PriceSection>
                                        {order?.orderId.slice(0, 5)}...
                                    </PriceSection>
                                </SubSectionWrapper>
                                <SubSectionWrapper marginTop="-15px" style={{ width: '60%' }}>
                                    <CartText>
                                        EST DELIVERY DATE
                                    </CartText>
                                    <PriceSection style={{ display: 'flex', width: '30%', textAlign: 'left', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                        {order.deliveryDate}
                                    </PriceSection>
                                </SubSectionWrapper>
                                <SubSectionWrapper marginTop="-25px" style={{ width: '70%', borderBottom: "1px solid lightgray", paddingBottom: '20px' }}>
                                    <CartText style={{ display: 'flex', flexWrap: 'noWrap', textAlign: 'left' }}>
                                        SHIPPING DETAILS
                                    </CartText>
                                    <PriceSection style={{ display: 'flex', width: '140px', alignItems: 'left', marginRight: '38px', marginTop: '30px', textTransform: 'uppercase' }}>

                                        {order.customerFullName} {order.customerAddress1}, {order.customerCity} {order.country}
                                    </PriceSection>
                                </SubSectionWrapper>
                                <TotaltextSection>
                                    {/* <div className=""></div> */}
                                    <CartText style={{ marginLeft: "65px" }}>TOTAL</CartText>
                                    <PriceSection>$4507</PriceSection>
                                </TotaltextSection>
                                <Cartinfo>
                                    {order.orderItems.map((item) => {
                                        return (
                                            // <CheckoutItem key={item.amount} item={item.product} />
                                            // <>
                                            <Checkoutitem key={item.name}>
                                                <Cartimage style={{ width: '90px', height: '90px' }} src={item.product.images[0].url} />
                                                <SingleAmount>{item.quantity}</SingleAmount>
                                                <div className="" style={{ width: '100%', marginLeft: 52 }}>
                                                    <ItemName>{item.product.name}</ItemName>
                                                    <ItemDescription>{item.product.description}</ItemDescription>
                                                </div>
                                                <PriceSection>
                                                    <p>${item.product.price}</p>
                                                </PriceSection>
                                            </Checkoutitem>
                                            // </>
                                        )
                                    })}
                                </Cartinfo>
                            </SummarySection>
                        </Bodywrapper>
                    </>
                }

            </SummaryWrapper>
        )
        
    } catch (error) {
        return (
            <p>{ error.message }</p>
        )
    }
    
}

export default Index