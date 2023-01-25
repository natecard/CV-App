import React from 'react';

export default function Header(props) {
  return (
    <div className="pb-3 text-center rounded-b bg-stratos-600 text-stratos-50 drop-shadow-xl">
      <div className="">
        <div className="flex items-center justify-end pt-4 mx-9">
          <h3 className="mx-3">Write</h3>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              onClick={props.handlePreview}
              type="checkbox"
              className="sr-only peer"
              checked={props.isPreview}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
            <span className="ml-3 font-medium text-md text-stratos-100 dark:text-stratos-100"></span>
          </label>
          <h3 className="mx-3">Preview</h3>
        </div>
        <h5 className="text-2xl">Welcome to</h5>
        <h5 className="text-5xl">CV Builder</h5>
      </div>
    </div>
  );
}
