import { useCallback } from "react";
import { PostService } from "../../../Common/Services/base.service";
import UserDTO from '../../../Common/DTO/user.dto';

export const useRegister = () => {
  
  const registerUser = useCallback(async (body: UserDTO) => {
    await PostService(body, "https://api-rest-unia-movie.herokuapp.com/Auth/Register");
  }, []);

  return {
    registerUser,
  }
}