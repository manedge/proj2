import React, { Component } from "react";
import AssignPerson from "../../utils/signupbutton/Tagify/AssignPerson";
import { addTask } from "../apiProject";
class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      task_title: "",
      task_description: "",
      task_responsible: [],
      task_responsible_ids: [],
      task_completed: "PLANNED",
      task_optimistic: "",
      task_pessimistic: "",
      task_mostLikely: "",
    };
  }

  onChangeTaskTitle = (e) => {
    this.setState({ task_title: e.target.value });
  };

  onChangeTaskDescription = (e) => {
    this.setState({ task_description: e.target.value });
  };

  onChangeTaskResponsible = (e) => {
    this.setState({ task_responsible: e.target.value });
  };

  onChangeTaskOptimistic = (e) => {
    this.setState({ task_optimistic: e.target.value });
  };

  onChangeTaskPessimistic = (e) => {
    this.setState({ task_pessimistic: e.target.value });
  };

  onChangeTaskMostLikely = (e) => {
    this.setState({ task_mostLikely: e.target.value });
  };
  assignTo = (members) => {
    this.setState({ task_responsible: members });
  };
  assignIds = (ids) => {
    this.setState({ task_responsible_ids: ids });
  };
  onSubmit = (e) => {
    e.preventDefault();

    // console.log("Task Created:");
    // console.log(`Task Title: ${this.state.task_title}`);
    // console.log(`Task Description: ${this.state.task_description}`);
    // console.log(`Task Assigned To: ${this.state.task_responsible}`);
    // console.log(`Optimistic Time: ${this.state.task_optimistic}`);
    // console.log(`Pessimistic Time: ${this.state.task_pessimistic}`);
    // console.log(`Most Likely Time: ${this.state.task_mostLikely}`);

    const newTask = {
      task_title: this.state.task_title,
      task_description: this.state.task_description,
      task_responsible: this.state.task_responsible,
      task_responsible_ids: this.state.task_responsible_ids,
      task_optimistic: this.state.task_optimistic,
      task_pessimistic: this.state.task_pessimistic,
      task_mostLikely: this.state.task_mostLikely,
      task_completed: this.state.task_completed,
    };
    addTask(this.props.projectId, newTask);
    this.setState({
      task_title: "",
      task_description: "",
      task_responsible: [],
      task_responsible_ids: [],
      task_completed: "PLANNED",
      task_optimistic: "",
      task_pessimistic: "",
      task_mostLikely: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Task Title: </label>
          <input
            type="text"
            className="form-control"
            value={this.state.task_title}
            onChange={this.onChangeTaskTitle}
          />
        </div>
        <div className="form-group">
          <label>Task Description: </label>
          <input
            type="text"
            className="form-control"
            value={this.state.task_description}
            onChange={this.onChangeTaskDescription}
          />
        </div>
        <div className="form-group">
          <AssignPerson
            projectId={this.props.projectId}
            assignTo={this.assignTo}
            assignIds={this.assignIds}
            label={"Assign to"}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label>Optimistic Time: </label>
            <input
              type="number"
              className="form-control "
              value={this.state.task_optimistic}
              onChange={this.onChangeTaskOptimistic}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Most Likely Time: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.task_mostLikely}
              onChange={this.onChangeTaskMostLikely}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Pessimistic Time: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.task_pessimistic}
              onChange={this.onChangeTaskPessimistic}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Task"
            className="btn btn-primary"
          />
        </div>
      </form>
    );
  }
}

export default AddTask;
