const config = {
  dest: './service',
  projects: [
    {
      name: 'pet',
      source: 'fixture/pet.json',
      // source: 'http://petstore.swagger.io/v2/swagger.json',
    },
    {
      name: 'projectA',
      source: 'fixture/projectA.json',
    },
    {
      name: 'projectB',
      source: 'fixture/projectB.json',
    },
    {
      name: 'projectC',
      source: 'fixture/projectC.json',
    },
  ],
}

module.exports = config
