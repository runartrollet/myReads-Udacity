import { BookInterface } from '../Components/Book'

const api = 'https://reactnd-books-api.udacity.com'

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

export const get = (bookId: number) =>
  fetch(`${api}/books/${bookId}`, {
    headers
  })
    .then(res => res.json())
    .then(data => data.book)

export const getAll = () =>
  fetch(`${api}/books`, {
    headers
  })
    .then(res => res.json())
    .then(data => data.books)

export const update = (book: BookInterface, shelf: string) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({
      shelf
    })
  }).then(res => res.json())

export const search = (query: string, maxResults: number = 20) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query,
      maxResults
    })
  }).then(res => res.json())
    .then(data => data.books)
