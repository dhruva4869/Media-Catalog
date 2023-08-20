import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home";
import About from "./routes/About/about";
import Book from "./routes/Book/book";
import Movie from "./routes/Movie/movie";
import SingleBook from "./routes/Book/singleBook";
import CreateBook from "./routes/Book/createBook";
import CreateAnime from "./routes/About/createAnime";
import CreateMovie from "./routes/Movie/createMovie";
import EditAnime from "./routes/About/editAnime";
import SingleAnime from "./routes/About/singleAnime";
import SingleMovie from "./routes/Movie/singleMovie";
import EditBook from "./routes/Book/editBook";
import EditMovie from "./routes/Movie/editMovie";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DarkMode from "./routes/Home/darkMode";


function App() {

  return (
    <div className="no-select-img">
      <DarkMode />
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/about/:slug" element={ <SingleAnime/> } />
          <Route path="/createanime" element={ <CreateAnime/> } />
          <Route path="/editanime/:slug" element={ <EditAnime/> } />
          <Route path="/books" element={ <Book/> } />
          <Route path="/books/:slug" element={ <SingleBook/> } />
          <Route path="/createbook" element={ <CreateBook/> } />
          <Route path="/editbook/:slug" element={ <EditBook/> } />
          <Route path="/movies" element={ <Movie /> }  />
          <Route path="/movies/:slug" element={ <SingleMovie />} />
          <Route path="/editmovie/:slug" element={ <EditMovie />} />
          <Route path="/createmovie" element={ <CreateMovie/> } />

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
