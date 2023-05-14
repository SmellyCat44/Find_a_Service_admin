import React from 'react';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import Article from '../../components/article/Article';
/*make appropriate news and images*/
const Blog = () => (
  <div className="seva__blog section__padding" id="blog">
    <div className="seva__blog-heading">
      <h1 className="gradient__text">A lot is happening locally, <br /> We keep you in the loop.</h1>
    </div>
    <div className="seva__blog-container">
      <div className="seva__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="seva__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="University of Southapmton has no water" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Emergency in SO15 1DP Due to pipeline burst" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="sdfjhagskjdfhsjkf sdkhfjksdhf jkshfk jshdfkjs hfjk" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="sdhfgshjdfhgsjk sdkjhfjksah fjksdfjk hsdjkfh sjkfh kjasfhkj" />
      </div>
    </div>
  </div>
);

export default Blog;
