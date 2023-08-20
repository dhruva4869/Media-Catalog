require("dotenv").config();
const cors= require("cors");
const express = require("express");
const connectDB = require("./connectDB");
const Book = require("./models/Books");
const Anime = require("./models/Anime");
const Movie = require("./models/Movie");
const multer = require("multer");

// POST FOR POSTING
// PUT FOR UPDATING
// GET FOR FETCHING
// DELETE FOR DELETING
// PATCH = PUT BUT SPECIFIC UPDATE NOT EVERYTHING
// HEAD = GET BUT FETCHES/REQUESTS ONLY HEADERS. NO CONTENT
// TRACE = FOR DEBUGGING. GET TRACES
// OPTIONS = PROVIDES WITH A MENU OF ACTIONS POSSIBLE WITH ALL THESE

const app = express();
const PORT = process.env.PORT || 8000;


connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true } ));
app.use(express.json());
app.use("/uploads", express.static("uploads"));


app.get("/api/movies", async (req, res) => {
  try {
    const category = req.query.category;
    
    const filter = {};
    if(category) {
      filter.category = category;
    }

    const data = await Movie.find(filter);
    if(!data) {
      throw new Error("Error occurred while fetching Movies");
    }
    res.status(201).json(data);

  } catch (error) {
    res.status(500).json({error: "Error occurred while fetching Movies"});
  }
})

 

app.get("/api/books", async (req, res) => {
  try {
    const category = req.query.category;
    //const stars = req.query.stars;

    const filter = {};
    if(category) {
      filter.category = category;
    }

    const data = await Book.find(filter);
    
    if (!data) {
      throw new Error("An error occurred while fetching books.");
    }
    
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching books." });
  }
});

app.get("/api/animes", async (req, res) => {
  try {
    const category = req.query.category;
    //const stars = req.query.stars;

    const filter = {};
    if(category) {
      filter.category = category;
    }

    const data = await Anime.find(filter);
    
    if (!data) {
      throw new Error("An error occurred while fetching animes.");
    }
    
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching animes." });
  }
});




app.get("/api/books/:slug", async (req, res) => {
    try {
      const slugParam = req.params.slug;
      const data = await Book.findOne({ slug: slugParam});
  
      if (!data) {
        throw new Error("An error occurred while fetching a book.");
      }
      
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching books." });
    }
  });


app.get("/api/movies/:slug", async (req, res) => {
  try {
    const slugParams = req.params.slug;
    const data = await Movie.findOne({ slug: slugParams });
    if(!data) {
      throw new Error("An error occurred while fetching a Movie.")
    }
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching Movies." });
  }
})
  
  app.get("/api/animes/:slug", async (req, res) => {
    try {
      const slugParam = req.params.slug;
      const data = await Anime.findOne({ slug: slugParam});
  
      if (!data) {
        throw new Error("An error occurred while fetching a anime.");
      }
      
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching animes." });
    }
  });
  


  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + "-" + file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })
  


 app.post("/api/books", upload.single("thumbnail")  ,async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    const newBook = new Book({
      title: req.body.title,
      slug: req.body.slug,
      stars: req.body.stars,
      description: req.body.description,
      category: req.body.category,
      thumbnail: req.file.filename,
    })

    await Book.create(newBook);
    res.json("Data Submitted");
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching books." });
  }
});

app.post("/api/animes", upload.single("thumbnail")  ,async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    const newAnime = new Anime({
      title: req.body.title,
      slug: req.body.slug,
      stars: req.body.stars,
      description: req.body.description,
      category: req.body.category,
      thumbnail: req.file.filename,
    })

    await Anime.create(newAnime);
    res.json("Data Submitted");
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching anime." });
  }
});

app.post("/api/movies", upload.single("thumbnail"), async (req, res) => {
  try {
    const newMovie = new Movie({
      title: req.body.title,
      description: req.body.description,
      slug: req.body.slug,
      stars: req.body.stars,
      category: req.body.category,
      thumbnail: req.body.filename,
    })

    await Movie.create(newMovie);
    res.json("Movie Data Submitted successfully.");

  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching Movies." });
  }
})



app.put("/api/books", upload.single("thumbnail"), async (req, res) => {
    try {
  
      const bookId = req.body.bookId;
  
      const updateBook = {
        title: req.body.title,
        slug: req.body.slug,
        stars: req.body.stars,
        description: req.body.description,
        category: req.body.category,
      }
  
      if (req.file) {
        updateBook.thumbnail = req.file.filename;
      }
  
      await Book.findByIdAndUpdate(bookId, updateBook)
      res.json("Data Submitted");
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching books." });
    }
  });

  app.put("/api/animes", upload.single("thumbnail"), async (req, res) => {
    try {
  
      const animeId = req.body.animeId;
  
      const updateAnime = {
        title: req.body.title,
        slug: req.body.slug,
        stars: req.body.stars,
        description: req.body.description,
        category: req.body.category,
      }
  
      if (req.file) {
        updateAnime.thumbnail = req.file.filename;
      }
  
      await Anime.findByIdAndUpdate(animeId, updateAnime)
      res.json("Data Submitted");
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching Anime." });
    }
  });

  app.put("/api/movies", upload.single("thumbnail"), async (req, res) => {
    try {
      const movieId = req.body.movieId;
      const updateMovie = {
        title: req.body.title,
        description: req.body.description,
        slug: req.body.slug,
        stars: req.body.stars,
        category: req.body.category,
        thumbnail: req.body.filename,
      }
      if(req.file) {
        updateMovie.thumbnail = req.file.filename;
      }
      await Movie.findByIdAndUpdate(movieId, updateMovie);
      res.json("Movie updated successfully");
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching Movies." });
    }
  })

  
  app.delete("/api/books/:id", async(req,res) => {
    const bookId = req.params.id;
  
    try {
      await Book.deleteOne({_id: bookId});
      res.json("Successfully Deleted " + req.body.bookId);
    } catch (error) {
      res.json(error);
    }
  });


  app.delete("/api/animes/:id", async(req,res) => {
    const animeId = req.params.id;
  
    try {
      await Anime.deleteOne({_id: animeId});
      res.json("Successfully Deleted " + req.body.animeId);
    } catch (error) {
      res.json(error);
    }
  });

  app.delete("/api/movies/:id", async(req, res) => {
    const movieId = req.params.id;
    try {
      await Movie.deleteOne({_id: movieId});
      res.json("Successfully Deleted "+req.body.movieId);
    } catch (error) {
      res.json(error);
    }
  })










app.get("/", (req, res) => {
    res.json("This is the home page. For testing goto api/books OR api/animes");
});

app.get("*", (req, res) => {
    res.sendStatus("404");
});

app.listen(PORT, () => {
    console.log(`Sever running at Port: ${PORT}`)
});