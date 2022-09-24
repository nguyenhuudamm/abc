import Home from './pages/Home'
import CategoryDetail from './pages/Home/Dashboard/CategoryDetail'
import NewsDetail from './pages/Home/Dashboard/NewsDetail'
import ProductDetail from './pages/Home/Dashboard/ProductDetail'
import NotFound from './pages/_404'

const route = [
    { path: '/', exact: true, name: 'Home', component: <Home /> },
    { path: '/san-pham/:id', exact: true, name: 'ProductDetail', component: <ProductDetail /> },
    { path: '/danh-muc/:seo', exact: true, name: 'CategoryDetail', component: <CategoryDetail /> },
    { path: '/tin-tuc/:seo', exact: true, name: 'NewsDetail', component: <NewsDetail /> },
    { path: '/*', exact: true, name: 'Product detail', component: <NotFound/>},
]

export default route