import React, { useState } from 'react';


// option da bulunan değerleri console da alabiliyorum seçtiğimde ancak filter kısmını bu şekilde ve birkaç farklı şekilde daha denedim fakat olmadı. Sıralama kısmında undefined hatası alıyorum.


const Filter = ({posts}) => {
  const [sort, setSort] = useState("")
  
  const sortProducts = (e) => {
    console.log(e.target.value)
    setSort((sort) => {
      return(
        <>
          {posts.sort((a,b) => (
            e.target.value === "Year Ascending" ? (a.createdAt < b.createdAt) : (a.createdAt > b.createdAt)
          ))}
        </>
      )
    })
  }

  return(
    <div className="filter">
      <select 
        value={sort} 
        onChange={sortProducts}
      >
        <option>Order By</option>
        <option>Name Ascending</option>
        <option>Name Descending</option>
        <option>Year Ascending</option>
        <option>Year Descending</option>
      </select>
    </div>
  )
}

export default Filter