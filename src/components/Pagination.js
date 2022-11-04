import '../styles.css';
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <nav className='pagination'>
        <ul className='page-number'>
        
            {pageNumbers.map (number => (
                <div key={number} className='page-container'>
                <button onClick={() => paginate(number)} className='page-button' >{number}</button>
                
              
            </div>
            ))}
                
            
        </ul>
       
            
        
      </nav>
    );
  };
  
  export default Pagination;
  