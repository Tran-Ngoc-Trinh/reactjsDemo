import Home from '../pages/Home';
import Upload from '../pages/Upload';

// router không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/upload', component: Upload, layout: null },
];

// router cần đăng nhập, chuyển đến login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
