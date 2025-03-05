import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  height: 9.6rem;
  width: auto;
`;

const Logo = () => {
  const src = "/logo.png";

  return (
    <StyledLogo>
      <StyledImg src={src} />
    </StyledLogo>
  );
};

export default Logo;
