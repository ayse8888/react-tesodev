import React from 'react';
import { useHistory } from 'react-router-dom';




const Posts = ({filteredPosts}) => {
const history = useHistory();
const handleHistory = () => {
  history.push(`/postresults?q=${filteredPosts}`)
}

// normalde postresults kısmında yaptığım işlemleri burada yapıp show more a basıldığında verileri buradan postresultsa geçirmem gerekiyordu ancak history.push ile bunu yapamadım, veriler diğer tarafa aktarılmadı. Bu şekilde ve birkaç farklı şekilde daha denedim (redirect vs yöntemlerle) fakat olmadı. O yüzden direk olarak verileri postresulsta getirerek yaptım.

  return (
    <div> 
         <button 
          handleHistory={handleHistory}
          type="submit" 
          className="search-button"
        >
          Show More
        </button>
    </div>
  );
};

export default Posts;

