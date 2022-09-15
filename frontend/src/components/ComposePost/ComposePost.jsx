import React from "react";
import Gallery from "../../svg/Gallery";
import ButtonNoClassName from "../Button/ButtonNoClassName";



function ComposePost() {
  return (

    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="relative inset-0 overflow-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-md transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white " placeholder="What's on your mind"></textarea>
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div class="mt-2">
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white px-4 py-3 sm:flex sm:justify-between sm:px-6">
              <Gallery />
              <ButtonNoClassName className = {"inline-flex justify-center rounded-full border border-transparent bg-blue-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"} text = {"Post"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>

  )
}

export default ComposePost;