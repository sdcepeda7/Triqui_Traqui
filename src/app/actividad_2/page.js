"use client";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { text: "Tarea 1", completed: false },
    { text: "Tarea 2", completed: false },
  ]);
  const [currentTask, setCurrentTask] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const addButtonHandler = () => {
    // Reto 1: Hacer que no se pueda agregar una tarea vacía
    if (currentTask.trim() === "") {
      alert("No puedes agregar una tarea vacía.");
      return;
    }
    // Reto 2: Hacer que no se pueda agregar una tarea repetida
    if (tasks.some((task) => task.text.toLowerCase() === currentTask.trim().toLowerCase())) {
        alert("Esa tarea ya existe.");
      return;
    }
    setTasks([...tasks, { text: currentTask.trim(), completed: false }]);
    setCurrentTask("");
  };

  const handleTaskClick = (indexToModify) => {
    const taskClicked = tasks[indexToModify];

    // Reto 4: Hacer que al dar click en una tarea tachada, desaparezca la tarea
    if (taskClicked.completed) {
      setTasks(tasks.filter((_, index) => index !== indexToModify));
    } else {
      // Reto 3: Hacer que al dar click en una tarea, aparezca tachada (clase tailwind "line-through")
      const updatedTasks = tasks.map((task, index) => {
        if (index === indexToModify) {
          return { ...task, completed: true };
        }
        return task;
      });
      setTasks(updatedTasks);
    }
  };

  const sortTasksHandler = () => {
    // Reto 5: Poner un botón que organice las tareas alfabéticamente
    // Reto 7: Hacer que las tareas se ordenen en orden inverso al volver a presionar el botón de organizar
    const sortedTasks = [...tasks].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.text.localeCompare(b.text);
      } else {
        return b.text.localeCompare(a.text);
      }
    });
    setTasks(sortedTasks);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Reto 6: Poner un botón que elimine todas las tareas
  const clearAllTasksHandler = () => {
    setTasks([]);
  };

  return (
    <section className="bg-red-100 p-4 max-w-2xl mx-auto my-10 rounded-lg shadow-md">
      <div className="my-2 flex gap-2">
        <input
          className="bg-gray-100 border border-red-400 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          type="text"
          value={currentTask}
          placeholder="Escribe una nueva tarea..."
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }}
          onKeyDown={(e) => e.key === 'Enter' && addButtonHandler()}
        />
        <button
          className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition-colors"
          onClick={addButtonHandler}
        >
          Agregar
        </button>
      </div>
      <div className="my-4 flex gap-2">
        <button
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors"
          onClick={sortTasksHandler}
        >
          Ordenar ({sortOrder === 'asc' ? 'A-Z' : 'Z-A'})
        </button>
        <button
          className="bg-gray-700 text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
          onClick={clearAllTasksHandler}
        >
          Eliminar Todas
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`bg-red-200 rounded-lg px-2 py-1 cursor-pointer hover:bg-red-300 ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
            onClick={() => handleTaskClick(index)}
          >
            {task.text}
          </div>
        ))}
      </div>
    </section>
  );
}