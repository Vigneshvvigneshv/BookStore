import React, { useState } from 'react'
import Layout from '../components/Layout'
import { ContentContainer, Description, DescriptionContainer, DetailsButton, FAQBackDrop, FAQsButton, FAQsButtonContainer, FAQsHeader, FAQsLogo, MainContainer,MenuButton, ViewQuestionButton} from '../styles/FAQs.styles'
import { faqs } from '../data/faqs'
import FAQsTabs from './FAQsTabs'

const FAQs = () => {
    const[id,setId]=useState('orders');
    const[change,setChange]=useState("vertical");
    const[showMenu,setShowMenu]=useState(false);

    const faq=faqs.find((p)=>{
        return p.id===id;
    });

    function menuId(id){
        setId(id);
    }

    function closeTab(){
        setShowMenu(!showMenu);
    }
  return (
    <Layout >     
        <MainContainer open={showMenu} >
          <FAQsHeader>
              <FAQsLogo>
                  <h1>Frequently Asked Questions</h1>
                  <p>{faq.title}</p>
              </FAQsLogo>
             
              <FAQsButtonContainer>
                  <FAQsButton className={change==='vertical'?"active":""} onClick={()=>setChange("vertical")}>Vertical</FAQsButton>
                  <FAQsButton className={change==='Horizontal'?"active":""} onClick={()=>setChange("Horizontal")}>Horizontal</FAQsButton>
              </FAQsButtonContainer> 

               <ViewQuestionButton onClick={()=>setShowMenu(!showMenu)}>ViewQuestion</ViewQuestionButton>       
          </FAQsHeader>
        

           
          <ContentContainer style={{flexDirection:change==='Horizontal'?"column":"row"}}>
              <DetailsButton open={showMenu} style={{flexDirection:change==='Horizontal'?"row":"column"}}>                
                  <MenuButton className={id==='orders'?"active":""} onClick={()=>menuId('orders')}>Order & Purchasing</MenuButton>
                  <MenuButton className={id==='payments'?"active":""}  onClick={()=>menuId('payments')}>Payments & Billing</MenuButton>
                  <MenuButton className={id==='refunds'?"active":""} onClick={()=>menuId('refunds')}>Refunds & Cancellations</MenuButton>
              </DetailsButton>

              <DescriptionContainer>
                  <Description>{faq.description}</Description>
                  <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum omnis cum quis vitae ducimus. Alias debitis distinctio esse sit molestias enim veritatis explicabo repellat, commodi odit a nemo dolorum vel.
                  Est quis sit velit modi in nisi, quae totam dolor voluptates commodi inventore qui voluptatibus reiciendis ipsum quam corporis dignissimos! Dolore, voluptas natus provident debitis quam culpa eius saepe dolor?
                  Rerum similique dolorem amet ullam officiis exercitationem, itaque enim sequi vel qui mollitia adipisci quos optio, eveniet deserunt omnis deleniti? Fuga commodi quibusdam laudantium eaque, voluptas velit suscipit quos nemo!
                  Inventore a labore perspiciatis, quod repellendus laboriosam cumque odit, voluptatibus eaque corrupti necessitatibus commodi reiciendis sunt! Dolorum unde magni assumenda voluptas! Qui aperiam reprehenderit harum quaerat aut laborum, nihil pariatur!</Description>
              </DescriptionContainer>              
          </ContentContainer>

        </MainContainer>
        {showMenu &&  <FAQBackDrop>
            <FAQsTabs id={id} closetab={closeTab}  changeMenu={menuId}  ></FAQsTabs>
            </FAQBackDrop>}
    </Layout>
    
  )
}

export default FAQs
