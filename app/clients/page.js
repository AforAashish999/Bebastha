// import { api } from  '../../../lib/axios'
import axios from 'axios'
// import api from "../../lib/axios";
import AddCustomer from '../components/actions/AddCustomer'
import SearchSort from '../components/actions/SearchSort'
import DEV from '../components/actions/DEV'

export default async function page() {
  const { data } = await axios.get('http://localhost:5000/customers')
  // const {data} = await api.get("/customers");
  console.log(data)

  return (
    <div className=' w-full flex flex-col justify- center pt-10 px-10 items -center  space-y-8 '>
      <div className='flex justify-end'>
        <AddCustomer />
      </div>

      <div className='flex justify- start '>
        <SearchSort />
      </div>

      <table className=' w-full rounded-lg overflow-hidden shadow-lg'>
        <thead className=''>
          <tr className=' bg-gray-50 text-left border-gray-200 border-b  '>
            <th className='py-2 pl-2 text-sm text-gray-500 font-semibold'>
              {' '}
              Project{' '}
            </th>
            <th className=' text-sm text-gray-500 font-semibold '> Name </th>
            <th className='text-sm text-gray-500 font-semibold'> Contact </th>
            <th className='text-sm text-gray-500 font-semibold '> Address </th>
            <th className='text-sm text-gray-500 font-semibold '> Actions </th>
          </tr>
        </thead>

        <tbody className='min-h-40'>
          {data.map(item => (
            <tr
              key={item.id}
              className='border-gray-200 border-b  text-gray-700 '
            >
              <td className='bg-white pl-2 '> {item.project} </td>
              <td className='bg-white'> {item.name} </td>
              <td className='bg-white  py-2 '>
                {' '}
                <p>{item.email}</p> <p>{item.phone_no}</p>{' '}
              </td>
              <td className='bg-white '> {item.address} </td>
              <td className='bg-white '>
                {' '}
                <DEV />{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
