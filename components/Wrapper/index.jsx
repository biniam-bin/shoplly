import React from 'react'
import { Footer, FooterContainer } from './style'
const index = ({ Component, pageProps }) => {
    return (
        <div style={{ width: '100%' }}>
            <Component {...pageProps} />
            {/* <Footer>
                <FooterContainer>
                    <span>Returned Policy</span>
                    <span>Privacy Policy</span>
                    <span>Terms of service</span>
                </FooterContainer>
            </Footer> */}
        </div>
    )
}

export default index