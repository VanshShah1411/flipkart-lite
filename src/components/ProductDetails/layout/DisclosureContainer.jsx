import React from "react";
import { Disclosure, Dialog, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

cons24DisclosureContainer = ({ title, desc }) => {
  return (
    <div className="pb-5 border-b-2 border-gray-200 mb-4">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between items-center w-full px-4 text-sm font-medium text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <h1 className="text-lg tracking-wide font-semibold">{title}</h1>
              <ChevronUpIcon
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-blue-500`}
              />
            </Disclosure.Button>
            <Transition
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="transform -translate-y-24 opacity-0"
              enterTo="transform translate-y-0 opacity-1"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="transform translate-y-0 opacity-1"
              leaveTo="transform -translate-y-24 opacity-0"
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md tracking-wide text-gray-500">
                {desc}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default DisclosureContainer;
