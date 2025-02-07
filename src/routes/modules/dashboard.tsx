import React from "react";
import lazyLoad from "@/routes/utils/lazyLoad";
import { LayoutIndex } from "@/routes/constant";
import { RouteObject } from "@/routes/interface";

// dashboard 模块
const dashboardRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,

    meta: {
      title: "Dashboard",
    },
    children: [
      {
        path: "/dashboard/dataVisualize",
        element: lazyLoad(
          React.lazy(() => import("@/pages/dashboard/data-visualize/index"))
        ),
        meta: {
          requiresAuth: true,
          title: "数据可视化",
          key: "dataVisualize",
        },
      },
      // {
      //   path: "/dashboard/embedded",
      //   element: lazyLoad(
      //     React.lazy(() => import("@/pages/dashboard/embedded/index"))
      //   ),
      //   meta: {
      //     requiresAuth: true,
      //     title: "内嵌页面",
      //     key: "embedded",
      //   },
      // },
    ],
  },
];

export default dashboardRouter;
