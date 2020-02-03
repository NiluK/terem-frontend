import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: grid;
  position: relative;
  grid-gap: 20px;
  max-width: 100%;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (min-width: 995px) {
    grid-template-columns: repeat(4, 1fr);
  }
  overflow: hidden;
`;

interface Button {
  left?: boolean;
}

export const Button = styled.button<Button>`
  position: absolute;
  top: 0;
  bottom: 0;
  border: none;
  text-align: center;
  display: flex;
  font-size: 24px;

  background: linear-gradient(
    to ${(props): string => (props.left ? 'left' : 'right')},
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  ${(props): string => (props.left ? 'left: 0' : 'right: 0')}
`;
