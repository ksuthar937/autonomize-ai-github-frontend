import SearchBox from "./components/SearchBox";
import Dashboard from "./components/Dashboard";

import { useSelector } from "react-redux";
import { Hourglass } from "react-loader-spinner";

import styles from "./App.module.css";

function App() {
  const { isUser, isLoading } = useSelector((state) => state.user);

  return (
    <>
      {isLoading ? (
        <Hourglass
          visible={true}
          height="40"
          width="40"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass={styles.loader}
          colors={["#306cce", "#72a1ed"]}
        />
      ) : (
        <div className={styles.container}>
          {isUser ? <Dashboard /> : <SearchBox />}
        </div>
      )}
    </>
  );
}

export default App;
