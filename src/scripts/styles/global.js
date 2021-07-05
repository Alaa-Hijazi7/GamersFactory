import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Poppins", sans-serif;
  }
  body {
    background-color: #10141D;
    overflow: hidden;
  }
    /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: #374463;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #1A2235;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #202A40;
  }
  
  .swal2-icon-success,
  .swal2-success-circular-line-left {
    background-color: #02CC5F !important;
  }
  .swal2-success-ring {
    background-color: #4AF89A !important;
  }
  .swal2-icon.swal2-success .swal2-success-ring {
    border: .25em solid rgb(0 0 0 / 30%) !important;
  }
  .swal2-popup.swal2-toast {
    box-shadow: none !important;
  }
  .swal2-timer-progress-bar {
    background-color: #4AF89A !important;
  }
  .swal2-success-line-tip,
  .swal2-success-line-long {
    z-index: 3 !important;
    background-color: white !important;
  }
  .swal2-html-container {
    color: white !important;
    letter-spacing: 0.4px !important;
    margin: 1rem 0 !important;
  }
  .swal2-icon-error {
    background-color: #FF4B55 !important;
  }
  .swal2-icon-error .swal2-timer-progress-bar-container {
    background-color: #FF9AA0 !important;
  }
  .swal2-icon-error .swal2-timer-progress-bar {
    background-color: #ff000f !important;
  }
  .swal2-error-ring {
    background-color: #4AF89A !important;
  }
  .swal2-error {
    background: #FF9AA0 !important;
    border: none !important;
    padding: 5px !important;
    .swal2-x-mark-line-left,
    .swal2-x-mark-line-right {
      background-color: white !important;
    }
  }
  .swal2-icon-info {
    background-color: #00C0F3 !important;
    .swal2-timer-progress-bar-container {
      background-color: #57D7F9 !important;
    }
    .swal2-timer-progress-bar {
      background-color: #2196f3 !important;
    }
  }
  .ReactModal__Overlay {
    z-index: 9;
    background-color: rgb(0 0 0 / 75%) !important;
  }
  .swal2-info {
    background: #57D7F9 !important;
    border: none !important;
    padding: 5px !important;
    .swal2-icon-content {
      color: white;
    }
  }
  .input-container {
    display: flex;
    flex-direction: column;
    label {
      color: #4A597B;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    input {
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
    .tip {
      font-size: 0.5rem;
    }
    textarea {
      padding: 1rem;
      border: none;
      border-radius: 9px;
      color: white;
      background-color: #1A2235;
      resize: vertical;
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
  select {
    background-color: #1A2235;
    color: #324060;
    padding: 1rem;
    border: none;
    border-radius: 9px;
    option {
      color: white;
    }
  }
  .primary-btn {
    font-size: 1rem;
    width: 100%;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: 600;
    padding: 0.8rem;
    background: linear-gradient(90deg, #1565D8 -7.26%, #3889FE 140.6%);
    border-radius: 9px;
    transition: all 0.2s;
    border: 2px solid transparent;
    :hover {
      opacity: 0.8;
      transition: all 0.2s;
    }
    :focus {
      box-shadow: 0 0 0 3pt #76757371;
      transition: all 0.2s;
    }
  }
  .active-category {
    color: white !important;
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
  .mt-1 {
    margin-top: 1rem;
  }
  .mt-2 {
    margin-top: 2rem;
  }
  .flex-end {
    display: flex;
    justify-content: flex-end;
  }
  .logout-container {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
    h5 {
      cursor: pointer;
      color: #FF4848;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      :hover {
        opacity: 0.8;
      }
    }
  }
  .open-aside-icon {
    z-index: 8;
    cursor: pointer;
    display: flex;
    gap: 0.1rem;
    margin: 1rem;
    position: absolute;
    > div {
      background-color: #151C2C;
      padding: 0.4rem 0.6rem;
      border-radius: 50%;
    }
    color: #307ED9;
  }
  .not-found__text {
    color: #3B455A;
  }
  .upload-image__div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1A2235;
    border-radius: 9px;
    margin-top: 1.5rem;
    height: 3.5rem;
    h4 {
      color: #324060;
      padding: 0 1.5rem;
      font-weight: 400;
    }
  }
  input[type="file"] {
    display: none;
  }
  .upload-image__label {
    height: 100%;
    display: inline-block;
    cursor: pointer;
    border-radius: 9px;
    padding: 0.2rem 1.5rem;
    font-size: 1.5rem;
    background-color: #4A597B;
    .iconify {
      vertical-align: text-bottom;
    }
  }
  .messages {
    margin-top: 1rem !important; 
  }
`
