"use client"
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import AddUserModal from "../modals/AddUserModal";


export default function AddCustomer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-[#27ac52] text-white px-4 py-3 flex items-center rounded-lg gap-x-2 transform transition-all ease-in duration-200 hover:scale-102 cursor-pointer hover:-translate-y-1 hover:bg-[#00bf63] shadow-lg">
        <IoMdAdd className="text-white text-2xl" />
        <p className="font-medium"> Add new Client</p>
      </button>

      {
        open &&
      <AddUserModal closeModal={() => setOpen(false)} />
      }

    </div>
  )
}
