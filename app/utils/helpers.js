import axios from "axios";

const APIKey = ""

const helpers = {
	runQuery: (topic, start, end) => {
		const formatedTopic = topic.trim();
		const formatedStart = start.trim() + "2323";
		const formatedEnd = end.trim() + "123";

		console.log("Query is running");

		return axios.get("")
	}
}