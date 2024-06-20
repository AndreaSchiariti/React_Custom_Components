import { useState } from "react";

export function useUpdateInput() {
  const [user, setUser] = useState({ username: "", password: "",})

  function handleChangeUser (event) {
    event.preventDefault()
    const name = event.target.name
    const value = event.target.value
    
    setUser({
      ...user,
      [name]: value
    })
  }

  return {
    user: user,
    toChangeUser: handleChangeUser,
  }
}