import Task from "./Task";

const TaskTable = ({ data, setData }) => {
  return (
    <>
      {data.length >= 1 &&
        data.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            data={data}
            setData={setData}
          />
        ))}
    </>
  );
};

export default TaskTable;
