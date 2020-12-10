import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('Should return an account on success', async () => {
      app.get('/test_cors', (req, res) => {
          res.send()
      })
    await request(app)
        .post('/api/signup')
        .send({
            name: 'Lucas',
            email: 'lucas.liima030@gmail.com',
            password: '123',
            passwordConfirmation: '123'
        })
        .expect(200)
  })
})
