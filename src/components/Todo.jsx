import "antd/dist/antd.css";
import { Input } from "antd";
import { Button, Modal } from "antd";
import { useState, useContext, useRef } from "react";
import { nanoid } from "nanoid";
import { AppContext } from "../Redux/AppContextProvider";
import { addTodo, deleteTodo, toggleTodo, editTodo } from "../Redux/action";

export const Todo = () => {
  const { dispatch, getState } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState("");
  const currid = useRef("");
  const addval = addTodo({ id: nanoid(), title: value, status: false });
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div>
        <h1>Todo Application</h1>
        <Input
          style={{ width: "400px" }}
          placeholder="Enter the Task"
          onChange={(e) => setValue(e.target.value)}
        ></Input>
        <Button
          type="primary"
          onClick={() => {
            dispatch(addval);
            setData(getState());
          }}
        >
          Add Task
        </Button>
        {data.map((e, i) => {
          return (
            <div key={e.id}>
              <h1>
                {i + 1}: {e.title} {e.status ? "Completed" : "Not-Completed"}
              </h1>
              <Button
                onClick={() => {
                  dispatch(deleteTodo(e));
                  setData(getState());
                }}
              >
                Delete
              </Button>
              <Button
                onClick={() => {
                  dispatch(toggleTodo(e));
                  setData(getState());
                }}
              >
                Toggle-Task
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  currid.current = e.id;
                  showModal();
                }}
              >
                Open Modal
              </Button>
              <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={() => {
                  dispatch(editTodo({ currid, value }));
                  setData(getState());
                  handleOk();
                }}
                onCancel={handleCancel}
              >
                <p>Edit TODO</p>
                <Input onChange={(e) => setValue(e.target.value)}></Input>
              </Modal>
            </div>
          );
        })}
      </div>
    </>
  );
};
