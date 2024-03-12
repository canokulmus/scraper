import { People } from "@mui/icons-material";
import SignIn from "layouts/authentication/sign-in";
import Users from "layouts/users";
import Dashboard from "layouts/dashboard";
import ScrapeData from "layouts/scrape";
import { BsFillPersonFill, BsDatabaseAdd } from "react-icons/bs";

const routes = [
  // {
  //   type: "collapse",
  //   name: "Dashboard",
  //   key: "dashboard",
  //   route: "/dashboard",
  //   icon: <IoHome size="15px" color="inherit" />,
  //   component: Dashboard,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Products",
  //   key: "products",
  //   route: "/products",
  //   icon: <IoRocketSharp size="15px" color="inherit" />,
  //   component: Products,
  //   noCollapse: true,
  // },
  {
    type: "collapse",
    name: "Scrape Data",
    key: "scrape",
    route: "/scrape",
    icon: <BsDatabaseAdd size="15px" color="inherit" />,
    component: ScrapeData,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Product Details",
  //   key: "productDetails",
  //   route: "/products/:id",
  //   icon: <IoRocketSharp size="15px" color="inherit" />,
  //   component: ProductDetails,
  //   noCollapse: true,
  //   noLink: true,
  // },
  {
    type: "collapse",
    name: "Users",
    key: "users",
    route: "/users",
    icon: <People size="15px" color="inherit" />,
    component: Users,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "login",
    route: "/login",
    icon: <BsFillPersonFill size="15px" color="inherit" />,
    component: SignIn,
    noCollapse: true,
  },
];

export default routes;
