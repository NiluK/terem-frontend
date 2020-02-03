import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  background: #f3f6fa;
  border: 2px solid #f1f2f5;
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
  color: #7a91a2;
`;

export const Location = styled.p`
  font-size: 12px;
  margin: 0;
  color: #8e9fb5;
  display: flex;
  align-items: flex-start;
`;
