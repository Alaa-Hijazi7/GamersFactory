import styled from "styled-components";

export const MainNav = styled.nav`
  display: flex;
  justify-content: ${props => props.open ? "space-between" : "flex-end"};
  > div {
    position: relative;
    cursor: pointer;
    transition: opacity 0.2s;
    :hover {
      opacity: 0.8;
      transition: opacity 0.2s;
      .shadow {
        filter: blur(50px);
        transition: filter 0.2s;
      }
    }
  }
  .add-friend__btn {
    cursor: pointer;
    background: linear-gradient(90deg, #1565D8 -7.26%, #3889FE 140.6%);
    border: none;
    border-radius: 9px;
    padding: 0.7rem 1rem;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    z-index: 2;
  }
  .shadow {
    background: linear-gradient(91.41deg, #1565D8 -5.62%, #6CA9FF 136.1%);
    filter: blur(40px);
    border-radius: 9px;
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    transition: filter 0.2s;
    z-index: 1;
  }
  form {
    width: 50%;
    align-self: center;
    input {
      width: 100%;
      background-color: #1A2235;
      padding: 0.6rem;
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
  }
`;
