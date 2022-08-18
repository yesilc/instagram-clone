import AuthLayout from "./pages/auth"
import Home from "./pages/Home"
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"

const routes = [
    {
        path: '/',
        element: <Home></Home>,
        auth: true
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    }
]
const authCheck = routes => routes.map(route =>{
    if(route?.auth){//route'umuzun içinde(yukarıdaki objelistte) eğer auth diye bir şey varsa
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if(route?.children){//bir routh'un children'ı varsa eğer 
        route.children = authCheck(route.children)    
    }
        return route
})

export default authCheck(routes)