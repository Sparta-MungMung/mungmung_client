import { css } from "styled-components";

const Button = css`
  font-size: 13px;
  border: none;
  border-radius: 5px;
  color: white;
  text-align: center;
  box-sizing: border-box;
  padding: 12px 16px;
  font-weight: bold;
  font-family: "Poor Story", cursive;
`;

export const ThemeBtnColor = css`
  background-color: ${(props) =>
    props.disabled ? "rgb(114 , 203, 128, 0.7)" : "rgb(114, 203, 128)"};
  ${Button}
`;

export const NormalBtnColor = css`
  background-color: rgb(94, 94, 94);
  ${Button}
`;

export const PageTitle = css`
  font-size: 2.4em;
`;

export const InputStyle = css`
  border-radius: 5px;
  box-sizing: border-box;
  padding: 12px;
  border: 1px solid gray;
`;

export const NormalFooter = css`
  background-color: rgb(208 208 208);
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  font-size: 40px;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (min-width: 450px) {
    width: 450px;
    margin: 0 auto;
  }
`;

export const IconStyle = {
  width: "50px",
  height: "50px",
  color: "white",
  cursor: "pointer",
  border: "2px solid white",
  borderRadius: "50%",
  boxSizing: "border-box",
  padding: "5px",
};

export const LogoStyle = css`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 10px;
  left: 10px;
`;
