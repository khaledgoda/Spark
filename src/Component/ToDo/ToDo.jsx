import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTextArea,
  MDBTooltip,
} from "mdb-react-ui-kit";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./ToDo.css"
export default function App() {
  // , 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = () => {
    if (newTaskText.trim() === "") return;

    const newTask = {
      id: tasks.length + 1,
      text: newTaskText,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (

    <>
    <div className=" text-center">
    {values.map((v, idx) => (
        <Button key={idx} className="tdbtn mt-3 me-2 mb-2 w-75" onClick={() => handleShow(v)}>
          ToDo
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      </div>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>To Do List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <section className="">
      <MDBContainer className="py-3 mcont">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol xl="12">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-1">
                {/* <h6 className="mb-0 text-center">Todo List</h6> */}
                <div className="d-flex justify-content-center align-items-center mb-0">
                  <MDBTextArea
                    label="What do you need to do today?"
                    id="textAreaExample"
                    rows={2}
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    className="flex-fill mt-2"
                  />
                  <button
                    type="submit"
                    size="md"
                    className="ms-2 addtdbtn btn"
                    onClick={handleAddTask}
                    style={{ minWidth: "auto" }} 
                  >
                    Add
                  </button>
                </div>
                <MDBListGroup className="mb-0">
                  {tasks.map((task) => (
                    <MDBListGroupItem
                      key={task.id}
                      className="d-flex cont justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
                      style={{ textDecoration: task.completed ? "line-through" : "none" }}
                    >
                      <div className="d-flex align-items-center">
                        <MDBCheckbox
                          name="flexCheck"
                          id={`flexCheck-${task.id}`}
                          className="me-2"
                          defaultChecked={task.completed}
                          onChange={() => {

                            setTasks(
                              tasks.map((t) =>
                                t.id === task.id ? { ...t, completed: !t.completed } : t
                              )
                            );
                          }}
                        />
                       <div className="txt">{task.text}</div> 
                      </div>
                      <MDBTooltip
                        tag="a"
                        wrapperProps={{ href: "#!" }}
                        title="Remove item"
                      >
                        <MDBIcon
                          fas
                          icon="times"
                          color="danger"
                          onClick={() => handleDeleteTask(task.id)}
                        />
                      </MDBTooltip>
                    </MDBListGroupItem>
                  ))}
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
        </Modal.Body>
      </Modal>
    </>
   
  );
}
