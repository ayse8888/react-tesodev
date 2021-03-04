import React, { useState, useEffect } from 'react';
import Pagination from './Pagination'
import Filter from './Filter'


const PostResults = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm,setSearchTerm] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

   // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

   // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const submitHandler = (event) => {
    event.preventDefault()

  const post = posts.filter(value => {
    if(value.name
      .toString()
      .toLowerCase()
      .includes(searchTerm.toString().toLowerCase())) {
        return value
      }
    })

  const filteredNames = post.map(item => item)
    console.log(filteredNames)
    setFilteredPosts(filteredNames)
  }

  const getData = () => {
    fetch('data.json')
    .then(response => {
      return response.json()
      //console.log(response)
    })
    .then(data => {
      setPosts(data)
      console.log(data)
    })
  }

  useEffect(() => {
    getData()
  },[])


  return (
    <div className="nav-wrapper">
      <form 
        className="form" 
        onSubmit={submitHandler} 
        filteredPosts={currentPosts}
      >  
        <img                    src="https://www.tesodev.com/getimg/5d4c7568de63280fd21b4ee7/jpg" 
          alt="tesodev logo" 
          className="logo"
        />
        <input 
          type="text" 
          placeholder="Search Anything" 
          name="query" 
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input" 
        />
        <button 
          onClick={submitHandler} 
          type="submit" 
          className="search-button"
        >
          <i className="fas fa-search"></i>
        </button>
        <div className='list-wrapper'>
            {
              currentPosts.map(item=>{
                return( 
                  <div className='list' key={item.id}>
                    <h4 className=''>
                      {item.name}
                    </h4>
                    <p className='list-items'>
                      {item.createdAt}
                    </p>
                  </div>
                  )
                })
            }
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredPosts.length}
          paginate={paginate}
          />
      </form>
    </div>
  );
};

export default PostResults;

