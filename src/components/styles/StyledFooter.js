import styled from "styled-components";

export const StyledFooter = styled.div`
  font-family: OpenSans;
  margin-top: 70px;
  height: 150px;
`;

export const StyledFooterTop = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .footer-text {
    width: 50%;
  }

  .footer-social-media {
    width: 50%;
  }
`;

export const StyledFooterBottom = styled.div`
  display: flex;
  width: 100%;
  height: 50px;

  .footer-copy {
    width: 50%;
    padding-top: 20px;
    font-size: 14px;
    font-weight: 600;
    color: #525f7f;

    span {
      color: #00cdac;
    }
  }

  .footer-link {
    width: 50%;
    padding-top: 20px;
    text-align: end;
    background: transparent;
    border: 0;
    a {
      font-size: 14px;
      text-decoration: none;
      color: #8898aa;
    }
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

export const StyledThanksText = styled.p`
  font-size: 24px;
  color: #00cdac;
  margin: 10px 0;
`;

export const StyledText = styled.p`
  font-size: 22px;
  color: #32325d;
  margin: 5px 0;
`;
