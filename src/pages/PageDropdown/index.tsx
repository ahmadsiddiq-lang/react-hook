import React, { useState } from "react"
import Dropdown from "../../components/dropdown";

const daftar_buah = [
  {
    label: 'Mangga',
    value: 'Mangga'
  },
  {
    label: 'Apel',
    value: 'Apel'
  },
  {
    label: 'Jeruk',
    value: 'Jeruk'
  },
  {
    label: 'Pisang',
    value: 'Pisang'
  },
  {
    label: 'Anggur',
    value: 'Anggur'
  },
  {
    label: 'Strawberi',
    value: 'Strawberi'
  },
  {
    label: 'Nanas',
    value: 'Nanas'
  },
  {
    label: 'Semangka',
    value: 'Semangka'
  },
  {
    label: 'Pepaya',
    value: 'Pepaya'
  },
  {
    label: 'Melon',
    value: 'Melon'
  }
];


const PageDropdown = () => {

  const [buah, setBuah] = useState()

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <h1 className="text-green-700 text-3xl font-bold mb-5 -mt-80">Dropdown</h1>
      <p className="mb-10">Buah yang Anda pilih: <strong>{buah ? buah : 'Belum ada pilihan'}</strong></p>
      <Dropdown
        placeholder="Pilih buah"
        options={daftar_buah}
        onChange={(e) => setBuah(e)}
      />
    </div>
  )
}

export default PageDropdown