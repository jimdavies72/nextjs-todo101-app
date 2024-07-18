import CompleteCheckBox from "./completeCheckBox";
import DeleteButton from "./deleteButton";

const ControlsComponent = ({
  _id,
  token,
  completed,
}: {
  _id: string;
  token: string;
  completed: boolean;
}) => {
  return (
    <div className="flex">
      <div>
        <CompleteCheckBox
          _id={_id}
          token={token}
          completed={completed}
        />
      </div>
      <DeleteButton 
        _id={_id} 
        token={token}
      />
    </div>
  );
};

export default ControlsComponent;
