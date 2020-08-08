import axios from "axios";

export default {
  getUsers: () => {
    const res = [];
    axios.get("https://randomuser.me/api/?results=200&nat=us")
    .then(response => {
      res.push(response.data)
      .catch(err => {
        console.log(err);
      });
      return res;
    })
  },
};
