 import React,{useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {
    Alert,Col,Container,Row
  } from 'reactstrap';

const Tarea = ({task,setTask,deleteTask,setType}) => {
    const [editTask,changeEditTask] = useState(false);
    const [newTask,editNewTask] = useState(task.text);
    const [newType,editNewType] = useState(task.type);


    const handleSubmit = (e)=>{
        e.preventDefault();
        setTask(task.id,newTask);
        setType(task.id,newType);
        changeEditTask(false);
    }

    return ( 
        <div className={`lista-tareas__tarea  alert ${task.type}`}>
            <Container>
                <Row>
            <Col>
            <div className= "lista-tareas_texto">
                {editTask ?
                <form action ="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                    <input type ="text" className="formulario-editar-tarea__input" 
                            value={newTask} onChange={ (e)=>editNewTask(e.target.value)}
                    />
                    <button type ="submit" className="formulario-editar-tarea__btn" >
                        Actualizar
                    </button>
                </form>
                : 
                task.text
                }
            </div>
            </Col>
            <Col>
            <div className="lista-tareas_contenedor-botones">
                <FontAwesomeIcon icon={faEdit} 
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={()=>changeEditTask(!editTask)}/>
                <FontAwesomeIcon icon={faTrashAlt} 
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={()=> deleteTask(task.id)}/>
            </div>
            </Col>
            </Row>
            </Container>
        </div> 
        );
}
 
export default Tarea;