import {useState, useEffect} from "react";
import Seo from "../components/Seo";

const API_KEY = "14a888e381ad44e96913b29a814d2fe4"; // 이걸 나중에 숨길거임

export default function Home(){	
	const [movies, setMovies] = useState();	// movie list
	
	const fetchFunc = async () => await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);	// data fetch
	
	// get movie data
	useEffect(() => {		
		(async() => {
			const {results} = await (
				await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
			).json();	// data fetch			
			setMovies(results);
		})();
		
	}, []);
	
    return (				
		<div>
			<Seo title="Home" />
			{
				!movies && <h4>Loading...</h4>
			}			
			{
				movies?.map((movie) => (
					<div key={movie.id}>
						<h4 style={{color : "black"}}>{movie.original_title}</h4>
					</div>
				))
			}
		</div>
	);
}