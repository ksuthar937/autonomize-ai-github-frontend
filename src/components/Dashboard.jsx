import User from "./User";
import RepoCard from "./RepoCard";

import styles from "./Dashboard.module.css";
import { useSelector } from "react-redux";
import RepoDetail from "./RepoDetail";

const Dashboard = () => {
  const { repos, isRepoDetail, repoDetailId } = useSelector(
    (state) => state.repos
  );

  const repoDetail = repos.filter((repo) => repo.id === repoDetailId);

  console.log(repoDetail);

  return (
    <div className={styles.outer}>
      {isRepoDetail ? (
        <RepoDetail data={repoDetail[0]} />
      ) : (
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
      )}
    </div>
  );
};

export default Dashboard;
