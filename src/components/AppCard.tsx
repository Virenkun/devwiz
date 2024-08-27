import React from 'react'
import ShineBorder from './magicui/shine-border'
import ShinyButton from './magicui/shiny-button'

interface AppCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const AppCard = ({title, description, onClick}:AppCardProps) => {
  return (
    <ShineBorder
    className="relative flex h-[300px] w-1/2 flex-col flex-wrap items-start overflow-auto rounded-lg border p-8 bg-transparent md:shadow-xl"
    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
  >
   <div className="flex flex-col flex-wrap flex-1 gap-4">
      <h1 className="text-3xl font-bold text-black dark:text-white">{title}</h1>
      <p className="text-md text-black flex-wrap dark:text-white">{description}</ p>
   </div>
   
    <ShinyButton text="Try It" className="" onClick={onClick} />
   
  </ShineBorder>
  )
}

export default AppCard