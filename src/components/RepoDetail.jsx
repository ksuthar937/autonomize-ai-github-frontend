import Logo from "../assets/github.svg";

import Verified from "../assets/verified.svg";

import styles from "./RepoDetail.module.css";

const RepoDetail = () => {
  return (
    <div className={styles.outer}>
      <img src={Logo} alt="" className={styles.avatar} />
      <h2 className={styles.name}>Application</h2>
      <h1 className={styles.name}>autonomize-ai-github-backend</h1>
      <div className={styles.verified}>
        <h5>Verifiied by GitHub</h5>
        <img src={Verified} alt="" width={15} />
      </div>
      <p>GitHub confirm that this app meets the requirement for verification</p>

      <h4>Topics :</h4>

      <p className={styles.topics}>Mongo</p>

      <h3>Assignment of backend using Node JS</h3>
      <p>Created At : </p>
      <p>Updated At : </p>
    </div>
  );
};

export default RepoDetail;
