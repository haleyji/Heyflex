import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading: true,
    movie: []
  };
  getMovies = async() => {
      const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
      console.log(movies);
  }
  componentDidMount(){
      this.getMovies();
  }
  render(){
    const {isLoading} = this.state;
    return <div>{isLoading ? 'Loading' : 'Loaded'}</div>
  }
}

export default App;
