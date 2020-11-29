import { Button } from 'antd';
import React, { FC, useContext } from 'react';
import '../../index.css';
import { HomeUser, HeaderUser } from '../../Styled-Components/home.styled';
import { FooterComponent } from '../Footer/footer.component';
import { MoviesComponent } from '../Movies/movies.component';
import { useSignIn } from '../../hooks/Auth/Sign/signIn.hook';
import { FontUniaMovie } from '../../Styled-Components/font.styled';
import { Context } from '../../Common/Context/user.context';


export const HomeUserComponent: FC = () => {
  const { userInformation } = useContext(Context);
  const response = JSON.parse(userInformation).response;
  const { Logout } = useSignIn();
  return (
    <HomeUser>
      {/* Header */}
      <HeaderUser>
        <Button
          style={{ position: 'relative', left: '90%', top: '20%' }}
          type="dashed" ghost
          onClick={Logout}
        >
          Logout
        </Button>
      </HeaderUser>
      {/* Content */}
      <FontUniaMovie
        style={{ textAlign: 'center' }}
        fontColor="white"
        fontFamily="'Roboto', sans-serif;"
        fontSize="50px"
        fontPositionTop="2%"
      >
        <FontUniaMovie fontColor="#F04500" fontFamily="'Pacifico', cursive"
        >
          Welcome,
        </FontUniaMovie>
        {response.name}
      </FontUniaMovie>
      <MoviesComponent></MoviesComponent>

      {/* Footer */}
      <FooterComponent />
    </HomeUser>
  )
}