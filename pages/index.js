import {useState, useEffect} from "react";
import Seo from "../components/Seo";

export default function Home({results}){	
	
    return (				
		<div className = "container">
			<Seo title="Home" />			
			{
				results?.map((movie) => (
					<div className="movie" key={movie.id}>
						<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
						<h4 style={{color : "black"}}>{movie.original_title}</h4>
					</div>
				))
			}
			<style jsx>
			{`
				.container {
					display : gird;
					grid-template-columns : 1fr 1fr;
					padding : 20px;
					gap : 20px;
				}
				
				.movie {
					transition : transform 0.2s ease-in-out;
				}
				
				.movie img{
					max-width : 100%;
					border-radius : 12px;
					transition : transform 0.2s ease-in-out;
					box-shadow : rgba(0, 0, 0, 0.1) 0px 4px 12px;
				}
				
				.movie:hover {
					transform : scale(1.05) translateY(-10px);
				}
				
				.movie:hover img{
					transform : scale(1.05) translateY(-10px);
				}
				
				.movie h4{
					font-size : 18px;
					text-align : center;
				}
			`}
			</style>
		</div>
		
	);
}

// server rendering
export async function getServerSideProps(){	// async는 선택사항
	const {results} = await (await fetch('https://nextjs-practice-mspco.run.goorm.io/api/movies')).json();	// data fetch	
	return {
		props : {
			results
		}
	}
}