import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styled from "styled-components";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Avatar } from "@material-ui/core";
import moment from "moment";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ReviewWrite from "./ReviewWrite";
const UserReview = ({
  id,
  dogName,
  dogImage,
  reviewContent,
  hospitalRate,
  handleDeleteReview,
  handleUpdateReview,
  modifiedAt,
}) => {
  //임시 닉네임임, 리뷰 닉네임이 이거랑 다르면 수정 / 삭제 비노출
  // review정보에 userId밖에 없어서 userName이랑 비교 불가
  const user = useSelector((state) => state.user.user);
  const hospitalId = useSelector((state) => state.hospital.hospital.hospitalId);
  const my_nick_name = user?.dogName ? user?.dogName : "2";
  const history = useHistory();
  //비활성화 + 활성화된 모든 별 갯수
  const totalStarCount = 5;

  //활성화된 별 갯수
  const starCount = hospitalRate ? hospitalRate : 0; //나중에 여기에 평점값 출력

  //비활성화된 별 갯수
  const notValuedStartCount = totalStarCount - starCount;

  const modiDate = moment(modifiedAt).format("YYYY-MM-DD HH:mm");
  return (
    <>
      <ReviewContainer>
        <ProfileBox>
          {dogImage ? (
            <Avatar
              alt="Remy Sharp"
              src={dogImage}
              style={{ width: "44px", height: "44px" }}

              // className={classes.small}
            />
          ) : (
            <AccountCircleIcon
              style={{ fontSize: "3.3rem" }}
            ></AccountCircleIcon>
          )}

          <NickName>{dogName}</NickName>
        </ProfileBox>
        <ReviewInfo>
          <StarAndControll>
            <StarBox>
              {[...Array(starCount)].map((n, index) => {
                return (
                  <StarIcon key={index} style={{ color: "#ECBA11" }}></StarIcon>
                );
              })}
              {[...Array(notValuedStartCount)].map((n, index) => {
                return (
                  <StarBorderIcon
                    style={{ color: "#ECBA11" }}
                    key={index}
                    onClick={() => {}}
                  ></StarBorderIcon>
                );
              })}
            </StarBox>
            {my_nick_name === dogName && (
              <ControllBox>
                <span
                  onClick={() =>
                    history.push({
                      pathname: `/review/update/${id}`,
                      state: {
                        hospitalId: hospitalId,
                      },
                    })
                  }
                >
                  수정{" "}
                </span>
                <span>/</span>
                <span onClick={() => handleDeleteReview(id)}> 삭제</span>
              </ControllBox>
            )}
          </StarAndControll>
          <Content>{reviewContent}</Content>
          <p>{modiDate}</p>
        </ReviewInfo>
      </ReviewContainer>
    </>
  );
};

const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  justify-content: space-between;
  align-items: center;
`;

const NickName = styled.div`
  margin-top: 3px;
`;

const ReviewInfo = styled.div`
  width: 75%;
`;

const StarAndControll = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StarBox = styled.div``;
const ControllBox = styled.div``;
const Content = styled.div``;

export default UserReview;
