import { Route, Routes } from 'react-router-dom'
import CustomerDashboard from '../Screens/Customers/HomePage/CustomerDashboard'
import GameList from '../Screens/Customers/Games/GameList'
// import Topbar from '../CommonComponents/Topbar'

const CustomerRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/CustomerDashboard"
          element={
              <CustomerDashboard />
          }
        ></Route>
        <Route
          path="/GameList"
          element={
              <GameList />
          }
        ></Route>
        {/* <Route
          path="/Topbar"
          element={
              <Topbar/>
          }
        ></Route> */}
      </Routes>
    </>
  )
}

export default CustomerRouter
