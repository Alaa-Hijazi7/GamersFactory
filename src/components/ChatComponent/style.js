import styled from "styled-components";

export const DirectChatBox = styled.div`
display: flex;
flex-direction: column;
.messages-container {
  ::-webkit-scrollbar-track {
    background-color: #374463;
    border-radius: 10px;
  }
  overflow-y: scroll;
  margin-top: 1rem;
  height: 50vh;
  background: linear-gradient(180deg, #151C2C -4.87%, rgba(21, 28, 44, 0) 88.69%);
}
> div:first-child {
  cursor: pointer;
  margin-top: 1rem;
  margin-inline-start: 0.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  transition: gap 0.2s;
  :hover {
    transition: gap 0.2s;
    gap: 1.5rem;
   .iconify {
    color: white;
   }
  }
  .iconify {
    border-radius: 6px;
    font-size: 1.5rem;
    color: #2D3649;
    background-color: #131927;
  }
}
.message-to {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  h5 {
    margin: 0;
  }
}
.messages {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;
  > div {
    display: flex;
  }
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  h2 {
    margin-inline-start: 0.7rem;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    span {
      margin-inline-start: 0.5rem;
      color: #3B455a;
      font-size: 9px;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
      color: #4B5569;
    }
  }
}
form {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
  .iconify {
    cursor: pointer;
    color: #232D44;
    font-size: 3rem;
    border-radius: 9px;
    padding: 0.5rem;
    background-color: #1A2235;
    transition: all 0.2s;
    :hover {
      color: white;
      background-color: #232D44;
      transition: all 0.2s;
    }
  }
}
.send-message__input {
  width: 90%;
  background-color: #1A2235;
  padding: 1rem;
  border: none;
  border-radius: 9px;
  color: white;
  transition: all 0.2s;
  ::placeholder {
    color: #324060;
    font-weight: 400;
  }
  :focus {
    box-shadow: 0 0 0 3pt #76757371;
    transition: all 0.2s;
  }
}
`;