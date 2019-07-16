import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 30px 0;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
`

const Text = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 0 auto;
    max-width: 500px;
    text-align: center;
    color: #486791 !important;
`

const Button = styled.button`
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    font-size: 18px;
    font-weight: 600;
    padding: 16px 60px;
    border: none;
    border-radius: 30px;
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.5);
    justify-self: center;
    outline: none;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        cursor: pointer;
        box-shadow: 0px 20px 40px rgba(101, 41, 255, 0.5);
        transform: translateY(-3px);
    }
`

const  LinkGroup= styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    a {
        transition: 1s;
        justify-self: left;
    }

    a:hover {
        color: black;
        background: transparent;
    }
`

const CopyRight = styled.div`
    max-width: 500px;
    margin: 0px auto;
    color: #486791;
    padding: 0 20px;
    font-size: 12px;
`

const Footer = ({ children, links }) => (
    <FooterGroup>
        <Text>
            For more information about courses offered and suggestions on tutorials in demand contact us on our various handles. 
        </Text>
        <Button>Tweet</Button>
        <LinkGroup>
            {links.map(link => (
                <a href={link.node.url}>{link.node.title}</a>
            ))}
        </LinkGroup>
        <CopyRight>
            {children}
        </CopyRight>
    </FooterGroup>
)

export default Footer