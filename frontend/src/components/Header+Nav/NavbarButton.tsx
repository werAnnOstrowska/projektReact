import {Button} from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom"

const NavbarButton = ({ text, route }: { text: string, route: string }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === route;
  return (
    <Button variant="outlined" sx={{ color: "rgb(89, 116, 69)", borderColor: "rgb(89, 116, 69)", "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.3)",
      boxShadow: "0 0 10px 4px rgb(255,255,255, 0.5)", 
      borderColor: "rgb(89, 116, 69)"}}} onClick={() => navigate(route)} disabled={isActive}>{text}</Button>
  )
}

export default NavbarButton