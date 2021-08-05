import React, {useState, useEffect}from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas'; 
import ListaTareas from './componentes/ListaTareas';
import db from './firebase/firebaseConfig';
import {
  Container, Row, Col
} from 'reactstrap';
import SecondHeader from './componentes/SecondHeader';

const  App = () =>{
  //Obtenemos las tareas guardadas de Localstorage
  //Establecemos el estado de als tareas
  const[tasks, changeTasks] = useState([]);

  //Estado de mostrar tareas completadas
  const [showCompletes, setShowCompletes]= useState(true);

  useEffect(() => {
    db.collection('tasks').onSnapshot((snapshot)=>{
      changeTasks(snapshot.docs.map((doc)=>{
        return {...doc.data(),id:doc.id}
      }));

    });
  },[]);
  return (
    <Container className="container-bg">
      <Row>
      <Col>
      <SecondHeader ></SecondHeader>
      <ListaTareas tasks={tasks}  />
      </Col>

      <Col>
      <Header />
      <FormularioTareas tasks={tasks} />
      </Col>
    </Row>
    </Container>

  );
}

export default App;
