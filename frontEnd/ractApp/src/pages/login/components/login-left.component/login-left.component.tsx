import '../../../../common-components/common.scss';
import './login-left.component.scss';
import { useHistory } from 'react-router';
import axios from 'axios';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

interface LoginData {
  username: string;
  password: string;
}

const loginDataInit = {
  username: '',
  password: ''
};

export default function LoginLeft(): JSX.Element {
  const [loginData, setLoginData] = useState<LoginData>(loginDataInit);

  const history = useHistory();

  const changeRoute = () => {
    const path = `/account`;
    history.push(path);
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>, key: string): void {
    setLoginData({ ...loginData, [key]: e.target.value });
    console.log(loginData.username);
    console.log(loginData.password);
    }
    

  function handleSubmit() {
    console.clear();
    console.log(loginData);
    axios
      .post('/login', loginData)
      .then(resp => {
        alert('Succes Login');
        console.log('Succes Login');
        console.log(resp.data);
      })
      .catch(err => {
        alert(err.response.statusText);
        console.log(err.response.statusText);
      });
    return <Redirect to="/userView" />;
  }

  return (
    <div className="grid-item login-container debug">
      <span className="login-container2">
        <div className="login-title debug">
          <b className="grad">Unlock New</b> <br />
          <b className="grad">Unique Challanges</b>
        </div>

        {/* <!-- * Description --> */}

        <div className="description debug">
          Lore ipsum dolor sit amet, consectetur adipiscing <br />
          elit, in maximus tempor orci et tincidunt.
        </div>

        {/* <!-- * Log in FORM --> */}

        <div className="login-form ">
          <form>
            <label className="login-form-label ">Username*</label>
            <br />
            <input
              className="login-input login-input1"
              type="text"
              defaultValue="jennifer.s@gmail.com"
              onChange={e => handleInputChange(e, 'username')}
            />
            <br />

            <label className="login-form-label ">Password*</label>
            <br />
            <input
              className="login-input login-input2"
              type="password"
              defaultValue="12345678"
              onChange={e => handleInputChange(e, 'password')}
            />
            <br />

            <a className="forgot-password" href="url">
              Forgot Password?
            </a>
          </form>
          <br />
        </div>

        <div className="login-button-container">
          <button className="login-button" onClick={handleSubmit}>
            Login to Paradise
          </button>
        </div>
      </span>
    </div>
  );
}