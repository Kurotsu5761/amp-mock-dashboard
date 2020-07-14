import React from "react";
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const User = React.lazy(() => import("./views/users"));
const Users = React.lazy(() => import("./views/dashboard/table"));
const Articles = React.lazy(() => import("./views/articles"));
const CreateArticle = React.lazy(() => import("./views/articles/forms"));
const Events = React.lazy(() => import("./views/events"));
const CreateEvent = React.lazy(() => import("./views/events/forms"));
const Settings = React.lazy(() => import("./views/settings"));

const routes = [
  { path: "/", exact: true, name: "首页" },
  { path: "/dashboard", name: "总页", component: Dashboard },
  { path: "/users", exact: true, name: "用户", component: Users },
  { path: "/users/:id", exact: true, name: "用户资料", component: User },
  {
    path: "/articles/:id/edit",
    exact: true,
    name: "更改文章",
    component: CreateArticle,
  },
  {
    path: "/articles/create",
    exact: true,
    name: "创作文章",
    component: CreateArticle,
  },
  { path: "/articles", exact: true, name: "文章目录", component: Articles },
  { path: "/events", exact: true, name: "活动目录", component: Events },
  {
    path: "/events/:id/edit",
    exact: true,
    name: "更改活动",
    component: CreateEvent,
  },
  {
    path: "/events/create",
    exact: true,
    name: "创作活动",
    component: CreateEvent,
  },
  {
    path: "/setting",
    exact: true,
    name: "设定",
    component: Settings,
  },
];

export default routes;
