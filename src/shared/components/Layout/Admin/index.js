import { Routes,Route } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
import User from "../../../../pages/admin/User/User"
import CreateUser from "../../../../pages/admin/User/CreateUser"
import EditUser from "../../../../pages/admin/User/EditUser"
import Product from "../../../../pages/admin/Product/Product"
import CreateProduct from "../../../../pages/admin/Product/CreateProduct"

const Admin  = ()=>{
    return (
        <>
            <Header/>
            <Sidebar/>
            <Routes>
                <Route path="/users" element={<User />} />
                <Route path="/users/create" element={<CreateUser/>}/>
                <Route path="/users/edit/:id" element={<EditUser/>}/>
                <Route path="/products" element={<Product />} />
                <Route path="/products/create" element={<CreateProduct/>} />
            </Routes>
            
        </>
    )
}

export default Admin