import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Chat from "../pages/Chat";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Chat />
  }
])

const RootRouterProvider = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default RootRouterProvider
