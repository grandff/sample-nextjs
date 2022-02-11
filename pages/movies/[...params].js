import {useRouter} from "next/router";

export default function Detail({params}){
	const router = useRouter();	// 전달받은 파라미터 확인 가능
	const [title, id] = params || [];
	return (
		<div>
			<h4>{title || "Loading..."}</h4>
		</div>
	)
}

// ssr
export function getServerSideProps({params : {params}}) {
	return {
		props : {
			params
		}
	}
}