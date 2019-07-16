import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import StripeCheckout from 'react-stripe-checkout'
import "./Header.css"
import logo from "../../assets/images/logo-designcode.svg"

const Header = ({ siteTitle }) => {
  const [ hasScrolled, setHasScrolled ] = useState(false)
  const [ isDark, setIsDark ] = useState(false)

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollTop = window.pageYOffset
      if (scrollTop > 50) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
  })

  const handlePurchase = token => {
    const amount = 5000
    const description = "Cold shoulder top"
    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount,
    }

    fetch('http//localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }
  
  return (
    <div className={hasScrolled ? "Header HeaderScrolled" : "Header"}>
      <div className="HeaderGroup">
        <Link to="/"><img src={logo} width="30" /></Link>
        <Link to="/courses">Design</Link>
        <Link to="/courses">Developement</Link>
        <Link to="/tutorials">Integration</Link>
        <StripeCheckout
          amount={5000}
          image='https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          token={handlePurchase}
          stripeKey="pk_test_QmWidhiAMFOTTvuH3XHa4aGw00dne0v5fB"
        >
          <button>Buy</button>
        </StripeCheckout>
        {/* <button
          onClick={() => setIsDark(!isDark)}
        >Dark</button> */}
      </div>
    </div>
  ) 
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
