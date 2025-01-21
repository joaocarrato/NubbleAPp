import { postListMock } from './postListMock';
import { Post } from './postTypes';

async function getList(): Promise<Post[]> {
  let headersList = {
    Authorization:
      'Bearer NQ.-MB9kIoSDlsUw57bbmuLoNqa_gcu0HvTP3rLFt2d2_uoutBqePSbbllPIf7v',
  };

  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: headersList,
  });

  let data = await response.json();
  console.log('fetch data', data);

  // await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  return postListMock;
}

export const postApi = {
  getList,
};
