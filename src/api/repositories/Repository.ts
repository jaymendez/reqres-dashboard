import axios from "axios";

const baseDomain = process.env.REACT_APP_BASE_URL;

const baseURL = `${baseDomain}/api`;

const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

console.log(baseURL)
export default axios.create({
	baseURL,
	headers
	// other options
});
