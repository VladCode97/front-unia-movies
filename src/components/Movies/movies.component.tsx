import React, { FC, useEffect, useState } from 'react';
import { MovieContainer, ItemMovie, ImageMovie } from '../../Styled-Components/movies.style';
import { FontUniaMovie } from '../../Styled-Components/font.styled';
import { Button, Modal } from 'antd';
import ReactPlayer from 'react-player';
import { useMovie } from '../../hooks/Movies/movie.hook';

export const MoviesComponent: FC<any> = () => {
  //State modal
  const [modal, setModal] = useState<boolean>(false);

  const showModal = () => setModal(!modal);
  const handleCancel = () => setModal(!modal);

  //Hook movies
  const { getMovies, movies } = useMovie();

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <MovieContainer>
      {
        (movies && movies.length !== 0) && (
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
                  <FontUniaMovie fontSize="55px"
                    fontFamily="'Pacifico', cursive"
                  >
                    {movie.name_movie}
                  </FontUniaMovie>
                  <FontUniaMovie
                    style={{ fontWeight: '300', padding: '5%' }}
                    fontSize="12px"
                    fontFamily="'Roboto', sans-serif;"
                  >
                    {movie.description_movie}
                  </FontUniaMovie>
                  <ReactPlayer
                    style={{ margin: 'auto' }}
                    url="https://youtu.be/luai0p0y2zE"
                    controls
                    playbackRate={2}
                    width="450px"
                    height="300px"
                  />
                </Modal>
              </ItemMovie>
            )
          })
        )
      }
    </MovieContainer >
  )
}