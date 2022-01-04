//jering the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);
// Our main block
describe('Projects', () => {
  // Consts
  const id = '3',
    numProjects = 5,
    successCode = 200,
    project = {
      name: 'hello',
      description: 'hello',
    },
    testName = 'Cannon EOS 80D DSLR Camera',
    testPrice = { title: 'hello'};

  /*
  * Test for /GET
  */
  describe('/GET project', () => {
    it('it should GET all the projects', done => {
      chai.request(server)
        .get('/api/projects')
        .end((err, res) => {
          res.should.have.status(successCode);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(numProjects);
          done();
        });
    });
  });
  /*
  * Test for /POST
  */
  describe('/POST project', () => {
    it('it should POST a project ', done => {
      chai.request(server)
        .post('/api/projects')
        .send(project)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('name');
          res.body.should.have.property('description');
          res.body.should.have.property('price');
          res.body.should.have.property('id');
          done();
        });
    });
  });
  /*
  * Test for /GET:id
  */
  describe('/GET/:id project', () => {
    it('it should GET a book by the given id', done => {
      chai.request(server)
        .get(`/api/projects/${id}`)
        .end((err, res) => {
          res.should.have.status(successCode);
          res.body.should.be.a('object');
          res.body.should.have.property('id').eql(id);
          res.body.should.have.property('description');
          res.body.should.have.property('price');
          res.body.should.have.property('name').eql(testName);
          done();
        });
    });
  });
  /*
  * Test for /PUT:id
  */
  describe('/PUT/:id project', () => {
    it('it should UPDATE a project given the id', done => {
      chai.request(server)
        .put(`/api/projects/${id}`)
        .send(testPrice)
        .end((err, res) => {
          res.should.have.status(successCode);
          res.body.should.be.a('object');
          res.body.should.have.property('id').eql(id);
          res.body.should.have.property('name').eql(testName);
          res.body.should.have.property('description');
          res.body.should.have.property('price').eql(testPrice.price);
          done();
        });
    });
  });
  /*
  * Test for /DELETE:id
  */
  describe('/DELETE/:id project', () => {
    it('it should DELETE a project given the id', done => {
      chai.request(server)
        .delete(`/api/projects/${id}`)
        .end((err, res) => {
          res.should.have.status(successCode);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql(`Project ${id} removed`);
          done();
        });
    });
  });
});
