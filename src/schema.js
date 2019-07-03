let { makeExecutableSchema, addMockFunctionsToSchema } = require("graphql-tools");
let resolvers = require("./resolvers");

const typeDefs = `
type Query {
  getAllTodoList: [Todo]
  getToDoById(todoId: String): Todo
}

type Todo {
  todoId: String
  todoLabel: String
  itemsList: [Items]
}

type Items {
  itemId: String
  itemLabel: String
  status: String
}

type Mutation {
  createTodo(todoInput: addTodo): Todo
  insertItem(todoId: String, todoItem: addItems): Items
  updateTodo(todoId: String, updateInput: addTodo): Todo
  deleteTodo(todoId: String): Todo
  deleteItem(todoId: String, itemId: String): Items
  updateItem(todoId: String, itemId: String, updateVal: addItems): Items
}

input addItems {
  itemId: String
  itemLabel: String
  status: String
}

input addTodo {
	todoId: String
  todoLabel: String
  itemsList: [addItems]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
