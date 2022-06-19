import styled from "styled-components";

const SocialContainer = styled.div`
  text-align: center;

  p {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;

  .icon {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    border: 2px solid blue;
    border-radius: 6px;
    padding: 5px 0;
  }
`;

export default SocialContainer;
