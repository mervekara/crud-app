import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledList = styled.ul`
  list-style: none;
  height: 100%;
  overflow-y: scroll;
`;

export const StyledListItem = styled.li`
  display: flex;
  width: 95%;
  padding: 30px 0;
  color: #32325d;
  font-size: 14px;
  font-weight: 300;
  justify-content: space-between;
  :first-of-type {
    border-top: none;
  }

  border-top: 1px solid rgba(216, 216, 216);

  .list-content {
    width: 60%;
    padding: 10px 0;
  }

  .list-buttons {
    width: 35%;
    display: flex;
  }
`;

export const StyledId = styled.span`
  font-weight: 600;
`;

export const StyledTitle = styled.span`
  margin-left: 10px;
`;

export const StyledPrimary = styled(Link)`
  background: #5e72e4;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(50, 50, 93, 0.11);
  border-radius: 3px;
  color: #ffffff;
  padding: 12px 21px;
  border: 0;
  font-size: 14px;
  font-weight: 600;
  margin-right: 20px;
  text-decoration: none;
`;

export const StyledSecondary = styled.button`
  background: #2dce89;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(50, 50, 93, 0.11);
  border-radius: 3px;
  color: #ffffff;
  padding: 12px 21px;
  border: 0;
  font-size: 14px;
  font-weight: 600;
  margin-right: 20px;
`;

export const StyledDelete = styled.button`
  background: #fb6340;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(50, 50, 93, 0.11);
  border-radius: 3px;
  color: #ffffff;
  padding: 12px 21px;
  border: 0;
  font-size: 14px;
  font-weight: 600;
`;
