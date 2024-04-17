import { useState } from "react";
import Logo from "../assets/github.svg";

import styles from "./SearchBox.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";
import { getAllRepos } from "../redux/reposSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.get(`https://api.github.com/users/${username}`);
      dispatch(getUser(user.data));
      if (user) {
        const repos = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        dispatch(getAllRepos(repos.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.outer}>
      <img src={Logo} alt="logo" width={40} />
      <input
        type="text"
        placeholder="Enter github username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit" onClick={(e) => handleSearch(e)}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
