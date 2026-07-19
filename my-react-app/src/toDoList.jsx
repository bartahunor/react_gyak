import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(["Buy groceries", "Walk the dog", "Read a book"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>
            <div>
                <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Enter a task..."
                />
                <button className="add-btn" onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="up-btn" onClick={() => moveTaskUp(index)}>Move Up</button>
                        <button className="down-btn" onClick={() => moveTaskDown(index)}>Move Down</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default ToDoList;