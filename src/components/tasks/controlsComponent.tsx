import CompleteCheckBox from "./completeCheckBox";
import DeleteButton from "./deleteButton";

const ControlsComponent = ({
  _id,
  completed,
}: {
  _id: string;
  completed: boolean;
}) => {
  return (
    <div className="flex">
      <div>
        <CompleteCheckBox
          _id={_id}
          completed={completed}
        />
      </div>
      <DeleteButton 
        _id={_id} 
      />
    </div>
  );
};

export default ControlsComponent;
