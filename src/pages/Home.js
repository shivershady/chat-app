import React, {useContext, useEffect, useState} from 'react';
// import User from "../Components/User";
// import Message from "./Message";
import {getAllUser} from "../services/userServices";
// import auth from "../context/auth";

function Home() {
    const [users, setUsers] = useState([]);
    const [chatFriend, setChatFriend] = useState('');
    const [msgs, setMsgs] = useState([]);
    // const {user} = useContext(auth);

    const handleUser = async () => {
        const rep = await getAllUser();
        setUsers(rep.data);
    }

    useEffect(() => {
        handleUser();
    }, [])

    console.log(users);

    return (
        <div className="container mx-auto bg-gray-400">
            {/*{!chatFriend.name && users.map((user) => {*/}
            {/*    return (*/}
            {/*        <User key={user.uid} user={user} selectUser={selectUser}/>*/}
            {/*    )*/}
            {/*})}*/}
            {/*{chatFriend.name && <Message friend={chatFriend} msgs={msgs} backHome={()=>setChatFriend('')}/>}*/}
        </div>
    );
}

export default Home;