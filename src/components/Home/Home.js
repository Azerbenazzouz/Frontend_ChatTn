import React,{useState} from 'react'
import './Home.css'
import NavHome from './components/NavHome';
import { useSelector } from 'react-redux'
import SearchUsers from './components/SearchUsers';
import ChatList from './components/ChatList';

function Home() {
    const userName = useSelector(state => state.username)
    const [ListUsers,setListUsers] = useState([])
    const [Search,setSearch] = useState("")
    return (
        <div className="HomePage">
            <NavHome setListUsers={setListUsers} setSearch={setSearch} userName={userName}/>

            {
                // TODO! chat list component initially works
                // TODO! if you start searching a person in the NavHome the chat list component will be removed and placed by search users component 
                // TODO* ChatList and SearchUsers components created
                // TODO: search users component : "SearchUsers"
                // TODO: chat list component    : "ChatList"

            }
            <br/>
            <div className="Scroll">
                {
                    Search=== "" ?  <ChatList/> : <SearchUsers ListUsers={ListUsers} Search={Search}/>
                }
            </div>
        </div>
        
    )
}

export default Home
