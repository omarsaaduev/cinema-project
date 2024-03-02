import { Outlet } from "react-router-dom";
import './AuthLayout.scss'

export default function AuthLayout() {
  return (
    <div className="auth">
      <div className="container">
      <Outlet/>
      </div>
    </div>
  )
}
