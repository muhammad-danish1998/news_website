import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import UserProvider from '../contexts/UserContext'
import Messenge from "react-messenger-customer-chat";

const PageWrapper = ({ children, className, loginRequired }) => {
  const div = (
    <div className={className}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
      </Head>
      <Header />
      <Messenge
        pageId="115573946975832" 
        appId="368944684484538"  
        language="ar_AR"  
        />
      {children}
      <Footer />
    </div>
  )
  if (loginRequired) return (
    <UserProvider active={loginRequired}>
      {div}
    </UserProvider>
  )
  else return div;
}

export default PageWrapper
