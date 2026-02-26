
import { Routes,Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'
import Settings from './Components/Settings'
import Home from './Components/Home'
import Products from './Components/Products'
import ProductDetail from './Components/ProductDetail'
import NotFound from './Components/NotFound'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import Info from './Components/Info'
import Users from './Components/Users'
import Problem1 from './Components/Problem1'
import Problem2 from './Components/Problem2'
import Problem3 from './Components/Problem3'
import Problem4 from './Components/Problem4'
import Problem5 from './Components/Problem5'
import Problem6 from './Components/Problem6'
import Problem7 from './Components/Problem7'
import Problem8 from './Components/Problem8'
import Problem9 from './Components/Problem9'
import Problem10 from './Components/Problem10'
import Problem11 from './Components/Problem11'
import Problem12 from './Components/Problem12'
import Problem13 from './Components/Problem13'
import Problem14 from './Components/Problem14'
import Problem15 from './Components/Problem15'


function App() {
  const isAuthenticated=true;
  return (
    <div>
      <Routes>
        {/* Problem1 */}
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route index element={<Home/>}/>

          <Route path='profile' element={<Profile/>}/>
          <Route path="settings" element={<Settings />} />
        </Route>


        {/* Problem 2 */}
        <Route path="/products" element={<Products/>}/>

        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />


        {/* Problem3 */}

        <Route path="/login" element={<Login/>}/>
        <Route path="/info" element={
          <PrivateRoute isAuthenticated={isAuthenticated} >
            <Info/>
          </PrivateRoute>
          
        }/>


         {/* Problem4 */}
      <Route path="/users" element={<Users/>}/>


      {/* React.memo Problem1 */}
        <Route path="/problem1" element={<Problem1/>}/>

        {/* React.memo Problem2 */}
        <Route path="/problem2" element={<Problem2/>}/>

        {/* UseState */}
        <Route path="/problem3" element={<Problem3/>}/>

        {/* UseEffect */}
        {/* Auto Save Draft */}
        <Route path="/problem4" element={<Problem4/>}/>

        {/* Real Time Clock */}
        <Route path="/problem5" element={<Problem5/>}/>

        {/* {UseRef} */}
        <Route path="/problem6" element={<Problem6/>}/>

        <Route path="/problem7" element={<Problem7/>}/>

        {/* UseMemo */}

        <Route path="/problem8" element={<Problem8 numbers={8}/>} />

        {/* UseCallback */}
         <Route path="/problem9" element={<Problem9 />} />

          {/* UseMemo */}

        <Route path="/problem10" element={<Problem10 />} />

         {/* UseMemo+ useCallback */}

        <Route path="/problem11" element={<Problem11 />} />

        {/* CustomHooks */}

        <Route path="/problem12" element={<Problem12 />} />
        <Route path="/problem13" element={<Problem13 />} />
        <Route path="/problem14" element={<Problem14 />} />
        <Route path="/problem15" element={<Problem15 />} />
      

      </Routes>


        
    </div>
  )
}

export default App