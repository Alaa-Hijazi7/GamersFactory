import styled from "styled-components";

export const Section = styled.section`
  overflow: hidden;
  display: flex;
  gap: 1%;
`;

export const AsideFriend = styled.aside`
  @media screen and (max-width: 769px) {
    ${props => props.open || `
      position: absolute;
      left: -700px;
    `}
  }
  ${props => props.open && `
    position: absolute;
    z-index: 9;
    width: 80% !important;
    left: 0;
    transition: left 0.2s;
  `}
  transition: left 0.2s ease;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: #151C2C;
  color: white;
  padding: 3.0625rem;
  border-radius: 0px 30px 0px 0px;
  height: 100vh;
  width: 30%;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #20293F;
    padding-bottom: 2rem;
    img {
      width: 70px;
      height: 70px;
      border: 8px solid #222C43;
      background-color: #222C43;
      border-radius: 10px;
      margin-inline-end: 1rem;
    }
    > div {
      display: flex;
    }
    .edit {
      cursor: pointer;
    }
  }
  h5 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 41px;
  }
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
  h3 {
    font-weight: 500;
    font-size: 10px;
    line-height: 28px;
    width: 10px;
    color: #3B455A;
    display: flex;
    flex-wrap: wrap;
  }
  .direct-messages__container {
    margin-top: 30px;
    padding-inline-end: 1rem;
    height: 35vh;
    ::-webkit-scrollbar {
      display: none;
    }
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .pending__container {
    margin-top: 30px;
    padding-inline-end: 1rem;
    height: 35vh;
    ::-webkit-scrollbar {
      display: none;
    }
    overflow-y: scroll;
    overflow-x: hidden;
  }
  @media screen and (max-width: 1025px) {
    padding: 1rem;
    nav {
      padding-bottom: 1rem;
      img {
        width: 59px;
        height: 59px;
      }
    }
    h2 {
      font-size: 15px;
    }
    h5 {
      margin-top: 1.5rem;
    }
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const MainSection = styled.div`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 2rem;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
  width: 45%;
  background: linear-gradient(180deg, #151C2C 0%, #10141D 118.25%);
  border-radius: 30px;
  h1 {
    margin-top: 1.5rem;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 75px;
    background: -webkit-linear-gradient(91.41deg, #1565D8 -5.62%, #6CA9FF 136.1%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ul {
    margin-top: 1rem;
    list-style: none;
    display: flex;
    gap: 1rem;
    color: white;
    overflow: hidden;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    padding-top: 1rem;
    li {
      min-width: 20px;
      cursor: pointer;
      color: #3B455A;
      transition: all 0.2s;
      :hover {
        color: white;
        transition: all 0.2s;
        transform: translateY(-10px);
        ::after {
          content: "";
          position: absolute;
          width: 18px;
          height: 2px;
          left: 35%;
          top: 30px;
          background: #49A4FC;
          -webkit-filter: blur(2px);
          filter: blur(2px);
        }
      }
    }
  }
  h2 {
    color: white;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .news-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  @media screen and (max-width: 1025px){
    h1 {
      font-size: 35px;
    }
  }
`;
export const SingleNewsStyle = styled.figure`
  width: 100%;
  cursor: pointer;
  display: flex;
  border-radius: 13px;
  padding: 1rem;
  background-color: #10141D;
  color: white;
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
  }
  p {
    font-style: inherit;
    font-weight: 300;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: 1px;
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  :hover {
    .background-image {
      transform: translate(-2rem, -3rem);
      box-shadow: 10px 10px 10px 4pt #${props => props.randomColor};
      transition: all 0.2s;
    }
  }
  .background-image {
    ${props => props.background && `background: url(${props.background}) no-repeat center center`};
    background-size: cover;
    width: 100%;
    height: 180px;
    border-radius: 13px;
    box-shadow: 3px 3px 1px 1pt #${props => props.randomColor};
    transform: translate(-1rem, -2rem);
    transition: all 0.2s;
  }
`;

export const GroupSection = styled.div`
  height: 100vh;
  @media screen and (max-width: 769px) {
    ${props => props.open || `
      position: absolute;
      right: -700px;
      display: none;
    `}
  }
  ${props => props.open && `
    display: block;
    position: absolute;
    z-index: 9;
    width: 80% !important;
    right: 0;
    transition: right 0.2s;
  `}
  transition: right 0.2s ease;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 2rem;
  width: 25%;
  background: #1d2433;
  border-radius: 30px 0px 0px 0px;
  color: white;
  h5 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 41px;
  }
  .create-new-group {
    position: absolute;
    right: 20px;
    .iconify {
      cursor :pointer;
      font-size: 1.5rem;
      color: #6CA9FF;
    }
  }
`;

export const SingleGroup = styled.div`
  cursor: pointer;
  margin-top: 2rem;
  background: ${props => props.selected ? "linear-gradient(59.21deg, #9144DE 33.2%, #BD7AFF 146.1%)" : "#10141D"};
  border-radius: 14px;
  padding: 1rem;
  transition: all 0.2s;
  border-color: #192131;
  transition: border 0.2s;
  :hover {
    transition: border 0.2s;
    border-bottom: 4px solid #192131;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 6px;
  }
  p {
    font-style: inherit;
    font-size: 15px;
    line-height: 15px;
    color: #3B455A;
  }
`;
