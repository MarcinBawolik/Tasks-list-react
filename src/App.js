import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom"
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink } from "./styled";
import Navigation from "./features/tasks/Navigation";


export default () => (
    <HashRouter>
            <Navigation>
            <ul>
                <li><StyledNavLink to="/zadania">zadania
                </StyledNavLink></li>
                <li><StyledNavLink to="/autor">O autorze
                </StyledNavLink></li>
            </ul>
            </Navigation>
            <Switch>
            <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
    </HashRouter>
);