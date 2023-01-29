import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
//app components
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage';
//mui components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

function App() {

  return (
    <div className="App">
      <h1 className="App-header">COOL MOVIE LIST!</h1>
      <Router>        
        <Route path="/" exact>
          <Container maxWidth="xl">
            <Grid 
            container rowSpacing={4} 
            columnSpacing={{ xs: 4 }}
            >
              <MovieList />
            </Grid>
          </Container>
        </Route>
        <Route 
          path="/:id" 
          children={<DetailsPage />}>
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
