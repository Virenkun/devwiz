import React from 'react'
import ShineBorder from './magicui/shine-border'
import ShinyButton from './magicui/shiny-button'

const AppCard = () => {
  return (
    <ShineBorder
    className="relative flex h-[300px] w-100px flex-col flex-wrap items-start overflow-auto rounded-lg border p-8 bg-transparent md:shadow-xl"
    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
  >
   <div className="flex flex-col flex-wrap flex-1 gap-4">
      <h1 className="text-3xl font-bold text-black dark:text-white">CSV to JSON</h1>
      <p className="text-md text-black flex-wrap dark:text-white">CSV is a simple file format used to store data in tables, like in a spreadsheet. JSON (JavaScript Object Notation) is an easy-to-read data format that both people and computers can understand</ p>
   </div>
   
    <ShinyButton text="Try It" className="" />
   
  </ShineBorder>
  )
}

export default AppCard