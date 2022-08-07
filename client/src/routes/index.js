import { useRoutes } from "react-router-dom";

import config from "config";
import AuthRoutes from "./AuthRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([AuthRoutes], config.basename);
}
