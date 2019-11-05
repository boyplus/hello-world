import React from 'react'


const Paragraph1 =styled.p`
    font-size:24px;
    color:red;
    `


export default class Header extends React.Component{
    render(){
        return(
            <div>
                
                <Paragraph1>Hello</Paragraph1>>
                 {/* {this.props.header} */}
            </div>
        )
    }
}