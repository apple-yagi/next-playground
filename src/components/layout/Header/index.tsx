import tw, { styled } from "twin.macro";
import Link from "next/link";

const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  padding: 10px 20px;
`;

const StyledBrand = styled.span`
  ${tw`flex justify-center space-x-2`};
`;

const StyledEmoji = styled.span`
  font-size: 28px;
`;

const StyledTitle = styled.span`
  font-size: 24px;
`;

export const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Link href='/'>
          <a>
            <StyledBrand>
              <StyledEmoji>🚀</StyledEmoji>
              <StyledTitle>NextPlay</StyledTitle>
            </StyledBrand>
          </a>
        </Link>
      </StyledContainer>
    </StyledHeader>
  );
};
