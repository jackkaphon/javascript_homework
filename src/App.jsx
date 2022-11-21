import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Img from './assets/my_profile.jpeg'

export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState("")
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")


  const handleLogin = () => {
      if (username === "user" && password === "user") {
        setisLoggedIn("user")
      }else if(username === "admin" && password === "admin"){
        setisLoggedIn("admin")
      }
      else{
        alert("Wrong username or password")
      }
  }

  return (
    <Box>
      {isLoggedIn === '' &&
      <Login
        handleLogin={handleLogin}
        setusername={setusername}
        username={username}
        password={password}
        setpassword={setpassword}
      />
    }
    {isLoggedIn === 'user' &&
      <UserPage />
    }
    {isLoggedIn === 'admin' &&
      <AdminPage />
    }
    </Box>
  )
}

function Login(props) {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight="100vh"
    >
      <img src={Img} width={"10%"} height={180} style={{borderRadius: "50%"}}/>
      <br/>
      <Box m={1}>
        <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e)=> props.setusername(e.target.value)}/>
      </Box>
      <Box m={1}>
        <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=> props.setpassword(e.target.value)}/>
      </Box>
      <Box m={1}>
        <Button variant="contained" onClick={props.handleLogin}>Login</Button>
      </Box>
    </Box>
  )
}

function UserPage() {
  return (
    <Box>
      User Page
    </Box>
  )
}

function AdminPage() {
  return (
    <Box>
      Admin Page
    </Box>
  )
}
