




import { combineReducers } from "redux";

import authReducer from "./authReducer";
import workspaceReducer from "./workspaceReducer";
import dashboardReducer from "./dashboardReducer";
import widgetReducer from "./widgetReducer";
import memberReducer from "./memberReducer";
import analyticsReducer from "./analyticsReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({

  auth: authReducer,

  workspaces: workspaceReducer,

  dashboards: dashboardReducer,

  widgets: widgetReducer,

  members: memberReducer,

  analytics: analyticsReducer,

  filters: filterReducer,

});

export default rootReducer;