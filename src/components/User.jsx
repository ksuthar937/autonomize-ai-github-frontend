import { useDispatch, useSelector } from "react-redux";
import styles from "./User.module.css";
import { showFollower, showrRpos } from "../redux/userSlice";

const User = () => {
  const {
    avatar_url: avatar,
    login,
    name,
    bio,
  } = useSelector((state) => state.user.user);

  const { status } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <div className={styles.outer}>
      <img src={avatar} alt={login} className={styles.avatar} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.login}>
        (<strong> {login} </strong>)
      </p>
      <p className={styles.bio}>{bio}</p>
      {status === "repoList" ? (
        <button className={styles.btn} onClick={() => dispatch(showFollower())}>
          Followers
        </button>
      ) : (
        <button className={styles.btn} onClick={() => dispatch(showrRpos())}>
          Repositories
        </button>
      )}
    </div>
  );
};

export default User;
