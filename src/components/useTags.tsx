import { useState } from "react"

type tag = {
  id: number,
  name: string
}

const useTags = () => {
  const [tags, setTags] = useState<tag []>([
    {id: 1, name:'衣'},
    {id: 2, name:'食'},
    {id: 3, name:'住'},
    {id: 4, name:'行'},
  ])
  return {
    tags,setTags
  }
}

export { useTags}