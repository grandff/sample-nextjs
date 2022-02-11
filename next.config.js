const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
	async redirects(){
		return [
			{
				source : "/contact",
				destination : "/form",
				permanent : false
			},	// contact로 들어오면 form으로 리다이렉트
			{
				source : "/old-blog/:path",
				destination : "/new-sexy-blog/:path",
				permanent : false
			},	// pattern도 지원함
			{
				source : "/old-blog/:path*",
				destination : "/new-sexy-blog/:path*",
				permanent : false
			}
		]
	},
	async rewrites(){
		return [
			{
				source : "/api/movies",
				destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
			}
		]
	}
}
