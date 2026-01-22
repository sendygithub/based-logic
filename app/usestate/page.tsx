"use client"

import { useState } from 'react'

export default function Page() {
    const [ongko, rubahAngka] = useState("");
    const [hasil, setHasil] = useState(0);


    const X =()=>{
        setHasil(Number(ongko))
    }




    return (
        <div className='item-center justify-center p-6 md:p-10'>
            
            <input
            type='text'
            value={ongko}
            onChange={(e)=> rubahAngka(e.target.value)}
            className='bg-gray-100 hover:bg-gray-200'
            placeholder='input angka'
            />


            <button onClick={X} className='bg-red-500 rounded-full'>ubah angka</button>
            <p>hasil :{hasil}</p>
            
        </div>
    );
}