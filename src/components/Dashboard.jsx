import User from "./User";
import RepoCard from "./RepoCard";

import styles from "./Dashboard.module.css";
import { useSelector } from "react-redux";
import RepoDetail from "./RepoDetail";
import UserCard from "./UserCard";

const Dashboard = () => {
  const { repos, repoDetailId, status, followers } = useSelector(
    (state) => state.user
  );

  const repoDetail = repos.filter((repo) => repo.id === repoDetailId);

  return (
    <div className={styles.outer}>
      {status === "repoList" ? (
        <>
          <User />
          <div className={styles.repos}>
            {repos.map((repo) => (
              <RepoCard
                key={repo.id}
                avatar={repo.owner.avatar_url}
                name={repo.name}
                desc={repo.description}
                id={repo.id}
              />
            ))}
          </div>
        </>
      ) : status === "repoDetail" ? (
        <RepoDetail data={repoDetail[0]} />
      ) : (
        <>
          <User />
          <div className={styles.repos}>
            {followers.map((follower) => (
              <UserCard
                key={follower.id}
                avatar={follower.avatar_url}
                login={follower.login}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
