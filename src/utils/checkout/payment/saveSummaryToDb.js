// libraries
import axios from "axios";

async function saveSummaryToDb() {
  let summary = JSON.parse(localStorage.getItem("summary"));

  // communicate to server
  axios.post("http://localhost:5000/orders", summary);

  return;
}

export default saveSummaryToDb;
