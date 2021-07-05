import styled from "styled-components";

export const DirectMessagesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  cursor: pointer;
  > div {
    display: flex;
    align-items: center;
    h6 {
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
    }
    p {
      color: #3B455A;
      font-weight: 500;
      font-size: 19px;
      line-height: 28px;
    }
  }
  img {
    width: 70px;
    height: 70px;
    border: 8px solid #222C43;
    background-color: #222C43;
    border-radius: 10px;
    margin-inline-end: 1rem;
  }
  h6:last-child {
    color: #3B455A;
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
  }
  @media screen and (max-width: 1025px) {
    > div {
      h6 {
        font-size: 15px;
      }
      p {
        font-size: 15px;
      }
    }
    img {
      width: 59px;
      height: 59px;
    }
  }
`;