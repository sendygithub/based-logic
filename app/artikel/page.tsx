import Image from 'next/image'
import React from 'react'

const Artikelpage = () => {
  return (
   <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* FORM PRODUCT */}
        <div className='w-full md:w-1/2 p-8'>
        <h2 className='text-2xl font-bold mb-6 text-gray-800'> Tambah artikel baru</h2>
        <form  className='space-y-4'>
            <div>
                <label className='block text-sm font-medium text-gray-700'> Product Name</label>
                    <input
                    name='judul'
                    type='text'
                    required
                    className='mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline:none focus:ring-blue-500 focus:border-blue-500'
                    placeholder='contoh:baju'/>
            </div>

            {/* FORM INPUT */}

            

            <div>
                <label className='block text-sm font-medium text-gray-700'> Kategory</label>
                    <select
                    name='category'
                    className='mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    >
                    <option value='baju'>Cerpen</option>
                    <option value='celana'>Fiksi</option>
                    <option value='sepatu'>Story</option>
                    </select>
            </div>

            <div>
                <label className='block text-sm font-medium text-gray-700'> isi</label>
                    <input
                    name='artikel'
                    type='text'
                    required
                    className='mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline:none focus:ring-blue-500 focus:border-blue-500'
                    placeholder='isi artikel'/>
            </div>
            <button type='submit'
            className='mt-5 w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold'>
                post
            </button>
        </form>
    </div>





    {/* TABLE */}

    <div className="grid grid-cols-3 sm-grid-cols-2 lg-grid-cols-3 gap-3">
        <div>
            <Image className='w-1/2 h-48 pbject-cover' src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" width={500} height={500} alt="IAMGE"></Image>
            <div className='p-5'>
                <h2 className='font-bold text-xl mb-2 text-gray-800'>judul card</h2>
                <p className='text-gray-600 text-sm leading-relaxed'>
                    ini adalah deskripsi
                </p>
            </div>
        </div>

        
    </div>
    













    </div>
</div> 
  )
}

export default Artikelpage