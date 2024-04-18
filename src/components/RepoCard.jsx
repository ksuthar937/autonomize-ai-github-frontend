import { useDispatch } from "react-redux";
import { getRepo } from "../redux/userSlice";

import styles from "./RepoCard.module.css";

const RepoCard = ({ avatar, name, desc, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.outer} onClick={() => dispatch(getRepo(id))}>
      <img className={styles.avatar} src={avatar} alt="name" />
      <div className={styles.desc}>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default RepoCard;
