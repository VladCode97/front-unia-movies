import { useCallback, useContext } from 'react';
import { AuthDTO } from '../../../Common/DTO/auth.dto';
import { PostService } from '../../../Common/Services/base.service';
import { Context } from '../../../Common/Context/user.context';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';


export const useSignIn = () => {
  /**
   * Hook
   */
  const history = useHistory();
  /**
   * Context
   */
  const { setUserInformation } = useContext(Context);
  /**
   * Sign In app
   */
  const SignIn = useCallback(async (auth: AuthDTO) => {
    try {
      const { data } = await PostService(auth, "https://api-rest-unia-movie.herokuapp.com/Auth/SignIn");
      if (data !== 'User no found') {
        setUserInformation(
          window.sessionStorage.setItem(
            'user',
            JSON.stringify(data)
          ));
        history.push('/homeUser');
      } else {
        console.log(data);
        message.info('User no found');
      }
    } catch (e) {
      console.log(e)
    }
  }, []);
  /**
   * Logout app
   */
  const Logout = useCallback(() => {
    window.sessionStorage.removeItem('user');
    history.push('/');
  }, []);
  return {
    SignIn,
    Logout
  }
}