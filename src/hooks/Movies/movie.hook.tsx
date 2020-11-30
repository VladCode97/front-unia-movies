import { useState, useCallback, useContext } from 'react';
import { GetService } from '../../Common/Services/base.service';
import { Context } from '../../Common/Context/user.context';


export const useMovie = () => {
  //State movies
  const [movies, setMovies] = useState<Array<any>>();
  //Context
  const { userInformation } = useContext(Context);
  /**
   * @method
   */
  const getMovies = useCallback(async () => {
    if (userInformation) {
      const { data } = await GetService("https://api-rest-unia-movie.herokuapp.com/Movies/Movies",
        ((JSON.parse(userInformation).token)));
      if (data.length !== 0) {
        setMovies(data.map((movie: any, index: number) => {
          movie.key = index;
          return movie;
        }));
      }
    }

  }, [userInformation])

  return {
    movies,
    getMovies
  }

}