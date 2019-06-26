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
		createTodo(_, { todoInput: {id, label, todoStatus, description, todoActivity}, todoInput}) {
      let obj = new Object();      
      obj.id = id;
      obj.label = label;
      obj.todoStatus = todoStatus;
      obj.todoActivity = todoActivity;
      obj.description = description;
      Todos.push(obj);
			return {id, label, todoStatus, description, todoActivity};
    },
    addTodoActivity(_, { id, todoActivity }) {  
      const todo = Todos.find((element) => element.id === id );      
      todo.todoActivity.push(todoActivity);
      return todoActivity;
    },
    updateTodo(_, { id, updateInput }) {  
      const todoIndex = Todos.findIndex((element) => element.id === id );   
      Todos[todoIndex] = updateInput;
      return Todos;
    },
    deleteTodo(_, { todoId }) {
      const todoIndex = Todos.findIndex((element) => element.id === todoId );
      let deletedTodo = Todos.splice(todoIndex, 1)[0];
			return deletedTodo;
		},
    deleteItem(_, { todoId, itemId }) {
      const todo = Todos.find((element) => element.id === todoId );
      let itemIndex = todo.todoActivity.findIndex((element) => element.id === itemId );
      let deletedItem = todo.todoActivity.splice(itemIndex, 1)[0];
			return deletedItem;
		},
    updateItem(_, { todoId, itemId, updateVal }) {
      const todo = Todos.find((element) => element.id === todoId );
      let item = todo.todoActivity.find((element) => element.id === itemId );
      item = Object.assign(item, updateVal);
			return item;
		}
	},
};

module.exports = resolvers;