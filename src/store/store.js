import { configureStore } from '@reduxjs/toolkit'
import alertsSlice from '../components/alertManager/alertsSlice'

export default configureStore({
  reducer: {
    useAlertReducer: alertsSlice
  },
})