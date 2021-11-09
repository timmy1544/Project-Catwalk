import React from 'react'
import '@testing-library/jest-dom'
import axios from 'axios'
// import API mocking utilities from Mock Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import ProductDetails from '../client/src/components/ProductDetails/ProductDetails'
// import react-testing methods
import { render, getByText, waitFor, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import App from '../client/src/components/App.jsx'

//Setup
//Need to make a server
import config from '../config';

//----------------------set up fake server that only respond with certain data
const route = `/products`; //research more on setup fake server

const server = setupServer(
  rest.get(route, (req, res, ctx) => {//'ctx===context'
    return res(ctx.json([{//data from api databas
      "id": 12345,
      "campus": "hr-disneyland",
      "name": "starwars land",
      "slogan": "force be with you",
      "description": "a very happy place - rufus",
      "category": "amusement park",
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
afterAll(() => server.close());


test('testing fake server', async () => {
  var data = [{//data from api database
    "id": 12345,
    "campus": "hr-disneyland",
    "name": "starwars land",
    "slogan": "force be with you",
    "description": "a very happy place - rufus",
    "category": "amusement park",
    "default_price": "140.00",
    "created_at": "2021-08-13T14:39:39.968Z",
    "updated_at": "2021-08-13T14:39:39.968Z"
  }]

  rest.get(route, (err, results) => {
    if (err) {
      throw Error(err)
    } else {
      expect(results).toEqual(data);
    }
  })
})


test('testing live server request', async () => {
  rest.get(route, (err, results) => {
    if (err) {
      throw Error(err)
    } else {
      render(<App />)
      expect(screen.getByTestId('Product')).toHaveTextContent('starwars land');
    }
  })
})

// Product Details


// Related Products


// Q and A


// Reviews

