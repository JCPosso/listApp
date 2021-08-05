import React from 'react';
import Tarea from './Tarea';
import db from '../firebase/firebaseConfig';
const ListaTareas = ({tasks,changeTasks}) => {

    const setType = (id,newType)=>{
        db.collection('tasks').doc(id).update({
            type:newType
        });
    }

    const setTask = (id,newText)=>{
        db.collection('tasks').doc(id).update({
            text:newText
        });
    }

    const deleteTask = (id)=>{
        db.collection('tasks').doc(id).delete();
    }

    return ( 
        <ul className='lista-tareas'>
            {
            tasks.length > 0  ? tasks.map((task)=>{
                    return <Tarea   key={task.id}
                                    task={task} 
                                    setTask={setTask}
                                    setType={setType}
                                    deleteTask={deleteTask}
                                    />   
            })
            :
            <div className="lista-tareas__mensaje">Aun no hay tareas nuevas!</div>
            }
        </ul>
     ); 
}
 
export default ListaTareas;