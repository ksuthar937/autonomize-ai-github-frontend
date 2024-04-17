import { useSelector } from "react-redux";
import styles from "./User.module.css";

const User = () => {
  const {
    avatar_url: avatar,
    login,
    name,
    bio,
  } = useSelector((state) => state.user.user);

  return (
    <div className={styles.outer}>
      <img src={avatar} alt={login} className={styles.avatar} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.login}>
        (<strong> {login} </strong>)
      </p>
      <p className={styles.bio}>{bio}</p>
      <button className={styles.btn}>Followers</button>
    </div>
  );
};

export default User;
