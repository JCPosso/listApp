import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import db from '../firebase/firebaseConfig';

const FormularioTareas = ({tasks,changeTasks}) => {
    const [inputTask,changeInputTask] = useState('');
    const [inputType,changeInputType] = useState('');

    const handleInput = (e) => {
        changeInputTask(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        var tp="alert-";
        for ( var i=0;i<inputTask.length;i++){
            if (inputTask.charAt(i) ===":") break
            tp+=inputTask.charAt(i);

        };
        var flag ="alert-secondary";
        var typesa =["primary","secondary","danger","success","warning","info","ligth","dark"];
        for ( var j=0;i<typesa.length;j++){
            console.log(typesa[j]);
            if (typesa[j]==tp){
            flag=typesa[j]
            break;
            }
        };
        db.collection('tasks')
        .add({
        text: inputTask,
        type: flag
        });
        
        changeInputTask('');
    }
    return ( 
        <div>
        <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input type= "text" className="formulario-tareas__input"
                placeholder="Escribe una tarea..."
                value={inputTask}
                onChange={(e) =>handleInput(e)}

            />
            <button type= "submit" className= "formulario-tareas__btn">
                <FontAwesomeIcon icon={faPlusSquare} className= "formulario-tareas__icono-btn"/>
            </button>
        </form>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="alert alert-primary" role="alert">
                        primary
                    </div>
                </div>
                <div class="col">
                <div class="alert alert-secondary" role="alert">
                        secondary
                    </div>
                </div>
                <div class="col">
                    <div class="alert alert-success" role="alert">
                        sucess
                    </div>
                </div>
                <div class="col">
                <div class="alert alert-danger" role="alert">
                        danger
                    </div>
                </div>
                <div class="col">
                    <div class="alert alert-warning" role="alert">
                        warning
                    </div>
                </div>
                <div class="col">
                   <div class="alert alert-info" role="alert">
                        info
                    </div>
                    <div class="col">
                    <div class="alert alert-light" role="alert">
                        light
                    </div>
                </div>
                <div class="col">
                <div class="alert alert-dark" role="alert">
                        dark
                    </div>
                </div>
        </div>
        </div>
    </div> </div>
     );
}
 
export default FormularioTareas; 