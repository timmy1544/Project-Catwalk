import React from 'react'
import '@testing-library/jest-dom'
// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import ProductDetails from '../client/src/components/ProductDetails/ProductDetails'
// import react-testing methods
import {render, getByText, waitFor, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import App from '../client/src/components/App.jsx'


//Setup
//Need to make a server
import config from '../config';

//----------------------set up fake server that only respond with certain data
const route = `/products`; //research more on setup fake server

const server = setupServer (
  rest.get(route, (req, res, ctx) =>{//'ctx===context'
    return res(ctx.json([{//data from api databas
      "id": 42366,
      "campus": "hr-lax",
      "name": "Camo Onesie",
      "slogan": "Blend in to your crowd",
      "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
      "category": "Jackets",
      "default_price": "140.00",
      "created_at": "2021-08-13T14:39:39.968Z",
      "updated_at": "2021-08-13T14:39:39.968Z"
    }]))
  })
)
//------------------------------

  //Need to mock out route
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(()=> server.close());

test('allows the user to log in', async () => {
  var data = [{//data from api database
    "id": 42366,
    "campus": "hr-lax",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-08-13T14:39:39.968Z",
    "updated_at": "2021-08-13T14:39:39.968Z"
  }]
  render(<ProductDetails productsData={data}/>)
  expect(screen.getByTestId('Product')).toHaveTextContent('Camo Onesie');
})


