import React from "react";
import {
  CheckCircleIcon,
  XIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { closeNotification } from "../actions";

const NotificationModal = ({ message, type }) => {
  let colorClassName = "",
    btnClassName = "";
  if (type === "success") {
    colorClassName = "bg-green-100 text-green-400 ";
    btnClassName =
      "bg-green-50 text-green-500 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600";
  } else if (type === "alert") {
    colorClassName = "bg-yellow-100 text-yellow-400 ";
    btnClassName =
      "bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-offset-yellow-50 focus:ring-yellow-600";
  }

  const dispatch = useDispatch();
  return (
    <div
      className={`rounded-md ${colorClassName} p-4 absolute top-32 right-5 animate-wiggle`}
    >
      <div className="flex ">
        <div className="flex-shrink-0">
          {type === "success" ? (
            <CheckCircleIcon
              className={`h-5 w-5 ${colorClassName}`}
              aria-hidden="true"
            />
          ) : type === "alert" ? (
            <ExclamationCircleIcon
              className={`h-5 w-5 ${colorClassName}`}
              aria-hidden="true"
            />
          ) : (
            ""
          )}
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium ${colorClassName}`}>{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className={`inline-flex rounded-md p-1.5  focus:outline-none focus:ring-2 focus:ring-offset-2 ${btnClassName}`}
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
