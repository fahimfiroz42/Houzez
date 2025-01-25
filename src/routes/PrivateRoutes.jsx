import PropTypes from 'prop-types'

import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../components/shared/Loading'
import { useContext } from 'react'
import { AuthContext } from '../AuthPovider/AuthPovider'


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) return <Loading />
  if (user) return children
  return <Navigate to='/login' state={{ from: location }} replace='true' />
}


export default PrivateRoute