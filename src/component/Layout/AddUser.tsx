import { useState, FC } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { endPoint } from "../Constants/constant";
import Alert from "react-bootstrap/Alert";

/**
 * @description AddUser Component.
 * used for showing add user component when clickes on add user button.
 */
const AddUser: FC = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    Name: "",
    Position: "",
    Email: "",
  });

  const [isAlert, setAlert] = useState(false);
  const { Name, Position, Email } = user;

  /**
   * @description onInputChange Fucnction.
   * used for refelcting the input changes on screen by using state.
   */
  const onInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  /**
   * @description onSubmit Fucnction.
   * used for submitting the user input data to api.
   */
  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (Name === "" && Position === "" && Email === "") {
      return setAlert(true);
    }
    await axios.post(endPoint, user);
    history.push("/");
  };

  /**
   * @description onClose Fucnction.
   * used for closing the add user component and get back to the table component.
   */
  const onClose = () => {
    history.push("/");
  };

  return (
    <>
      <div className="container add">
        {isAlert && (
          <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
            <Alert.Heading>ERROR</Alert.Heading>
            <p>Please fill up all the fields!!!</p>
          </Alert>
        )}
        <div className="w-75 mx-auto shadow p-5 addUserContainer">
          <h2 className="text-center mb-4">Add Employee Details</h2>
          <span className="closeCustomBtn" onClick={onClose}>
            X
          </span>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="Name"
                value={Name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Position"
                name="Position"
                value={Position}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="Email"
                value={Email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className="btn btn-secondary btn-block">Add Details</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
