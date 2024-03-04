import { useContext } from "react"
import { Context } from "../../context/context"
import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoute() {
    const {authUser} = useContext(Context)
  return (
    authUser? <Outlet/> : <Navigate to='auth'/>
  )
}
