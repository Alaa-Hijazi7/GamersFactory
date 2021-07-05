import styled from "styled-components";
import backgroundRight from "../../assets/images/bg-image-1.png";
import backgroundLeft from "../../assets/images/bg-image-2.png";

export const Section = styled.section`
color: #FFFFFF;
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
}

.left {
  left: 0;
  background: url(${backgroundLeft}) no-repeat;
  background-size: cover;
  nav {
    position: absolute;
    left: 10%;
    top: 10%;
    img {
      width: 9rem;
      user-select: none;
      pointer-events: none;
    }
  }
  figure {
    font-size: 20px;
    figcaption {
      margin-top: 2rem;
      font-size: 15px;
    }
  }
  .centered {
    left: 40%;
  }
}

.right {
  right: 0;
  background: url(${backgroundRight}) no-repeat;
  background-color: #151C2C;
  background-size: cover;
  .centered {
    width: 60%;
    p {
      color: #384564;
      margin-top: 1rem;
    }
  }
  .line {
    background-color: #1C2537;
    height: 0.2rem;
    width: 100%;
    margin: 2rem 0;
  }
  .login-link {
    color: #4A597B;
    margin-top: 1rem;
    font-size: 15px;
    text-align: end;
    span {
      color: #1565D8;
      cursor: pointer;
    }
  }
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: start;
}
#register-gender__input {
  background-color: #1A2235;
  color: #324060;
  padding: 1rem;
  border: none;
  border-radius: 9px;
  option {
    color: white;
  }
}
#birthday {
  background-color: #1A2235;
  color: #324060;
  padding: 1rem;
  border: none;
  border-radius: 9px;
}
input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  border-radius: 4px;
  margin-right: 2px;
  opacity: 0.6;
  filter: invert(1.8);
}
.row {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  > select {
    width: 50%;
  }
  > input {
    width: 50%;
  }
}
.terms-div {
  margin-top: 1rem;
  margin-bottom: -1rem;
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
  align-items: center;
  label {
    cursor: pointer;
  }
}

.right nav {
  display: none;
}
@media screen and (max-width: 769px) {
  .left {
    .centered {
      display: none;
    }
  }
  .right {
    width: 100%;
  }
  .right .centered {
    width: 85%;
    margin: 6rem 0;
    padding-bottom: 1rem;
  }
  .right nav {
    display: block;
    margin-bottom: 2rem;
    img {
      width: 5rem;
    }
  }
}
`;
