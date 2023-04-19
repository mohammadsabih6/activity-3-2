import React, { useEffect, useState } from 'react'
function BlogData() {
    const [data,setdata]=useState('');
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>{
            setdata(data);
        })
    },
    []
    )
  return (
        data && data.map((data)=><div key={data.id}
        style={{marginLeft:'40px',fontSize:'18px'}}
        >
                <p>Title:{data.title}</p>
                <p>Body:{data.body}</p>
            </div>
        )
  )
}
export default BlogData