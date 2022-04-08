import Link from 'next/link';
import React from 'react'
import Checkout from "../CheckOut"
import { LogoWrapper, SideCartImage, SidebarWrapper, Nav, Navigations, NaviationUl, NavWrapper, ProfileSection, ShopBag, Image, CartValue, CartImage, SidebarTop, SidebarBody, SidebarFooter, CloseSidebar, CloseCartvalue, SidebarTitle, CartItemwrapper, CartsContainer, CartLeft, CartRight, CartTitle, CartDescription, CartInfo, Icon, CartItemBottom, CartPrice, CartItemAmountContainer, Amount, TaxSection, TaxText, TotalValue, BottonsSection, ContinueShpping, CheckOut } from "./style"

import { useSelector, useDispatch } from 'react-redux'

import { increase, decrease, remove } from "../../features/cart/cartSclice"


export const openNav = () => {
  document.getElementById("mySidenav").style.width = "750px";
  document.getElementById("mySidenav").style.zIndex = "10000"
  // document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.body.style.zIndex = -10;

  document.getElementById("right").style.zIndex = -10;
  document.getElementById("finput").style.zIndex = -10;

  let finputs = document.querySelectorAll("#finput");

  for (let i = 0; i < finputs.length; i++) {
    finputs[i].style.zIndex = -10;
  }

}


/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = '#f0f5f1';

  document.getElementById("right").style.zIndex = 0;
  document.getElementById("finput").style.zIndex = 0;

  let finputs = document.querySelectorAll("#finput");

  for (let i = 0; i < finputs.length; i++) {
    finputs[i].style.zIndex = 0;
  }
  document.body.style.zIndex = 0;
}


// function openCheckout() {

//   document.getElementById("mySidenav").style.width = "100%";
//   document.getElementById("mySidenav").style.zIndex = "10000"
//   let sidebarItems = document.querySelectorAll("#sidebarMain")

//   for (let i = 0; i < sidebarItems.length; i++) {
//     sidebarItems[i].style.display = "none"
//   }
//   // document.getElementById("checkout").style.display = "block"
//   document.getElementById("checkout-page").style.width = "100%"
//   document.getElementById("checkout-page").style.height = "100%"
//   document.getElementById("checkout-page").display = "flex"
//   document.getElementById("mySidenav").innerHTML += document.getElementById("checkout-page").innerHTML





// }

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

export const CartItem = ({ item, img }) => {
  const { name, image, price, description, amount } = item
  const dispatch = useDispatch()
  return (
    <CartItemwrapper>
      
      <CartLeft>
        <SideCartImage src={image || img} style={{height: '100px'}}/>

      </CartLeft>
      <CartRight>
        <CartInfo>
          <CartTitle>{name}</CartTitle>
          <CartDescription>{description}</CartDescription>
          <CartItemBottom>
            <CartPrice>${price}</CartPrice>
            <CartItemAmountContainer>
              <Icon onClick={() => dispatch(decrease(name))} src="/Icons/minus.svg" width="20" height="20" />
              <Amount>{amount}</Amount>
              <Icon onClick={() => dispatch(increase(name))} src="/Icons/add.svg" width="20" height="20" />
            </CartItemAmountContainer>
          </CartItemBottom>
        </CartInfo>
        <Icon onClick={() => dispatch(remove(name))} src="/Icons/remove.svg" width="27" height="27" />
      </CartRight>
    </CartItemwrapper>
  )


}


export const SideNav = () => {
  const Items = useSelector(state => state.cart.cartItems)
  const total = useSelector(state => state.cart.total)
  const CartItems = useSelector(state => state.cart.cartItems.length)
  return (
    <>
      <SidebarWrapper id="mySidenav">
        {/* <span id="sidebarMain"> */}


        <SidebarTop id="mySidenav">
          <CloseSidebar onClick={() => closeNav()}>
            Close
            <CloseCartvalue>{ CartItems}</CloseCartvalue>
          </CloseSidebar>
        </SidebarTop>
        <SidebarBody id="sidebarMain">
          <SidebarTitle>Order Summary</SidebarTitle>
          <CartsContainer>
            {Items.map((item) => {
              return (
                <CartItem key={item.name} item={item} />
              )
            })}

          </CartsContainer>
        </SidebarBody>
        <SidebarFooter id="sidebarMain">
          <TaxSection>
            <TaxText>TOTALINCL. TAX</TaxText>
            <TotalValue>${total}</TotalValue>
          </TaxSection>
          <BottonsSection>
            <ContinueShpping onClick={() => closeNav()}>Continue Shopping</ContinueShpping>
            <Link href="/checkout">
            <CheckOut onClick={() => closeNav()}>Proceed to checkout</CheckOut>
            </Link>
          </BottonsSection>
        </SidebarFooter>

        {/* </span> */}
      </SidebarWrapper>
      
    </>
  )
}

const index = () => {

  const CartItems = useSelector(state => state.cart.cartItems.length)
  return (
    <>

      <NavWrapper>
        <LogoWrapper>
          <img src="/Icons/logo.svg" alt="" />
        </LogoWrapper>
        <Navigations>
          <NaviationUl>
            <Nav>Home</Nav>
            <Nav active>Products</Nav>
            <Nav>Contact</Nav>
            <Nav>About</Nav>
          </NaviationUl>
        </Navigations>
        <ProfileSection>
          <ShopBag onClick={() => openNav()}>
            {CartItems > 0 ? <CartValue>{CartItems}</CartValue> : ''}
            
            <CartImage src="./Icons/bag.svg" />
          </ShopBag>
          <Image src="https://picsum.photos/200/300" />
        </ProfileSection>
      </NavWrapper>
      <SideNav />
    </>
  )
}

export default index