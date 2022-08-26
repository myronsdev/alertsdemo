import { useSelector } from "react-redux";
import Alert from "../alert/Alert";
import "./alertManager.css";

function AlertManager() {
  const alerts = useSelector((state) => state.useAlertReducer.activeAlerts);
  return (
    <div className="Alert-manager">
      {alerts.map((alert) => (
        <Alert
          link={alert.link}
          alertType={alert.alertType}
          alertTitle={alert.alertTitle}
          text={alert.text}
          key={alert.id}
        />
      ))}
    </div>
  );
}

export default AlertManager;
