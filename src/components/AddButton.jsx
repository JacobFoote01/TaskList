const AddButton = ({ addClick }) => {
  return (
    <tr>
      <td>
        <button onClick={addClick}>Add</button>
      </td>
    </tr>
  );
};

export default AddButton;
