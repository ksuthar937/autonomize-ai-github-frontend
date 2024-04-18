import { useDispatch } from "react-redux";
import styles from "./UserCard.module.css";
import { fetchUser, setLoader, showrRpos } from "../redux/userSlice";

const UserCard = ({ avatar, login }) => {
  const dispatch = useDispatch();

  const handleFollowersRepos = async () => {
    try {
      dispatch(setLoader());
      dispatch(fetchUser(login));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.outer} onClick={handleFollowersRepos}>
      <img className={styles.avatar} src={avatar} alt="name" />
      <div className={styles.desc}>
        <h3>{login}</h3>
      </div>
    </div>
  );
};

export default UserCard;
