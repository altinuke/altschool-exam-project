import { Link, useNavigate } from "react-router-dom";




const RepoInfo = ({repos}) => {
    const navigate = useNavigate();
  

  
  return (
    <>
    <h1 className="title">List of Repositories</h1>
      <ul className="repolist"  > 
        {repos.map(repo => (
          <li key={repo.id} onClick={() => {
            <Link to={`/portfolio/${repo}`}>{repo} More...</Link>
          }} >
         Name: {repo.name} 
          <br/>
          Date: {repo.created_at}
          <br/>
         Description: {repo.description}
         <br/>
        <a href ={`${repo.html_url}`} target='_blank' ><strong><em>Click to view </em></strong></a>
        
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoInfo;
