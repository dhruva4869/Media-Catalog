import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home";
import About from "./routes/About/about";
import Book from "./routes/Book/book";
import SingleBook from "./routes/Book/singleBook";
import CreateBook from "./routes/Book/createBook";
import CreateAnime from "./routes/About/createAnime";
import EditAnime from "./routes/About/editAnime";
import SingleAnime from "./routes/About/singleAnime";
import EditBook from "./routes/Book/editBook";
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

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
