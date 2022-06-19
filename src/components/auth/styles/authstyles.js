import styled from "styled-components";

const AuthContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100;
  background-color: #fff;

  #main {
    /* background-color: #ec90ec; */
    /* display: grid;
    grid-template-columns: 2fr 3fr; */

    .header {
      display: none;
      box-sizing: border-box;
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 20px;

    #main {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: lightblue;
        padding: 20px;
        font-size: 1.2em;

        .auth-head {
          text-align: center;
          text-transform: capitalize;
        }
      }
    }
  }

  /* @media screen and (max-width: 1000px) {
   
    }
  } */
`;
export default AuthContainer;
