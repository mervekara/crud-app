import styled from "styled-components";

export const StyledProfileDetail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;

  .profile-details {
    width: 50%;
  }

  .profile-map {
    width: 50%;
  }
`;

export const StyledFulllName = styled.div`
  color: #32325d;

  h2 {
    font-size: 28px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0;
  }

  h4 {
    font-size: 16px;
    font-weight: 300;
    margin-top: 10px;
  }
`;

export const StyledInformation = styled.div`
  display: flex;
  padding: 5px 0;

  .information-key {
    font-size: 14px;
    color: #adb5bd;
    padding-right: 25px;
    width: 70px;
  }

  .information-value {
    font-size: 16px;
    color: #525f7f;
    width: 250px;
  }
`;

export const StyledLine = styled.div`
  display: block;
  border-bottom: 1px solid #e9ecef;
  margin: 0 30px;
`;
