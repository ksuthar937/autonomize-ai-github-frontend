import styles from "./UserCard.module.css";

const UserCard = ({ avatar, login }) => {
  return (
    <div className={styles.outer}>
      <img className={styles.avatar} src={avatar} alt="name" />
      <div className={styles.desc}>
        <h3>{login}</h3>
      </div>
    </div>
  );
};

export default UserCard;
