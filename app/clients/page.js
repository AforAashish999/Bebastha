export const dynamic = "force-dynamic";
import AddCustomer from "../components/customer/AddCustomer";
import Search from "../components/customer/Search";
import ClientTable from "../components/customer/ClientTable";
import Sort from "../components/customer/Sort";
import Filter from "../components/customer/Filter";


export default async function page({searchParams}) {
  const params = await searchParams;

  return (
    <div className='w-full flex flex-col pt-6 px -6 space-y-8'>

      {/* add customer */}
      <div className='flex justify-end'>
        <AddCustomer />  
      </div>

      {/* Search sort */}
      <div className='flex gap-x-4 justify-start'>
        <Search/>
        <Filter />
        <Sort />
      </div>

      <ClientTable
       search={ params.search || ""} 
       _sort={ params._sort || "" }
       _order={ params._order || "" }
       />
    </div>
  )
}
