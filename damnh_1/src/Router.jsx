import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/_404'
import Search from './pages/Dashboard/Search'

const route = [
    { path: '/', exact: true, name: 'Dashboard', component: <Dashboard /> },
    { path: '/home', exact: true, name: 'Search', component: <Search /> },
]

export default route