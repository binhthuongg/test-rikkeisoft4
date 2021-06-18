import styled from "styled-components";

export const StyledComponent = styled.div`
  .reactLoaderSpinner {
    display: none;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999446588;
    &.show {
      display: block;
    }
  }
`;
