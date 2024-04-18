import { useState } from "react";
import Logo from "../assets/github.svg";

import styles from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { fetchUser } from "../redux/userSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      dispatch(fetchUser(username));
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
