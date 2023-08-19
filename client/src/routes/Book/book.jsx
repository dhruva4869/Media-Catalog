import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { BsFillFileEarmarkPlusFill } from "react-icons/bs"

function Book() {
    const baseUrl = "http://localhost:8000/api/books";
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("");




    useEffect(() => {
        const fetchData = async() => {
            try {
                
                let url = baseUrl;
                if(selectedCategory) {
                url += `?category=${selectedCategory}`
                }

                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error("Try Again Failed to fetch Data");
                }

                const jsonData= await response.json();
                setData(jsonData);
                setIsLoading(false);


            } catch (error) {
                console.log(error);
                setError("Error fecthing Data lol");
                setIsLoading(false);
            }
        }
        fetchData();
    }, [selectedCategory])


  return (
    <div>
        <h1>Manga</h1>
        <p style={{color:"cyan"}}>Manga are comics or graphic novels originating from Japan. <span style={{color:"lightgreen"}}>Most manga conform to a 
        style developed in Japan in the late 19th century,
        and the form has a  long history in earlier Japanese art. </span>
        The term manga is used in Japan to refer to both comics and cartooning.</p> <br />

        <Link to="/createbook"><BsFillFileEarmarkPlusFill size={20} /> Add New Manga</Link>

        <h2>My Manga List</h2>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}


        <div className="filters">
            <label style={{color:"cyan"}}>Sort by: </label>
                <select onChange={(e)=> setSelectedCategory(e.target.value)}>
                <option value="">All</option>
                <option value="romance">Romance</option>
                <option value="mystery">Mystery</option>
                <option value="action">Action</option>
                <option value="food">Food</option>
                <option value="adventure">Adventure</option>
                <option value="thriller">Thriller</option>
                <option value="comedy">Comedy</option>
                <option value="other">other</option>
                </select>
      </div>


        {isLoading ? (
            <p>Loading....</p>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <ul className="books">
            {data.map((item) => (
                <li key={item._id}>
                <Link to={`/books/${item.slug}`}>
                    <img
                    src={`http://localhost:8000/uploads/${item.thumbnail}`}
                    alt={item.title}
                    />
                    <h3>{item.title}</h3>
                </Link>
                </li>
            ))}
            </ul> 
        )}


    </div>
  )
}

export default Book