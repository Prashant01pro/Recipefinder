export const Dishes = ({ name, image, recipe }) => {
    return (<>
      <div className="h-[12rem] w-[11rem] border-2 border-solid to-black flex items-center justify-center flex-col bg-slate-800 m-2" >
        <img className="w-full h-[8rem]" src={image} alt={name} />
  
        <h4 className="font-semibold text-sm text-white">{name}</h4>
        <a
          href={recipe}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-sm text-white bg-red-600 rounded px-2 py-1 mt-1 hover:bg-red-700"
        >
          Click for Recipe
        </a>
  
      </div>
    </>)
  }