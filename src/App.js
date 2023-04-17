
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import OtpVerify from './Components/OtpVerify';
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';
import ChangePassword from './Components/ChangePassword';

function App() {
  return (
    <div >
        <Login/> 
      <Signup/>
      <OtpVerify/>
      <ForgetPassword/>
      <ResetPassword/>
      <ChangePassword/>
    </div>
  );
}

export default App;
