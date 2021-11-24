import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id", // :以降がurlパラメーターに
    exact: false,
    children: <UrlParameter />
  }
];
