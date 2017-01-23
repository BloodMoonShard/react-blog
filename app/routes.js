import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { Formblog } from './components/Formblog/Formblog';


export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />
		<Route path="/add" component={Formblog} />
        <Route path="/edit" component={Formblog} />
    </Route>
);
