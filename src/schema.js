let { makeExecutableSchema, addMockFunctionsToSchema } = require("graphql-tools");
let resolvers = require("./resolvers");

const typeDefs = `
type Query {
  getAllTodoList: [Todo]
  getToDoById(todoId: String): Todo
}

type Todo {
  id: String
  label: String
  todoActivity: [Activity]
  description: String
  todoStatus: String
}

type Activity {
  id: String
  label: String
  status: String
}

type Mutation {
  createTodo(todoInput: addTodo): Todo
  addTodoActivity(id: String, todoActivity: activity): Activity
  updateTodo(id: String, updateInput: addTodo): Todo
  deleteTodo(todoId: String): Todo
}

input activity {
  id: String
  label: String
  status: String
}

input addTodo {
	id: String
  label: String
  description: String
  todoActivity: [activity]
  todoStatus: String
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
