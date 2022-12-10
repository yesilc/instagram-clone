import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user: null,
}
const auth = createSlice({
    name: 'auth',
    initialState,
    reducers:{
         setUser: (state,action) =>{
        //     //action.payload //setuser'ı gönderirken içerisine verdiğim değer ne ise onu temsil ediyor.
        //     if(action.payload){ //action payload'ım varsa o zaman gideceğim local storage'da setItem deyip user'ı json.stringify ederek payload'ı tutacağım
        //         localStorage.setItem('user',JSON.stringify(action.payload)) //login işlemini yaptıktan sonra home page'e gidiyor ama sayfayı yenilediğimizde tekrar login sayfasına yönlendiriyor çünkü yeniledikten sonra user bilgilerini tutmadığımız için login yapmamış gibi oluyoruz
        //     }else{ // login işleminden sonra çıkış yaptığımızda , logout yapmak istediğimizde setUser'ı false olarak göndereceğim
        //         localStorage.removeItem('user')
        //     } yukaridaki işlemi yapmak yerine data otomatik olarak firebase'den gelsin
            state.user = action.payload
        }
    }
})

export const {setUser}  = auth.actions
export default auth.reducer