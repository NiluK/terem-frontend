import fetch from 'node-fetch';

(global as any).fetch = fetch;

const mockSuccessResponse = {
  data: [
    {
      title: 'hello world',
      location: 'hello world',
      img: 'https://placehold.it/320x300',
    },
  ],
};
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
});
jest.spyOn(global as any, 'fetch').mockImplementation(() => {
  return mockFetchPromise;
});
