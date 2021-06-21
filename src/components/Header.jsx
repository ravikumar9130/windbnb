import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Right>
            <Logo src="/triangleLogo.png" alt="logo" />
            <p><b>windbnb</b></p>
            </Right>
            <Left>
                <div>
                <input type="text" name="text" id="input1" value='Helsinki, Finland' placeholder="hello" />
                <input type="text" name="text" id="input2" placeholder="Add guests" />
                    <button>icon</button>
             </div>
            </Left>
        </Nav>
    )
}

export default Header


const Nav = styled.div`
height :100px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Logo = styled.img`
width: 100%;
height: 100%;
padding: 3px 5px 0 0;
`;
const Right = styled.div`
display: flex;
padding-left: 3em ;

p{
    color: #EB5757;
    font-weight: 600;
}
`;

const Left = styled.div`
display: flex;
align-items: center;
margin-right: 3em ;
   #input1{
    border:none;
    box-shadow: 0px 1px 6px 0px #0000001A;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding-top:10px ;
    padding-bottom:10px ;
    
    text-align: center;
}
   #input2{
    border:none;
    box-shadow: 0px 1px 6px 0px #0000001A;
    
    padding-top:10px ;
    padding-bottom:10px ;
    
    text-align: center;
}


`;