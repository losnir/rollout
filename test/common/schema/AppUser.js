module.exports = {
   id: "server.model.AppUser",
   title: "AppUser Schema",
   type: 'object',
   required: ['id', 'name'],
   properties: {
      id:   { type: 'number' },
      name: { type: 'string' }
   }
}