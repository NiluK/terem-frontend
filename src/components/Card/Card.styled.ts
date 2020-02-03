import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  background: ${(props): string => props?.theme?.colors?.card};
  border: 2px solid ${(props): string => props?.theme?.colors?.border};
`;

export const Image = styled.img`
  width: ${(props): string => (props.width ? `${props.width}px` : '100%')};
  object-fit: cover;
  height: ${(props): string => (props.height ? `${props.height}px` : '100%')};
`;

export const Info = styled.div`
  padding: 5px 10px 15px;
`;

export const Title = styled.h3`
  font-size: 12px;
  margin: 0;
  margin-bottom: 2px;
  color: ${(props): string => props?.theme?.colors?.primary};
`;

export const Location = styled.p`
  font-size: 12px;
  margin: 0;
  color: ${(props): string => props?.theme?.colors?.secondary};
  display: flex;
  align-items: flex-start;
`;
