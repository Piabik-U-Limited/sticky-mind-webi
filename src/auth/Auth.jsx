import React from 'react'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { ErrorAlert,SuccessAlert } from '../components'
import { setError,setSuccess } from '../redux/slices/notification.slice'
import { useSelector,useDispatch } from 'react-redux'
function Auth() {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.notification);
  return (
    <Container component="main" maxWidth="lg">
      <Outlet />
      <SuccessAlert
          message={notification.success}
          close={() => dispatch(setSuccess(""))}
        />
        <ErrorAlert
          error={notification.error}
          close={() => dispatch(setError(""))}
        />
    </Container>
  )
}

export default Auth