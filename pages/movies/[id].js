import {useRouter} from "next/router";

export default function Detail(){
	const router = useRouter();	// 전달받은 파라미터 확인 가능
	console.log(router);
	return "detail";
}