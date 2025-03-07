import PropTypes from "prop-types";

import styled, { css } from "styled-components";
import { Label } from "./Label";
import Error from "./Error";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: ${(props) =>
    props.orientation === "vertical" ? "1fr" : "24rem 1fr"};
  gap: ${(props) => (props.orientation === "vertical" ? "0.8rem" : "2.4rem")};

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: ${(props) =>
      props.orientation === "vertical"
        ? "none"
        : "1px solid var(--color-grey-100)"};
  }

  ${(props) =>
    props.orientation === "vertical" &&
    css`
      &:has(button) {
        display: flex;
        justify-content: space-between;
      }
    `}
`;

const FormRow = ({ label, error, children, orientation }) => {
  return (
    <StyledFormRow orientation={orientation}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
};

FormRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  orientation: PropTypes.string,
};

export default FormRow;
