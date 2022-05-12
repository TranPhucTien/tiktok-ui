// Layouts
import {HeaderOnly } from '~/components/Layout'

// Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'

// Khong can dang nhap van xem duoc
const publicRoutes = [
    { path: '/', components: Home },
    { path: '/following', components: Following },
    { path: '/profile', components: Profile },
    { path: '/upload', components: Upload, layout: HeaderOnly },
    { path: '/search', components: Search, layout: null },
]

// Dang nhap moi xem duoc
const privateRoutes = [

]

export { publicRoutes, privateRoutes }