import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ContentWrapper from '../contentWrapper/contentWrapper';

const Header = () => {
  const [show,setShow]=useState('top');
  const[lastScrollY,setLastScrollY]=useState(0);
  const[mobileMenu,setMobileMenu]=useState(false);
  const[query,setQuery]=useState('');
  const[showSearch,setShowSearch]=useState('');
  const navigate=useNavigate();
  const location=useLocation();
  return (
    <header>
      <ContentWrapper>
        
      </ContentWrapper>
    </header>
  )
}

export default Header