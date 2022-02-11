import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import Seo from "../components/Seo";
import Link from "next/link";

export default function Home({results}){	
	const router = useRouter(); // router hook을 이용한 페이지 이동
	const onClick = (id, title) => {
		/*
		router.push({
			pathname : `/movies/${id}`,
			query : {
				title : `${title}`
			}
		}, `/movies/${id}`) // query param 숨기기
		*/
		
		// catch all 기법
		router.push(`/movies/${title}/${id}`)
	}
    return (				
		<div className = "container">
			<Seo title="Home" />			
			{
				results?.map((movie) => (
					<div className="movie" key={movie.id} onClick={() => onClick(movie.id, movie.original_title)}>
						<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
						<h4 style={{color : "black"}}>
							<Link href={`/movies/${movie.original_title}/${movie.id}`}>
								<a>
									{movie.original_title}
								</a>
							</Link>							
						</h4>
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