import React from 'react'
import { CloseIcon, MobileBackDropOverlay, TabButton, TabButtonContainer, TabHeader } from '../styles/FAQs.styles'

const FAQsTabs = ({closetab,open, changeMenu,id}) => {
  return (
    <>
        <MobileBackDropOverlay open={open} >
            <TabHeader>
                <strong>FAQ Topics</strong>
                <CloseIcon onClick={closetab}><i className="fa-solid fa-x"></i></CloseIcon>   
            </TabHeader>
            <TabButtonContainer>
                <TabButton className={id==='orders'?"active":""} onClick={()=>{changeMenu('orders');closetab()}}>Order & Purchasing</TabButton>
                <TabButton className={id==='payments'?"active":""} onClick={()=>{changeMenu('payments');closetab()}}>Payments & Billing</TabButton>
                <TabButton className={id==='refunds'?"active":""}onClick={()=>{changeMenu('refunds');closetab()}}>Refunds & Cancellations</TabButton>
            </TabButtonContainer>

        </MobileBackDropOverlay>
    </>
  )
}

export default FAQsTabs
