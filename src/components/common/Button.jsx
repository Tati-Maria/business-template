

const Button = ({text, color=false}) => {
  return (
    <button
    aria-label={text}
    className={`${color ? 'bg-white text-black hover:bg-white/80' : 'bg-black text-white hover:bg-black/80'} px-8 py-4 font-extralight leading-[26px] uppercase text-sm tracking-widest`} 
    >
      {text}
    </button>
  )
}

export default Button;