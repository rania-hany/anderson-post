import './App.css';
import './Styles/Globals.scss';

import Layout from './components/layout/Layout';
import AllPostsPage from './Pages/AllPostsPage';
import { Route, Switch } from 'react-router-dom';
import PostsPage from './Pages/PostPage';


<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>

function App() {
  return (
    <Layout>
      <Switch>
      <Route path="/" exact>
        <AllPostsPage/>
      </Route>
      <Route path="/post">
        <PostsPage/>
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
