// export const dynamic = "force-dynamic";
// import axios from 'axios'
// import api from "../../../lib/axios"
import ClientService from "@/services/client.service"
import DEV from "./DEV"
  
const ProjectStatus = [
  { label: 'OnGoing', color: 'bg-yellow-500' },
  { label: 'Completed', color: 'bg-green-500' },
  { label: 'Pending', color: 'bg-purple-500' },
  { label: 'Cancelled', color: 'bg-red-500' },
  { label: 'Untouched', color: 'bg-gray-500' }
]
export default async function ClientTable( { search, _sort, _order } ) {
  // 1st way
  // const { data } = await axios.get('http://localhost:5000/clients')

  // 2nd way
  // const {data} = await api.get("/clients");

  // 3rd way
  console.log("SERVER SEARCH:", search);
  const clients = await ClientService.getAll( { search, _sort, _order  } );

  return (  
    <div >
      <table className=' w-full rounded-lg overflow-hidden shadow-lg'>
        <thead className=''>
          <tr className=' bg-gray-50 text-left border-gray-200 border-b  '>
             <th className=' text-sm text-gray-500 font-semibold '> Status </th>
            <th className='py-2 pl-2 text-sm text-gray-500 font-semibold'>Project</th>
            <th className=' text-sm text-gray-500 font-semibold '> Name </th>
            <th className=' text-sm text-gray-500 font-semibold '> Organization </th>
            <th className='text-sm text-gray-500 font-semibold'> Contact </th>
            <th className='text-sm text-gray-500 font-semibold '> Address </th>
            <th className='text-sm text-gray-500 font-semibold '> Actions </th>
          </tr>
        </thead>

        <tbody className='min-h-40'>
          {clients.map(item => (
            <tr
              key={item.id}
              className='border-gray-200 border-b  text-gray-700  '
            >
              <td className='bg-white pl-2 p-1   '>
                <div className="flex items-center gap-x-2">
                <div className={`h-2 w-2 rounded-full
                      ${ProjectStatus.find( i => i.label === item.status )?.color}
                  `} ></div>
                 <p className="text-xs text-gray-500">{item.status}</p>
                </div>
                  </td>
              <td className='bg-white pl-2 p-1 '> {item.project} </td>
              <td className='bg-white'> {item.name} </td>
               <td className='bg-white'> {item.organization} </td>
              <td className='bg-white max-w-50 truncate '>{item.email} </td>
              <td className='bg-white '> {item.address} </td>
              <td className='bg-white '>
                {' '}
                <DEV id={item.id} singleClient={item} /> {' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
