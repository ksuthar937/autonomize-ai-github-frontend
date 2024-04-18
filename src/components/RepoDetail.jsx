import Github from "../assets/githubName.svg";
import Verified from "../assets/verified.svg";
import { formatDate } from "../utils/helper";

import styles from "./RepoDetail.module.css";

const RepoDetail = ({ data }) => {
  const { name, description, owner, created_at, updated_at, topics } = data;

  return (
    <div className={styles.outer}>
      <img src={owner.avatar_url} alt="" className={styles.avatar} />
      <h2 className={styles.name}>Application</h2>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.verified}>
        <h5>Verifiied by GitHub</h5>
        <img src={Verified} alt="" width={15} />
      </div>
      <p className={styles.verifiedText}>
        GitHub confirm that this app meets the requirement for verification
      </p>
      <p className={styles.border}></p>
      <h3 className={styles.description}>{description}</h3>

      {topics.length > 0 ? (
        <>
          <h4>Topics :</h4>
          <div className={styles.topics}>
            {topics.map((topic, index) => (
              <p key={index}>{topic}</p>
            ))}
          </div>
        </>
      ) : null}

      <p className={styles.border}></p>

      <div className={styles.date}>
        <p>Created At : {formatDate(created_at)} </p>
        <p>Updated At : {formatDate(updated_at)} </p>
      </div>
      <img src={Github} alt="logo" width={100} />
    </div>
  );
};

export default RepoDetail;
