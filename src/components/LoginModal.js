import React from 'react';
import '../App.css'
import styled from 'styled-components';


const LoginModal = (props) => {
   return (
      <ModalContainer>
         <div className='modalWrapper'>
            <ModalTitle>LOGIN</ModalTitle>

            <svg className='closeBtn' onClick={props.closedModal} style={{position: 'absolute', top: '20px', right: '20px'}} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
               <path d="M3.75553 0L0 3.75553L1.91772 5.67325L6.65874 10.4942L1.91772 15.2352L0 17.073L3.75553 20.9084L5.67325 18.9907L10.4942 14.1698L15.2352 18.9907L17.073 20.9084L20.9084 17.073L18.9907 15.2352L14.1698 10.4942L18.9907 5.67325L20.9084 3.75553L17.073 0L15.2352 1.91772L10.4942 6.65874L5.67325 1.91772L3.75553 0Z" fill="black"/>
            </svg>

            <StyledInput type='email' placeholder='이메일을 입력해주세요.'/>
            <StyledInput type='password' placeholder='비밀번호를 입력해주세요.'/>

            <StyledBtn style={{marginTop: '34px', background: '#FFE81B', color: '#000'}}>
            <img src={process.env.PUBLIC_URL + '/kakao.png'} style={{width:'32px', position:'absolute', top:'0', left:'0', margin:'10px 0 8px 10px'}}/>
            카카오 로그인</StyledBtn>
            <StyledBtn style={{background: '#FFFFFF', border:'1px solid #d9d9d9'}}>
            <img src={process.env.PUBLIC_URL + '/google.png'} style={{width:'27px', position:'absolute', top:'0', left:'0', margin:'12px 0 11px 10px'}} />
            Google 로그인</StyledBtn>
            <StyledBtn style={{marginTop: '34px', background: '#CF9FFF', color: '#fff'}}>로그인</StyledBtn>
            <StyledBtn style={{background: '#CF9FFF', color: '#fff'}}>회원가입</StyledBtn>
         </div>
      </ModalContainer>
   );
};

const ModalContainer = styled.div`
   z-index: 100;
   width: 100%;
   height: 100%;
   position: fixed;
   top: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: rgba(0,0,0, .5);
`

const ModalTitle = styled.h4`
   font-family: 'Bevan', serif;
   font-size: 48px;
   font-weight: bold;
   line-height: normal;
   background: linear-gradient(180deg, #AF60FF 0%, #FBDBFE 100%);
   background-clip: text;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   padding: 35px 0 0 0;
   cursor: default;
`

const StyledInput = styled.input`
   width: 368px;
   height: 50px;
   margin-top: 13px;
   padding: 0 16px;
   border-radius: 6px;
   border: 1px solid #d9d9d9;
   background: #fff;
   outline: none;
`

const StyledBtn = styled.button`
   position: relative;
   width: 368px;
   height: 50px;
   margin-top: 13px;
   border-radius: 6px;
   border: 0;
   font-size: 16px;
   font-weight: 600;
   cursor: pointer;
`

export default LoginModal;