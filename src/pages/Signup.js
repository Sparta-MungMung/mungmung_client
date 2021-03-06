import React, { useState } from "react";
import styled from "styled-components";
import { InputStyle, PageTitle, ThemeBtnColor } from "../common_css/style";
import signupLogo from "../image/logo3.jpeg";

import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { LogoStyle } from "../common_css/style";

const Signup = (props) => {
  //userName, dogName, password, confirmPassword
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [dog, setDog] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");
  const [pwdAlert, setPwdAlert] = useState(true);

  const checkPwd = (e) => {
    if (e.target.value.length >= 6) {
      setPwdAlert(false);
    } else if (e.target.value.length < 6) {
      setPwdAlert(true);
    }
  };

  const signup = () => {
    dispatch(userActions.signupDB(id, dog, pwd, pwdCheck));
    history.push("/");
  };

  return (
    <Container>
      <Title>
        {" "}
        <Logo src={signupLogo} />
        회원 가입
      </Title>
      <InputContainer>
        <label htmlFor="id">아이디</label>
        <Input
          id="id"
          type="text"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <label htmlFor="dogName">반려견 이름</label>
        <Input
          id="dogName"
          type="text"
          placeholder="반려견 이름을 입력해주세요"
          value={dog}
          onChange={(e) => {
            setDog(e.target.value);
          }}
        />
        <label htmlFor="pw">비밀번호</label>
        <PwdInput
          id="pw"
          type="password"
          placeholder="비밀번호를 6글자 이상 입력해주세요"
          value={pwd}
          onChange={(e) => {
            checkPwd(e);
            setPwd(e.target.value);
          }}
        />
        {pwdAlert ? (
          <Alert>비밀번호는 최소 6글자 이상이어야 합니다!</Alert>
        ) : (
          <Check>비밀번호로 사용 가능 합니다!</Check>
        )}
        <label htmlFor="pwCheck">비밀번호 체크</label>
        <Input
          id="pwCheck"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          value={pwdCheck}
          onChange={(e) => {
            setPwdCheck(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              signup();
            }
          }}
        />
      </InputContainer>
      <BtnContainer>
        <SignupBtn
          onClick={signup}
          disabled={
            id === "" || dog === "" || pwd === "" || pwdCheck === ""
              ? true
              : false
          }
        >
          회원가입 하기
        </SignupBtn>
      </BtnContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  ${LogoStyle};
`;

const InputContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  text-align: left;
  font-weight: bold;
`;

const Title = styled.h1`
  margin: 40px auto 30px auto;
  ${PageTitle}
`;
const Input = styled.input`
  margin: 10px 0 35px 0;
  ${InputStyle}

  @media screen and (max-width: 320px) {
    margin: 3px 0 25px 0;
  }
`;

const PwdInput = styled.input`
  margin: 10px 0 0px 0;
  ${InputStyle}

  @media screen and (max-width: 320px) {
    margin: 3px 0 0px 0;
  }
`;

const Alert = styled.p`
  color: red;
  font-size: 13px;
  margin-left: 5px;
`;

const Check = styled.p`
  color: rgb(114, 203, 128);
  font-size: 13px;
  margin-left: 5px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 50px;
`;

const SignupBtn = styled.button`
  width: 250px;
  margin: 0 auto;
  ${ThemeBtnColor}
`;

export default Signup;
