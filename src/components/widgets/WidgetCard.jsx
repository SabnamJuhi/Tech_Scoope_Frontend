

import {
  Pin,
  Trash2,
  MoreVertical
} from "lucide-react";

import { useDispatch } from "react-redux";
import {
  deleteWidget,
  pinWidget
} from "../../redux/actions/widgetActions";

function WidgetCard({
  widget,
  title,
  children,
}) {

  const dispatch = useDispatch();

  const workspaceId =
    localStorage.getItem("workspaceId");

  const role =
    localStorage.getItem("role");

  return (
    <div className="bg-white rounded-2xl shadow h-full flex flex-col">

      <div className="flex justify-between items-center px-5 py-4 border-b">

        <div className="flex gap-3">

          <h2 className="font-bold">
            {title}
          </h2>

          {role !== "VIEWER" && (
            <Pin
              size={18}
              className={
                widget.isPinned
                  ? "text-blue-600 cursor-pointer"
                  : "cursor-pointer"
              }
              onClick={() =>
                dispatch(pinWidget(widget.id))
              }
            />
          )}
        </div>

        {role !== "VIEWER" && (
          <Trash2
            size={18}
            className="cursor-pointer text-red-500"
            onClick={() =>
              dispatch(
                deleteWidget(
                  widget.id,
                  workspaceId
                )
              )
            }
          />
        )}

      </div>

      <div className="flex-1 p-4 min-h-0">
        {children}
      </div>

    </div>
  );
}

export default WidgetCard;