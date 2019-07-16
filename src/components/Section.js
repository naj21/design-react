import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`
    background: url(${props => props.image});
    background-size: cover;
    height: 720px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px; 
    position: relative;

    @media (max-width: 640px) {
        height: 820px;
    }
`

const SectionLogo = styled.img`
    align-self: bottom;
    width: 128px;
    margin: 0 auto;
    align-self: end;
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    grid-template-rows: auto 100%;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    font-size: 40px;
    color: white;
    line-height: 1.3;
    margin: 0;
    @media (max-width: 720px) {
        font-size: 30px;
    }
`

const SectionText = styled.p`
    color: white
`

const WaveBottom = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
`

const WaveTop = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    transform: rotate(180deg);
`

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /> </WaveBottom>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>
                {props.title}
            </SectionTitle>
            <SectionText>
                {props.text}
            </SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section