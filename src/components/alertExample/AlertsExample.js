import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./alertsExample.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, setAlertRemoval } from "../alertManager/alertsSlice";

export function AlertsExample() {
  const dispatch = useDispatch();
  const updatedAlerts = useSelector((state) => state.useAlertReducer.activeAlerts);
  
  useEffect(() => {
    handleAlertRemoval();
  });

  const [timeLimit, setTimelimit] = useState(10);
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [id, setID] = useState("");
  const [alertTitle, setAlertTitle] = useState("");

  const handleAlertRemoval = () => {
    const TEN_SECONDS = 10000;

    const newAlert = updatedAlerts[updatedAlerts.length - 1];  /// get newly added alert
    const timeLimit = newAlert && newAlert.timeLimit ? newAlert.timeLimit *1000 : TEN_SECONDS; // if no timelimit was provided, add default 10 sec
   
    if (newAlert !== undefined) {
      setTimeout(() => {
        dispatch(setAlertRemoval(newAlert.id));
      }, timeLimit);
    }
  };

  const handleSubmission = (event) => {
    dispatch(
      add({
        timeLimit,
        text,
        link,
        alertType,
        id,
        alertTitle,
      })
    );
  };

  return (
    <div className="Alerts-example">
      <FormControl>
        <TextField
          id="time-limit"
          label="Time Limit in Seconds"
          variant="standard"
          onChange={(event) => setTimelimit(event.target.value)}
        />
        <TextField
          id="text"
          label="Text"
          variant="standard"
          onChange={(event) => setText(event.target.value)}
        />
        <TextField
          id="link"
          label="Link"
          variant="standard"
          onChange={(event) => setLink(event.target.value)}
        />
        <FormLabel className="Form-label" id="alert-type-buttons-group-label">
          Alert Type
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="alert-type-buttons-group-label"
          defaultValue="success"
          name="radio-buttons-group"
          className="Radio-group"
          value={alertType}
          onChange={(event) => setAlertType(event.target.value)}
        >
          <FormControlLabel value="error" control={<Radio />} label="Error" />
          <FormControlLabel
            value="warning"
            control={<Radio />}
            label="Warning"
          />
          <FormControlLabel value="info" control={<Radio />} label="Info" />
          <FormControlLabel
            value="success"
            control={<Radio />}
            label="Success"
          />
        </RadioGroup>

        <TextField
          id="id"
          label="ID"
          variant="standard"
          onChange={(event) => setID(event.target.value)}
        />
        <TextField
          id="alert-title"
          label="Alert Title"
          variant="standard"
          onChange={(event) => setAlertTitle(event.target.value)}
        />
        <button className="Button" onClick={handleSubmission}>
          Submit
        </button>
      </FormControl>
    </div>
  );
}
