import React, { useState, useEffect } from 'react';
import * as Styled from './index.styled';
import Carousel from '../components/Carousel';
import Card from '../components/Card';

const initialData = [
  {
    title: '',
    location: '',
    img: '',
  },
];

const Home = () => {
  const [query, setQuery] = useState('');
  const [popular, setPopular] = useState(initialData);
  const [featured, setFeatured] = useState(initialData);

  useEffect(() => {
    fetch('http://demo3136867.mockable.io/carousel')
      .then(resp => resp && resp.json())
      .then(({ data }) => setPopular(data));

    fetch('http://demo3136867.mockable.io/featured')
      .then(resp => resp && resp.json())
      .then(({ data }) => setFeatured(data));
  }, []);

  const handleChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const filteredPopular = popular?.filter(val => {
    const regex = new RegExp(query, 'gi');
    return val.title.match(regex);
  });

  return (
    <Styled.Container>
      <Styled.InputContainer>
        <Styled.Input
          data-testid="input"
          placeholder="Search for..."
          onChange={handleChange}
        />
      </Styled.InputContainer>
      <Styled.Content>
        <Styled.Heading>Popular around you</Styled.Heading>
        <Carousel
          upperLimit={filteredPopular?.length + 1}
          lowerLimit={0}
          startIndex={0}
          stopIndex={4}
        >
          {filteredPopular?.map(val => (
            <Card key={val.title} {...val} imageHeight={130} />
          ))}
        </Carousel>
        <Styled.Heading>Featured</Styled.Heading>
        <Styled.FeaturedContainer width={160}>
          {featured?.map(val => (
            <Card key={val.title} {...val} imageHeight={155} />
          ))}
        </Styled.FeaturedContainer>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Home;
