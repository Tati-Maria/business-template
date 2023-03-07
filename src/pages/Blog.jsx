import BlogCard from "../components/common/BlogCard";
import { blogPosts } from "../components/BlogPosts";
import HeaderTitle from "../components/common/HeaderTitle";
import Title from "../components/common/Title";

const Blog = () => {

  
  return (
    <>
      <HeaderTitle title='Our Blog' />
      <Title subtitle='aperiam harum' title='Our Stories' />
      <div className="mb-16 grid grid-cols-1 gap-20">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} title={post.title} show={true} img={post.img} date={post.date} content={post.content} id={post.id}  />
        ))}
      </div>
    </>
  )
}

export default Blog