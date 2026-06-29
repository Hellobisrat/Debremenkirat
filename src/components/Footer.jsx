


const Footer = () => {
  return (
    <div className="
      fixed bottom-0  left-0 right-0 z-50 
      bg-yellow-300/20 dark:bg-gray-800 
      shadow-md p-2 flex justify-around items-center 
      text-gray-700 dark:text-gray-200
      backdrop-blur-sm
      transition-colors duration-300 h-[55px]
    ">
      <div className="flex flex-col">
        <p className="font-bold text-lg text-slate-500">Services</p>
          <span className="text-sm font-semibold text-slate-400"> Mezmur</span>
           <span className="text-sm font-semibold text-slate-400"> Mestengido</span>

      </div>
      <div className="flex flex-col">
        <p className="font-bold text-lg text-slate-500">Debre Menkirat St. George</p>
      <span className="text-sm font-thin text-slate-300"> 5005 Ben Devis, Sachse Tx 75048</span>
      </div>
      
    </div>
  )
}

export default Footer
