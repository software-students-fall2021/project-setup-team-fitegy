import React, {useEffect} from "react";
import { Redirect} from "react-router-dom"

const Logout = props => {
  // when this component loads, log out the user
  useEffect(() => {
    localStorage.removeItem("token")
  }, [])

  // navigate the user to the home page after logging them out
  return (
    <>
      <Redirect to="/login" />
    </>
  )
}

export default Logout