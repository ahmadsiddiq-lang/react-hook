import { useState } from "react"
import PropTypes from 'prop-types';
import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tailwind-merge";


const Dropdown = ({
  options = [],
  placeholder = 'Pilih',
  onChange
}) => {
  const [textTitle, setTitle] = useState(placeholder)
  const [show, setShow] = useState(false)

  const handlePress = (item) => {
    setTitle(item.label)
    onChange(item.value)
    setShow(false)
  }

  return (
    <div className="relative" >
      <button
        onClick={() => setShow(!show)}
        className="border px-5 py-2 rounded-md flex justify-between items-center gap-10 min-w-[300px]">{textTitle} <IoIosArrowDown className={twMerge(show ? 'rotate-180' : '', 'mt-1')} /></button>
      {
        show &&
        <div className="absolute w-full border rounded-md mt-1 flex flex-col">
          {
            options.map((item, index) => (
              <button
                onClick={() => handlePress(item)}
                key={item + index}
                className={twMerge("text-sm text-start h-10 px-3 hover:bg-gray-50", options.length != (index + 1) ? 'border-b' : '')}>{item.label}</button>
            ))
          }
        </div>
      }
    </div>
  )
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Dropdown