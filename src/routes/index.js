import { 
    Article,
    ArticleEdit,
    Dashboard,
    Login,
    Notfound,
    Settings 
} from "../views"//引入页面

//login 页面 /404页面
export const mainRoute = [
    {
        pathname:"/login",
        component:Login
    },
    {
        pathname:"/404",
        component:Notfound
    }
]

// /admin/XXX dashboard article articleEdit settings 管理页面
export const admainRoute = [
    {
        pathname:"/admin/dashdoard",
        component:Dashboard,
    },
    {
        pathname:"/admin/article",
        component:Article,
        exact:true // 配置APP内置路由器需要exact属性
    },
    {
        pathname:"/admin/article/edit/:id",
        component:ArticleEdit,
    },
    {
        pathname:"/admin/settings",
        component:Settings,
    },
]

