import { useDispatch } from "react-redux";
import styles from "./RepoCard.module.css";
import { getRepo } from "../redux/reposSlice";

const RepoCard = ({ avatar, name, desc, data, id }) => {
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
