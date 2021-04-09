import { Modal, Button } from "react-bootstrap";
import React, { Component } from "react";
import { updateTask } from "./../apiProject";
class EditModel extends Component {
  state = {
    title: "",
    description: "",
    laneId : "",
    pessimisticTime: 0,
    optimisticTime: 0,
    mostLikelyTime: 0,
  };
  componentDidMount() {
    this.setState({
      title: this.props.task.taskName,
      description: this.props.task.taskDescription,
      pessimisticTime: this.props.task.pessimisticTime,
      optimisticTime: this.props.task.optimisticTime,
      mostLikelyTime: this.props.task.mostLikelyTime,
      id: this.props.task._id,
      laneId : this.props.task.status
    });
  }
  render() {
    let task = this.props.task;
    if (task === {}) return;
    let show = this.props.show;
    console.log(this.props.task);

    // if (tasks === undefined) return;
    // tasks.map((task) => {
    //   if (this.props.id.toString() === task._id) console.log(task);
    // });
    // console.log(this.props.id);
    return (
      <Modal show={show} onHide={() => this.props.hideMe()}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Name:</label>
          <input
            type={"text"}
            defaultValue={task.taskName}
            onChange={(e) => this.setState({ title: e.target.value })}
          ></input>
          <br></br>
          <label>Description:</label>
          <input
            type={"text"}
            defaultValue={task.taskDescription}
            onChange={(e) => this.setState({ description: e.target.value })}
          ></input>
          <br></br>
          <label>Optimistic Time:</label>
          <input
            type={"number"}
            defaultValue={task.optimisticTime}
            onChange={(e) => this.setState({ optimisticTime: e.target.value })}
          ></input>
          <br></br>
          <label>Pessimistic Time:</label>
          <input
            type={"number"}
            defaultValue={task.pessimisticTime}
            onChange={(e) => this.setState({ pessimisticTime: e.target.value })}
          ></input>
          <br></br>
          <label>Most Likely Time:</label>
          <input
            type={"number"}
            defaultValue={task.mostLikelyTime}
            onChange={(e) => this.setState({ mostLikelyTime: e.target.value })}
          ></input>
          <br></br>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() =>
              updateTask(this.state, this.props.projectId).then((data) =>
                console.log(data)
              )
            }
          >
            Submit
          </Button>
          <Button onClick={() => this.props.hideMe()}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditModel;
