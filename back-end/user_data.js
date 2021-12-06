// some mock user data... in a real app, this would be stored in a database.
const users = [
    {
      id: 1,
      username: "salma",
      password: "foo", // you would normally encrypt the password using bcrypt() rather than keep it as plain text in the database
    },
    {
      id: 2,
      username: "alex",
      password: "bar", // you would normally encrypt the password using bcrypt() rather than keep it as plain text in the database
    },
  ]
  
  module.exports = users