import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";

import { useDispatch, useSelector } from "react-redux";

import { getWidgets, updateLayout } from "../redux/actions/widgetActions";

import WidgetCard from "../components/widgets/WidgetCard";
import LineChartWidget from "../components/widgets/LineChartWidget";
import BarChartWidget from "../components/widgets/BarChartWidget";
import KPIWidget from "../components/widgets/KPIWidget";
import TableWidget from "../components/widgets/TableWidget";

import FilterPanel from "../components/FilterPanel";
import AddWidgetModal from "../components/AddWidgetModal";

import socket from "../sockets/socket";

import { Responsive } from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = Responsive;

function Dashboard() {
  const dispatch = useDispatch();

  const dashboardId = localStorage.getItem("dashboardId");
  const workspaceId = localStorage.getItem("workspaceId");
  // const role = localStorage.getItem("role");
  const role = useSelector((state) => state.workspaces.role);

  if (!dashboardId) {
    return <Navigate to="/workspaces" />;
  }
  console.log("ROLE =", role);

  const widgets = useSelector((state) => state.widgets.widgets) || [];
  console.log("WIDGETS =", widgets);

  const analytics = useSelector((state) => state.analytics.analytics) || [];

  // Load widgets + join socket room
  useEffect(() => {
    if (dashboardId) {
      dispatch(getWidgets(dashboardId));
    }

    if (workspaceId) {
      socket.emit("joinWorkspace", workspaceId);
    }
  }, [dashboardId, workspaceId]);

  useEffect(() => {
    const refreshWidgets = () => {
      dispatch(getWidgets(dashboardId));
    };

    socket.on("widget:created", refreshWidgets);
    socket.on("widget:deleted", refreshWidgets);
    socket.on("layout:updated", refreshWidgets);
    socket.on("widget:pinned", refreshWidgets);
    socket.on("widget:moved", refreshWidgets);
    socket.on("widget:resized", refreshWidgets);

    return () => {
      socket.off("widget:created");
      socket.off("widget:deleted");
      socket.off("layout:updated");
      socket.off("widget:pinned");
      socket.off("widget:moved");
      socket.off("widget:resized");
    };
  }, [dashboardId]);
  useEffect(() => {
    socket.on("widget:created", () => {
      console.log("CREATED EVENT RECEIVED");
      dispatch(getWidgets(dashboardId));
    });

    socket.on("widget:deleted", () => {
      console.log("DELETED EVENT RECEIVED");
      dispatch(getWidgets(dashboardId));
    });

    socket.on("layout:updated", () => {
      console.log("LAYOUT EVENT RECEIVED");
      dispatch(getWidgets(dashboardId));
    });

    socket.on("widget:pinned", () => {
      console.log("PIN EVENT RECEIVED");
      dispatch(getWidgets(dashboardId));
    });
  }, []);
  useEffect(() => {

  const joinRoom = () => {

    if (workspaceId) {

      socket.emit("joinWorkspace", workspaceId);

      console.log("Joined workspace:", workspaceId);
    }
  };

  if (!socket.connected) {
    socket.connect();
  }

  socket.on("connect", joinRoom);

  if (socket.connected) {
    joinRoom();
  }

  return () => {
    socket.off("connect", joinRoom);
  };

}, [workspaceId]);

  const sortedWidgets = [...widgets].sort(
    (a, b) => Number(b.isPinned) - Number(a.isPinned),
  );

  const layouts = {
    lg: sortedWidgets.map((widget) => ({
      i: widget.id,
      x: widget.WidgetLayout?.x || 0,
      y: widget.WidgetLayout?.y || 0,
      w: widget.WidgetLayout?.w || 4,
      h: widget.WidgetLayout?.h || 5,
    })),
  };

  return (
    <MainLayout>
      <div className="bg-gray-100 min-h-screen p-4">
        {/* Top Controls */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-6">
          <div className="w-full lg:w-1/2">
            <FilterPanel />
          </div>

          <div>{role !== "VIEWER" && <AddWidgetModal />}</div>
        </div>

        <ResponsiveGridLayout
          width={1200}
          layouts={layouts}
          cols={{
            lg: 12,
            md: 10,
            sm: 6,
            xs: 1,
          }}
          breakpoints={{
            lg: 1200,
            md: 996,
            sm: 768,
            xs: 480,
          }}
          rowHeight={80}
          isDraggable={role !== "VIEWER"}
          isResizable={role !== "VIEWER"}
          onDragStop={(layout, oldItem, newItem) => {
            if (role === "VIEWER") return;
            dispatch(
              updateLayout({
                widgetId: newItem.i,
                x: newItem.x,
                y: newItem.y,
                w: newItem.w,
                h: newItem.h,
                workspaceId,
              }),
            );
          }}
          onResizeStop={(layout, oldItem, newItem) => {
            if (role === "VIEWER") return;
             console.log("RESIZE", newItem);
            dispatch(
              updateLayout({
                widgetId: newItem.i,
                x: newItem.x,
                y: newItem.y,
                w: newItem.w,
                h: newItem.h,
                workspaceId,
              }),
            );
          }}
        >
          {widgets.map((widget) => (
            <div key={widget.id}>
              <WidgetCard widget={widget} title={widget.title}>
                {widget.type === "LINE_CHART" && (
                  <LineChartWidget data={analytics} />
                )}

                {widget.type === "BAR_CHART" && (
                  <BarChartWidget data={analytics} />
                )}

                {widget.type === "KPI_CARD" && <KPIWidget />}

                {widget.type === "TABLE" && <TableWidget data={analytics} />}
              </WidgetCard>
            </div>
          ))}
        </ResponsiveGridLayout>

        {/* Empty State */}
        {widgets.length === 0 && (
          <div className="bg-white rounded-xl shadow p-10 text-center mt-10">
            <h2 className="text-2xl font-semibold text-gray-700">
              No widgets available
            </h2>

            <p className="text-gray-500 mt-2">
              Click "Add Widget" to create your first widget.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Dashboard;
