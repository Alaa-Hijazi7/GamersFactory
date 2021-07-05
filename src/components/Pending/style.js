import styled from "styled-components";

export const PendingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  :last-child {
    margin-bottom: 0;
  }
  cursor: pointer;
  img {
    width: 70px;
    height: 70px;
    border: 8px solid #222C43;
    border-radius: 10px;
    margin-inline-end: 1rem;
  }
  > div {
    display: flex;
    align-items: center;
    h6 {
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
    }
  }
  .actions {
    gap: 0.5rem;
    .iconify {
      color: #3B455A;
      font-size: 2rem;
      background-color: rgba(16, 20, 29, 0.35);
      border-radius: 10px;
      transition: color 0.2s;
      :last-child {
        font-size: 2rem;
        :hover {
          color: #FF4848;
          transition: color 0.2s;
        }
      }
      :first-child {
        padding: 5px;
        font-size: 2rem;
        :hover {
          color: #07FF6A;
          transition: color 0.2s;
        }
      }
    }
  }
  @media screen and (max-width: 1025px){
    img {
      width: 59px;
      height: 59px;
    }
  }
`;
