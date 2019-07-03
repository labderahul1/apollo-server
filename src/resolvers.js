const Todos = require( './todos');

const resolvers = {
  Query: {
    getAllTodoList(_, args) {
      return Todos;
  },
  getToDoById(_, { todoId }) {
    const todo = Todos.find((element) => element.id === todoId );
    return todo;
}
},
  Mutation: {
		createTodo(_, { todoInput: {todoId, todoLabel, itemsList}}) {
      let obj = new Object();      
      obj.todoId = todoId;
      obj.todoLabel = todoLabel;
      obj.itemsList = itemsList;
      Todos.push(obj);
			return obj;
    },
    insertItem(_, { todoId, todoItem }) {  
      const todo = Todos.find((element) => element.todoId === todoId );      
      todo.itemsList.push(todoItem);
      return todoItem;
    },
    updateTodo(_, { id, updateInput }) {  
      const todoIndex = Todos.findIndex((element) => element.id === id );   
      Todos[todoIndex] = updateInput;
      return Todos;
    },
    deleteTodo(_, { todoId }) {
      const todoIndex = Todos.findIndex((element) => element.todoId === todoId );
      let deletedTodo = Todos.splice(todoIndex, 1)[0];
			return deletedTodo;
		},
    deleteItem(_, { todoId, itemId }) {
      const todo = Todos.find((element) => element.todoId === todoId );
      let itemIndex = todo.itemsList.findIndex((element) => element.itemId === itemId );
      let deletedItem = todo.itemsList.splice(itemIndex, 1)[0];
			return deletedItem;
		},
    updateItem(_, { todoId, itemId, updateVal }) {
      const todo = Todos.find((element) => element.todoId === todoId );
      let item = todo.itemsList.find((element) => element.itemId === itemId );
      item = Object.assign(item, updateVal);
			return item;
		}
	},
};

module.exports = resolvers;