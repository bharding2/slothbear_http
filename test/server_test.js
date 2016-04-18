require('mocha');
require('http');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

const app = require(__dirname + '/../index.js');

describe('testing routes', () => {
  before(() => {
      app.router.get('/sloth', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('GET method hit on /sloth');
        res.end();
      })
      .post('/sloth', (req, res) => {
        req.on('data', (data) => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(data);
          res.end();
        });
      })
      .put('/sloth', (req, res) => {
        req.on('data', (data) => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(data);
          res.end();
        });
      })
      .patch('/sloth', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('PATCH method hit on /sloth');
        res.end();
      })
      .delete('/sloth', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('DELETE method hit on /sloth');
        res.end();
      });
      app.start(6265);
  });
  after(() => {
    app.close();
  });
  it('Successfully handle GET request', (done) => {
    request('localhost:6265')
      .get('/sloth')
      .end((req, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.contain('GET method hit');
        done();
      });
  });
  it('Successfully handle POST request', (done) => {
    request('localhost:6265')
      .post('/sloth')
      .send({ 'Name': 'Fur' })
      .end((req, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.contain('Fur');
        done();
      });
  });
  it('Successfully handle PUT request', (done) => {
    request('localhost:6265')
      .put('/sloth')
      .send({ 'Name': 'Ball' })
      .end((req, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.contain('Ball');
        done();
      });
  });
  it('Successfully handle PATCH request', (done) => {
    request('localhost:6265')
      .patch('/sloth')
      .end((req, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.contain('PATCH method hit');
        done();
      });
  });
  it('Successfully handle DELETE request', (done) => {
    request('localhost:6265')
      .delete('/sloth')
      .end((req, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.contain('DELETE method hit');
        done();
      });
  });
});
