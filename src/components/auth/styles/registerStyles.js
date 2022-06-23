import styled from "styled-components";

const RegisterContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;

  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 10% 15%;

    div.input {
      margin: 10px 0;
      display: flex;
      flex-direction: column;

      input {
        margin-top: 5px;
        width: 100%;
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 10px;
        border-radius: 50px;
        padding-left: 20px;
        font-size: 1.2em;

        :focus {
          outline: none;
          box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.4);
        }
      }
    }

    div.agree {
      display: flex;
      margin: 10px 0 20px;
      justify-content: space-between;

      .agreeBox {
        input {
          background: aliceblue;
          outline: none;
          /* appearance: none; */

          ::after {
            content: "";
            position: absolute;
            display: block;
            height: 12px;
            width: 12px;
            background-color: #0b5a7970;
            border-radius: 3px;
          }
        }

        label {
          margin-left: 10px;
          position: relative;
        }
      }
    }

    h2 {
      text-align: center;
    }
  }

  @media screen and (max-width: 1000px) {
    display: flex;

    .auth-img {
      display: none;
    }
    .main {
      display: flex;
      flex-direction: column;
      padding: 10% 15%;

      div.input {
        margin: 10px 0;
        display: flex;
        flex-direction: column;

        input {
          margin-top: 5px;
          width: 100%;
          outline: none;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          padding: 20px;

          :focus {
            outline: none;
            box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.4);
          }
        }
      }

      div.agree {
        display: flex;
        margin: 10px 0 20px;
        justify-content: space-between;
        font-size: 0.7em;

        .agreeBox {
          input {
            background: aliceblue;
            outline: none;

            ::after {
              content: "";
              position: absolute;
              display: block;
              height: 12px;
              width: 12px;
              border-radius: 3px;
            }
          }

          @media screen and (max-width: 400px) {
            display: flex;
            flex-direction: column-reverse;

            label {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    .main {
      display: flex;
      flex-direction: column;
      padding: 8%;
    }
  }
  @media screen and (max-width: 350px) {
    .main {
      display: flex;
      flex-direction: column;
      padding: 5%;
    }
  }
`;

export default RegisterContainer;
