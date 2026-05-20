import styled from "styled-components"

export const MainContainer=styled.div`
    width:100%;  
   
`;

export const FAQsHeader=styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const FAQsLogo=styled.div`
    h1{
        margin:0;
        font-size:1.6rem;
        
    }
`;

export const FAQsButtonContainer=styled.div`
    display:flex;
    gap:5px;

    @media(max-width:768px){
       display:none;
    }
`;



export const FAQsButton=styled.button`
    padding: 8px 14px;
    border: none;
    border-radius: 0px;
    cursor: pointer;
    background: ${(p)=>p.theme.colors.border};
    color: ${(p)=>p.theme.colors.text};
    font-weight:600;

    &.active{
        background:${(p)=>p.theme.colors.accent};
        color:${(p)=>p.theme.colors.surface};
    }

    &:hover{
        background:${(p)=>p.theme.colors.accent};
        color:${(p)=>p.theme.colors.text};
    }
    
`
export const ContentContainer=styled.div`
    display:flex;
    gap:18px;
`;



export const DetailsButton=styled.div` 
    display:flex;
    flex-direction:column;
    gap:10px;
    background-color:${(p)=>p.theme.colors.surface};
    
     @media(max-width:768px){
        display:none;
    }
`;

export const MenuButton=styled.div`
     background:none;
        border:1px solid rgb(226, 232, 240) ;
        color:${(p)=>p.theme.colors.text};
        font-weight:500;
        padding: 12px 16px;
        
        &.active{
            background:${(p)=>p.theme.colors.accent };
            color: rgb(255, 255, 255);
        } 
            
        &:hover{
            background: rgb(0, 102, 102);
            color: rgb(255, 255, 255);
            cursor:pointer;
        }
   
`

export const DescriptionContainer=styled.div`
    flex:1;
    padding: 24px;
    background:${(p)=>p.theme.colors.background}; 
`
export const Description=styled.p`
    line-height: 1.8;
    font-size:16px;
     color:${(p)=>p.theme.colors.text};
`
export const ViewQuestionButton=styled.button`
    display:none;

    @media(max-width:768px){
        display:inline-block;
        padding: 8px 14px;
        border: none;
        border-radius:8px;
        font-weight:600;

        background:  ${(p)=>p.theme.colors.accent};
        color: rgb(255, 255, 255);
        cursor: pointer;
    }
`
export const MobileBackDropOverlay=styled.div`
    display:none;
    
    @media(max-width:768px){
        display:block;
        position:absolute;
        top:0;
        left:0;
        bottom:0; 
        width:70%;
        diplay:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border-right:1px solid ${(p)=>p.theme.colors.primary};
        background-color:${(p)=>p.theme.colors.surface};
} 
`;
export const TabHeader=styled.div`

    display:flex;
    justify-content:space-between;
    align-items:center;
     padding:12px 16px;
    Strong{
    font-size: 1.3em;
    color:${(p)=>p.theme.colors.text};
    }

`;

export const CloseIcon=styled.button` 
    padding: 0.3rem;
    padding-bottom:0.4rem;
    color:${(p)=>p.theme.colors.accent};
    cursor:pointer;
    background-color:${(p)=>p.theme.colors.border};
    font-size: 12px;
    font-weight:bold;
    border:none;
    border-radius:0.3rem;
    transition:all .2s ease;
    &:hover{
        background-color:${(p)=>p.theme.colors.accent};
        color:${(p)=>p.theme.colors.surface};
    }
`;

export const TabButtonContainer=styled.div`
    display:none;
    
    @media(max-width:768px){
        width:100%;
        display:flex;
        flex-direction:column;
        gap:10px;
    }
`;

export const TabButton=styled.button`
    @media(max-width:768px){
    text-align:left;
    padding:12px 16px;
    background-color:${(p)=>p.theme.colors.surface};
    color:${(p)=>p.theme.colors.text};
    border:1px solid ${(p)=>p.theme.colors.border};
    font-weight:500;
    transition: background-color .2s ease, transform .15s ease;

    &.active{
        background-color:${(p)=>p.theme.colors.accent};
        color:${(p)=>p.theme.colors.surface};
    }
     &:hover{
        background-color:${(p)=>p.theme.colors.accent};
        color:${(p)=>p.theme.colors.surface};
        cursor:pointer;
    }    
}
`;

export const FAQBackDrop=styled.div`
@media(max-width:768px){
        display:block;
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        width:100%;
        height:100%;    
        background:rgba(0,0,0,0.3); 
}
`;