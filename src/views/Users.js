import React,{useState} from 'react'
import AddUser from '../components/Users/AddUser/AddUser'
import UsersList from '../components/Users/UserList/UsersList'

function Users() {
    const [usersData, setUsersData] = useState([])
    const handlingUploadState=(newUser)=>{
       
        console.log(newUser);
        }



    
    return (
        <div>
           <AddUser uploadStateFunction={handlingUploadState}/>
           <UsersList usersData={[]}/> 
        </div>
    )
}

export default Users
