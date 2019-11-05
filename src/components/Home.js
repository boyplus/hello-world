import React from 'react'
import styled from 'styled-components'

const Paragraph1 = styled.p`
    font-size:24px;
    color:red;`

const Paragraph2 = styled(Paragraph1)`
    color:${props => props.color1}`





export default class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <Paragraph1>Hello</Paragraph1>
                <Paragraph2 color1="blue">Hello  asdgsadg</Paragraph2> 
                <img src="/images/{`${this.props.pic}`}.png" alt="logo 512" width="180px" class="img1"/>
                <Paragraph2 color1={`${this.props.name}`}>{this.props.kk}</Paragraph2>
                  {this.props.name} */}
                

            </div>
        )
    }
}