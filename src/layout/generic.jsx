import { Stack } from "@mui/material"
import { Outlet } from "react-router-dom"
import Header from "../component/header"
import Footer from "../component/footer"





function GenericLayout(){
    return(
        <Stack>
            <div style={{
                marginTop:'250px'
            }}>

            </div>
            <Header/>
            <Outlet/>
            <Footer/>

        </Stack>
            
    )

}
export default GenericLayout