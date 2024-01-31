import ModeButtons from "./ModeButtons";
import TaskCell from "./TaskCell";
import EstTimeCell from "./EstTimeCell";

const TableRow = () => {
  return (
    <>
      <TaskCell />
      <EstTimeCell />
      <ModeButtons />
    </>
  );
};

export default TableRow;
