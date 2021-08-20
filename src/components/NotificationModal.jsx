import React from "react";
import {
  CheckCircleIcon,
  XIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { closeNotification } from "../actions";

const NotificationModal = ({ message, type }) => {
  let color = "";
  if (type === "success") {
    color = "green";
  } else if (type === "alert") {
    color = "yellow";
  }
  const dispatch = useDispatch();
  return (
    <div className={`rounded-md bg-${color}-50 p-4 absolute top-15 right-5`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {type === "success" ? (
            <CheckCircleIcon
              className={`h-5 w-5 text-${color}-400`}
              aria-hidden="true"
            />
          ) : type === "alert" ? (
            <ExclamationCircleIcon
              className={`h-5 w-5 text-${color}-400`}
              aria-hidden="true"
            />
          ) : (
            ""
          )}
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium text-${color}-800`}>{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className={`inline-flex bg-${color}-50 rounded-md p-1.5 text-${color}-500 hover:bg-${color}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${color}-50 focus:ring-${color}-600`}
              onClick={() => dispatch(closeNotification())}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
