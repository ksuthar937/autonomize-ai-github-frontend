import Logo from "../assets/github.svg";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchUser, setLoader } from "../redux/userSlice";

import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoader());
      dispatch(fetchUser(username));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.outer}>
      <img src={Logo} alt="logo" width={40} />
      <form onSubmit={(e) => handleSearch(e)}>
        <input
          type="text"
          placeholder="Enter github username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBox;
