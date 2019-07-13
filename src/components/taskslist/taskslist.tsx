import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ListConnected } from "../list/list";
import { EditTaskConnected } from "../editTask/editTask";
import { loadTasks } from "../../actions/actions";
import { connect } from "react-redux";

import s from "./taskslist.module.scss";

export function TasksList({ getTasks, appData }: any) {

  useEffect(() => {
    getTasks();
  }, []);

  if (!appData.data) return <div>...loading</div>;
  return (
    <Router>
      <main className={s.appWrapper}>
        <Route
          path="/"
          exact
          render={({history}) => (
            <ListConnected history={history} tasks={appData.data}/>
          )}
        />
        <Route
          path="/:taskID"
          render={({ match, history }) => (
            <EditTaskConnected
              history={history}
              match={match}
              tasks={appData.data}
            />
          )}
        />
      </main>
    </Router>
  );
}

const mapStateToProps = (store: any) => ({ appData: { ...store } });

const mapDispatchToProps = { getTasks: loadTasks };

export const TaskListConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList);
