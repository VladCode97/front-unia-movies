import React, { FC, useState } from 'react';
import { MovieContainer, ItemMovie, ImageMovie } from '../../Styled-Components/movies.style';
import Movies from '../../movies.json';
import { FontUniaMovie } from '../../Styled-Components/font.styled';
import { Button, Modal } from 'antd';

export const MoviesComponent: FC<any> = () => {
  //State modal
  const [modal, setModal] = useState<boolean>(false);

  const showModal = () => setModal(!modal);
  const handleCancel = () => setModal(!modal);

  const movies = Movies;
  return (
    <MovieContainer>
      {
        (movies.length !== 0 && movies) && (
          movies.map((movie, index) => {
            return (
              <ItemMovie key={index}>
                <ImageMovie Img={movie.image_movie} alt="" />
                <FontUniaMovie
                  style={{ textAlign: 'center' }}
                  fontColor="white"
                  fontFamily="'Roboto', sans-serif;"
                  fontSize="15px"
                  fontPositionTop="10%"
                >
                  {movie.name_movie}
                </FontUniaMovie>
                <Button
                  style={{ marginTop: '10%', marginLeft: '30%', fontSize: '12px' }}
                  onClick={showModal}
                  type="dashed" ghost>
                  View movie
                </Button>
                <Modal
                  visible={modal}
                  onCancel={handleCancel}
                >
                  <p>
                    {movie.description_movie}
                  </p>
                  <video controls={true}>
                    <source src="https://youtu.be/luai0p0y2zE" type="video/mp4">
                    </source>
                  </video>
                </Modal>
              </ItemMovie>
            )
          })
        )
      }
    </MovieContainer >
  )
}