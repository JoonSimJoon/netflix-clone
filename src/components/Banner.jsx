import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    height:68px;
    width:100vw;
`
const Logo = styled.img`
    height:100%;
`
const NavText = styled.ul`
 display:flex;
`
const NavTextItem = styled.li`

`

const NavIcon = styled.ul`

`
const NavIconItem = styled.li`

`

const Banner = (props)=>{
    return(
        <React.Fragment>
            <Wrapper>
                <Logo src="https://cdn.pixelprivacy.com/wp-content/uploads/2017/12/Netflix-Logo-1024x277.png"></Logo>
                <a href=""></a>
                <NavText>
                    <NavTextItem>홈</NavTextItem>
                    <NavTextItem>TV 프로그램</NavTextItem>
                    <NavTextItem>영화</NavTextItem>
                    <NavTextItem>최신 등록 프로그램</NavTextItem>
                </NavText>
                <NavIcon>
                    <NavIconItem>
                        <img src=""/>
                    </NavIconItem>

                </NavIcon>
            </Wrapper>
        </React.Fragment>
    )
}
export default Banner;