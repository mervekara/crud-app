import styled from "styled-components";

export const StyledHeader = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  .header-content {
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    padding: 40px 0px;
    margin: 0 auto;
    box-sizing: border-box;
    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledLogo = styled.img`
  width: 125px;
  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;

export const StyledPostButton = styled.button`
  background: transparent;
  margin-left: 50px;
  vertical-align: super;
  padding: 0.25em 1em;
  border: 0;
  a {
    font-size: 14px;
    text-decoration: none;
    color: #fff;
  }
`;

export const LoginButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  color: #5e72e4;
  padding: 12px 25px;
  border: 0;
`;
