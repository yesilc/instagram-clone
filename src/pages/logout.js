import {logout} from "../firebase";
import {useEffect} from "react";

export default function Logout() {

	useEffect(() => {
		logout()
	})

	return null

}
