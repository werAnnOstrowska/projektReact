import {Flex} from "@radix-ui/themes"
import {} from "../../stylesheet/TheHeader.css"
import dotLogo from "../../assets/modified.svg";
import { Link } from "react-router-dom";


const TheHeader = () => {
  return (
    <div className="header-container">
        <Flex direction="column">
          <Link to="/">
            <h3 className="header-title">Greenery</h3>
          </Link>
            <p className="header-subtitle">All your plant needs fulfilled at one place!</p>
            <img src={dotLogo}></img>
        </Flex>
    </div>
  )
}

export default TheHeader