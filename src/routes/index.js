import routesConfig from '~/config/routes';

// Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Khong can dang nhap van xem duoc
const publicRoutes = [
    { path: routesConfig.home, components: Home },
    { path: routesConfig.following, components: Following },
    { path: routesConfig.profile, components: Profile },
    { path: routesConfig.upload, components: Upload, layout: HeaderOnly },
    { path: routesConfig.search, components: Search, layout: null },
];

// Dang nhap moi xem duoc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
