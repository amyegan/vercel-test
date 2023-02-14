const fetch = require('node-fetch');

export default function handler(request, response) {
  try {
    fetch('http://localhost:3000/api/nothing')
  } catch (error) {
    console.log('error', error)
    console.log('message', error.message)
    console.log('status', error.status)
    response.status(413).json({
      message: 'Failed to post handler success response',
    })
  }
}
