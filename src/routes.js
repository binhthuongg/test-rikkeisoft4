import Home from './pages/Home';
import Login from './pages/Login';
import PostAdd from './pages/PostAdd';
import PostSingle from './pages/PostSingle';
import Register from './pages/Register';

export const ROUTES_MAIN = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/login',
		component: Login,
		exact: true,
	},
	{
		path: '/register',
		component: Register,
		exact: true,
	},
	{
		path: '/post-detail/:id',
		component: PostSingle,
		exact: true,
	},
	{
		path: '/post/add',
		component: PostAdd,
		exact: true,
	},
];
