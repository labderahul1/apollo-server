const Todos = require( './todos');
// const Category = require( './category');
// const Projects = require( './projects');

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
    deleteTodo(_, { todoId: id }) {
      let deletedItem = Todos.splice(0, 1)[0];
			return deletedItem;
		}
	},
};

module.exports = resolvers;