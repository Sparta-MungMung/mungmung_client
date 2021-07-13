import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { PageTitle, InputStyle, ThemeBtnColor } from "../common_css/style";

const Search = () => {
  const dogName = [
    {
      dogName : "루디",
    },
  ]
  return (
    <div>
      <Title><b>{dogName[0].dogName}</b>는 어디가 아픈가요?</Title>
      <Grid>
        <Input type="text" placeholder="내용을 입력해주세요"></Input>
        <Button>search</Button>
      </Grid>
      <Footer />
    </div>
  );
};

const Title = styled.h1`
  text-align: center;
  ${PageTitle};
`;

const Input = styled.input`
  ${InputStyle}
`;

const Button = styled.button`
  margin-left: 15px;
  text-align: center;
  ${ThemeBtnColor}
`;

const Grid = styled.div`
  padding: 80px;
  display: flex;
`;

export default Search;
