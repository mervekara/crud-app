import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledPost = styled.div`
  padding: 30px;
`;

export const StyledPostName = styled(Link)`
  display: block;
  color: #32325d;
  margin: 12px 21px;
  font-size: 28px;
  font-weight: 600;
  text-decoration: none;
`;

export const StyledPostTitle = styled.div`
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #525f7f;
  padding: 12px 20px;

  span {
    color: #32325d;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const StyledPostBody = styled.div`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #525f7f;
  padding: 12px 20px;

  span {
    color: #32325d;
    font-size: 20px;
    font-weight: 600;
  }
`;
