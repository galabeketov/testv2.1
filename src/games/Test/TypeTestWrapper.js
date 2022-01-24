import styled from "styled-components";

const TypeTestWrapper = styled.section`
  .question-block {
    .active{
      color: red !important;
    }
    .timer {
      margin: 0 auto;
      width: 75%;
      background: blue;
      height: 20px;
      border-radius: 8px;
    }
    .question {
      padding: 10px 30px;
      text-align: center;
      h2 {
        .word {
          color: red;
          font-size: "18px";
        }
      }
    }
    .variants {
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      ul li {
        margin: 0 auto;
        width: 50%;
        padding: 8px 16px;
        border: 2px solid black;
        border-radius: 4px;
        margin-bottom: 20px;
        transition: 0.3s;
        box-shadow: 0 5px 10px 0 black;
        &:hover {
          background-color: silver;
        }
        &:active {
          background-color: #ddf4ff;
        }
      }
    }
  }
`;

export default TypeTestWrapper;
