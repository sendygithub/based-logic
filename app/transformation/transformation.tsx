"use client";

import React, { useState } from "react";

export function TransformasiData() {
  // 1. Data awal (Array angka)
  const [angkaAsal] = useState([2, 5, 8, 12, 20]);
  const [hasilTransformasi, setHasilTransformasi] = useState<number[]>([]);

  // Alur Logika: Ubah setiap data menjadi bentuk lain
  const lipatGandakan = () => {
    // .map() secara otomatis:
    // 1. Ambil satu angka
    // 2. Kalikan dengan 2
    // 3. Simpan ke dalam array baru (hasil)
    const hasil = angkaAsal.map((angka) => {
      return angka * 2;
    });

    setHasilTransformasi(hasil);
  };

  return (

    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        

        {/* BAGIAN KANAN: Form Input */}


    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Double It! 🚀
        </h2>

        {/* Barisan Angka Asal */}
        <div className="mb-8 text-center">
          <p className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">Angka Asal</p>
          <div className="flex gap-2 justify-center">
            {angkaAsal.map((a, i) => (
              <span key={i} className="bg-slate-200 text-slate-700 w-10 h-10 flex items-center justify-center rounded-lg font-bold">
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Tombol Aksi */}
        <button
          onClick={lipatGandakan}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition-all transform active:scale-95 mb-8"
        >
          Kalikan Semua x2
        </button>

        {/* Hasil Transformasi */}
        {hasilTransformasi.length > 0 && (
          <div className="text-center animate-in fade-in zoom-in duration-300">
            <p className="text-sm font-medium text-indigo-500 mb-2 uppercase tracking-wider">Hasil Baru</p>
            <div className="flex gap-2 justify-center">
              {hasilTransformasi.map((h, i) => (
                <span key={i} className="bg-blue-700 text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold shadow-lg shadow-indigo-200">
                  {h}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <p className="mt-6 text-slate-400 text-sm italic">
        Logika: [2, 5, 8] → .map(x * 2) → [4, 10, 16]
      </p>
    </div>

    {/* BAGIAN KIRI: Keterangan/Informasi */}
        <div className="w-full md:w-1/2 bg-blue-600 p-8 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-blue-100 mb-6">
            Silakan isi formulir di samping untuk memberikan masukan atau pertanyaan kepada tim kami. Kami akan merespon dalam waktu 24 jam.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span>📍</span>
              <p>Jl. Sudirman No. 123, Jakarta</p>
            </div>
            <div className="flex items-center space-x-3">
              <span>📧</span>
              <p>support@perusahaan.com</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TransformasiData