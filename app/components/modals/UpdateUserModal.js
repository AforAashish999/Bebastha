'use client'
import { useActionState, useEffect } from 'react'
import { updateClientAction } from '../../actions/client.action'
import { toast } from 'sonner'

const projectStatus = [
  { label: 'OnGoing', color: 'bg-yellow-500' },
  { label: 'Completed', color: 'bg-green-500' },
  { label: 'Pending', color: 'bg-purple-500' },
  { label: 'Cancelled', color: 'bg-red-500' },
  { label: 'Untouched', color: 'bg-gray-500' }
]

export default function UpdateUserModal ({ closeModal, singleClient }) {
  const [state, formAction] = useActionState(updateClientAction, null)

  useEffect(() => {
    if (state?.success === true) {
      toast.success('Client Updated succesfully')
      closeModal()
    } else if (state?.success === false) {
      toast.error(state.message)
    }
  }, [state])

  return (
    <div className='h-screen backdrop-blur-md fixed inset-0 flex justify-center items-center z-500 '>
      <form
        action={formAction}
        className='bg-white shadow-xl min-h-1/2 min-w- w-3/9 p-6 rounded-xl space-y-2 flex flex-col'
      >
        <input type='hidden' name='id' value={singleClient.id} />

        <div className='flex flex-col space-y-1'>
          <label className='text-sm'>Name</label>
          <input
            name='name'
            type='text'
            defaultValue={singleClient.name}
            className='bg-white focus:outline-none rounded-lg p-1 caret-green-500 opacity-50 border '
          />
        </div>

        <div className='flex flex-col space-y-1'>
          <label className='text-sm'>Email</label>
          <input
            name='email'
            type='email'
            defaultValue={singleClient.email}
            className='bg-white  w- fit focus:outline-none rounded-lg p-1 caret-green-500 opacity-50 border'
          />
        </div>

        <div className='flex flex-col space-y-1'>
          <label className='text-sm'>Address</label>
          <input
            name='address'
            type='text'
            defaultValue={singleClient.address}
            className='bg-white  w- fit focus:outline-none rounded-lg p-1 caret-green-500 opacity-50 border'
          />
        </div>

        <div className='flex flex-col space-y-1'>
          <label className='text-sm'>Contact No</label>
          <input
            name='phone_no'
            type='number'
            defaultValue={singleClient.phone_no}
            className='bg-white w- fit focus:outline-none rounded-lg p-1 caret-green-500 opacity-50 border'
          />
        </div>

        <div className='flex flex-col space-y-1'>
          <label className='text-sm'>Organization</label>
          <input
            name='organization'
            type='text'
            defaultValue={singleClient.organization}
            className='bg-white w- fit focus:outline-none rounded-lg p-1 caret-green-500 opacity-50 border'
          />
        </div>

        <div className='flex flex-col space-y-1'>
          <label className='text-sm'>Project</label>
          <input
            name='project'
            type='text'
            defaultValue={singleClient.project}
            className='bg-white focus:outline-none rounded-lg p-1 caret-green-500 opacity-50 border'
          />
        </div>


        {/* status buttons */}
        <div className=''>
            <p className='text-sm'> Status: </p>
          {
            <div className=' grid grid-cols-3 '>
              {projectStatus.map(item => (
                <div 
                key={item.label}
                className='gap-x-2 flex'>
                  <input
                  name="status"
                   type='radio'
                   value={item.label}
                   defaultChecked={singleClient.status === item.label}
                    />
                  {item.label}
                </div>
              ))}
            </div>
          }
        </div>

         <div className='flex gap-6 pt-3'>
          <button
            type='submit'
            className='flex-1 bg-[#27ac52] hover:bg-[#00bf63] cursor-pointer transition-all duration-100 ease-in text-white py-2 rounded-2xl font-semibold '
          >
            Submit
          </button>
          <button
            type='button'
            onClick={closeModal}
            className='flex-1 bg-gray-500 hover:bg-gray-300 cursor-pointer transition-all duration-100 ease-in text-white rounded-2xl font-semibold '
          >
            Cancel
          </button>
        </div>

        {state?.success === false && (
          <p style={{ color: 'red' }}>{state.message}</p>
        )}
      </form>
    </div>
  )
}
