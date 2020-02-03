import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;
`;

export const Content = styled.div`
  background: white;
  width: 95%;
  border: 2px solid #f1f2f5;

  @media screen and (min-width: 1000px) {
    max-width: 1000px;
  }
  padding: 0 20px 20px;
`;

export const Heading = styled.h2`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 0;
  color: #7a91a2;
`;

export const InputContainer = styled.div`
  margin: 30px 0 20px;
  width: 340px;
`;

export const Input = styled.input`
  width: 100%;
`;

interface FeaturedContainer {
  width: number;
}

export const FeaturedContainer = styled.div<FeaturedContainer>`
  display: grid;
  position: relative;
  grid-gap: 20px;
  max-width: 100%;
  grid-template-columns: repeat(
    5,
    ${(props): string | number => props.width && `${props.width}px`}
  );
`;
