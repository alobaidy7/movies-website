import React from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";


const RemoveModal = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }




  return (
    <>
      <button class="px-4 py-2 rounded-xl bg-red-400 text-white font-delete text-xs hover:opacity-90" onClick={openModal}>حذف</button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black  bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[var(--red)] text-white  p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between w-full "
                  >
                    <p className="text-lg font-medium leading-6 ">
                      Are you sure to remove {props.item} ?
                    </p>

                  </Dialog.Title>

                  <div className="flex   items-center justify-evenly w-full mt-4">
                    <button

                      type="button"
                      className="w-[100px] inline-flex justify-center rounded-lg border border-transparent bg-red-500 disabled:text-gray-300 disabled:bg-blue-100 px-4 py-2 font-sans  text-base   font-medium capitalize  focus:outline-none "
                    >
                      Remove
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-[100px] inline-flex justify-center rounded-lg border border-transparent bg-[var(--grey)] disabled:text-gray-300 disabled:bg-blue-100 px-4 py-2 font-sans  text-base   font-medium capitalize   focus:outline-none "
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

    </>
  )
}

export default RemoveModal