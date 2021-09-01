import React from "react";

import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

function TodoList({todos,setTodos,CompletedTodos, setCompletedTodos,DoneTodos,setDoneTodos}) {

    return (
        <div className="container">

      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span className="todos__heading">Completing Tasks</span>
            {CompletedTodos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={CompletedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>


      <Droppable droppableId="NewItem">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span className="todos__heading">Completing Tasks</span>
            {DoneTodos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={DoneTodos}
                todo={todo}
                key={todo.id}
                setTodos={setDoneTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>



     
    </div>
  );
    
}

export default TodoList
