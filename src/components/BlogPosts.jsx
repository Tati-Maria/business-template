import BlogCard from './common/BlogCard';
import project1 from '../assets/project-placeholder1.svg';
import project2 from '../assets/project-placeholder2.svg';
import project3 from '../assets/project-placeholder3.svg';


export const blogPosts = [
    {
        id: 1,
        img: project1,
        title: '10 Quick Tips About Blogging',
        date: 'June 1, 2021',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
    },
    {
        id: 2,
        img: project2,
        title: '15 Best Blogs To Follow About Web Design',
        date: 'June 1, 2019',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
    },
    {
        id: 3,
        img: project3,
        title: '7 of the Best Examples of Beautiful Blog Design',
        date: 'June 1, 2018',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
    }
]

const BlogPosts = () => {

  return (
    <section className='mb-16'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {blogPosts.map((post) => (
                <BlogCard 
                key={post.id} 
                title={post.title} 
                content={post.content} 
                date={post.date} 
                id={post.id} 
                />
            ))}
        </div>
    </section>
  )
}

export default BlogPosts;