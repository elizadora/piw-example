import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tasks from "./pages/Tasks/Tasks";
import Login from "./pages/Login/Login";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/home" element ={<Home />} />
            <Route path="/tasks" element = {<Tasks />} />
            <Route path="/" element = {<Login />} />
        </Routes>
    )
} 
