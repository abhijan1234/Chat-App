const users=[]
const addUser = ({id,name,room})=>{
    name=name.trim().toLowerCase()
    room=room.trim().toLowerCase()

    const existingUser = users.find((user)=>user.room === room && user.name === name )
    if(existingUser){
        return({error:"Username Taken"})
    }
    const user = {id,name,room}
    console.log("new user",user)
    users.push(user)
    return {user}
}

const removeUser = (id) =>{
    const index =  users.findIndex((user)=>user.id===id)
    if(index!==-1)
    {
        return users.splice(index,1)[0]
    }
}

const getUser = (id) =>{
    for(let i=0;i<users.length;i++)
    {
        console.log("MF user - ",users[i])
        if(users[i].id == id)
        {
            return users[i]
        }
    }
}

const getUserInRoom = (room)=>{
    users.filter((user)=>user.room===room)
}

module.exports={addUser,removeUser,getUser,getUserInRoom}