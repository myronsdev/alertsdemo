import Alert  from '@mui/material/Alert'
import AlertTitle  from '@mui/material/AlertTitle'
import Link  from '@mui/material/Link'
import "./alert.css";

function GlobalAlert(props) {
  return (
    <Link href={props.link !== '' ? props.link : '#'} className={`alert-link ${props.link ? '' : "disabled-link"}`}>
      <Alert severity={props.alertType}>
        <AlertTitle>{props.alertTitle }</AlertTitle>
        {props.text}
      </Alert>
    </Link>
  )
}

export default GlobalAlert;