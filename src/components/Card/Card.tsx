import React from 'react';
import * as Styled from './Card.styled';
import LocationSVG from './LocationSVG';

interface Card {
  imageWidth?: number;
  imageHeight?: number;
  img: string;
  title: string;
  location?: string;
}

const Card = (props: Card): JSX.Element => {
  return (
    <Styled.Wrapper>
      <div>
        <Styled.Image
          width={props.imageWidth}
          height={props.imageHeight}
          src={props.img}
          alt={props.title}
        />
        <Styled.Info>
          <Styled.Title>{props.title}</Styled.Title>
          {props.location && (
            <Styled.Location>
              <LocationSVG />
              {props.location}
            </Styled.Location>
          )}
        </Styled.Info>
      </div>
    </Styled.Wrapper>
  );
};

export default Card;
