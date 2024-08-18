import { Box } from "@mui/material";
import UserForm from "./userForm";
import UsersTable from "./UsersTable";

const users = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Jane",
    }
  ];

const Users =()=>{
 return (
   <Box
    sx={{
        width:'calc(100% - 100px)',
        margin:'auto',
        marginTop:'100px',
    }}
   >
        <UserForm/>
        <UsersTable rows ={users}/>
   </Box>
 );
}

export default Users;