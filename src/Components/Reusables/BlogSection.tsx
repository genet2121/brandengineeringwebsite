import React from 'react';

const articles = [
  {
    title: 'How to Become a Successful Entry Level UX Designer',
    date: 'June 16, 2024',
    image: '/images/1.jpg', 
    isFeatured: true,
  },
  {
    title: '2024Local SEO Success: The Year of Everywhere',
    date: 'June 16, 2024',
    image: '/images/2.jpg',
  },
  {
    title: 'The Guide to Running a Client Discovery Process',
    date: 'June 16, 2024',
    image: '/images/3.jpg',
  },
  {
    title: '3 Ways to Get Client Approval for Scope Changes',
    date: 'June 16, 2024',
    image: '/images/4.jpg', 
  },
  {
    title: 'Top 21 Must-Read Blogs For Creative Agencies',
    date: 'June 16, 2024',
    image: '/images/5.jpg',
  },
];

const BlogSection = () => {
  const featuredBlog = articles[0]; 
  const otherBlogs = articles.slice(1);
  // return (
   

  //     <div className="grid md:grid-cols-2 gap-8 ">
  //       {/* Featured Article */}
  //       {articles
  //         .filter(article => article.isFeatured)
  //         .map((article, index) => (
  //           <div key={index} className="bg-[#f6eded] zpanel rounded-md">
  //             <img src={article.image} alt={article.title} className="w-full h-80 object-cover " />
  //             <div className="mt-4 px-3">
  //               <p className="text-pink-500 text-sm">{article.date}</p>
  //               <h3 className="font-semibold text-xl mt-1">{article.title}</h3>
  //             </div>
  //           </div>
  //         ))}

  //       {/* Side Articles */}
  //       <div className="flex flex-col gap-4">
  //         {articles
  //           .filter(article => !article.isFeatured)
  //           .map((article, index) => (
  //             <div key={index} className="flex gap-4 bg-[#dfd4d4] items-center zpanel rounded-md">
  //               {article.image ? (
  //                 <img
  //                   src={article.image}
  //                   alt={article.title}
  //                   className="w-24 h-24 object-cover rounded-md"
  //                 />
  //               ) : (
  //                 <div className="w-24 h-24 bg-gray-300 rounded-md" />
  //               )}
  //               <div>
  //                 <p className="text-pink-500 text-sm">{article.date}</p>
  //                 <h4 className="font-semibold">{article.title}</h4>
  //               </div>
  //             </div>
  //           ))}
  //       </div>
  //     </div>
   
  // );

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Featured Article */}
      {featuredBlog && (
        <div className="bg-[#f6eded] zpanel rounded-md">
          <img src={featuredBlog.image} alt={featuredBlog.title} className="w-full h-80 object-cover" />
          <div className="mt-4 px-3">
            <p className="text-pink-500 text-sm">
              {new Date(featuredBlog.date).toLocaleDateString()}
            </p>
            <h3 className="font-semibold text-xl mt-1">{featuredBlog.title}</h3>
            
            {/* <div dangerouslySetInnerHTML={{ __html: featuredBlog.content }} className="text-lg mt-1" style={{ height: "70px", overflow: "hidden" }} /> */}
          </div>
        </div>
      )}

      {/* Side Articles */}
      <div className="flex flex-col gap-4">
        {otherBlogs.map((blog:any) => (
          <div key={blog._id} className="flex gap-4 bg-[#dfd4d4] items-center zpanel rounded-md">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div>
              <p className="text-pink-500 text-sm">
                {new Date(blog.date).toLocaleDateString()}
              </p>
              <h4 className="font-semibold">{blog.title}</h4>
              {/* <div dangerouslySetInnerHTML={{ __html: blog.content }} className="text-lg mt-1"  /> */}

            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default BlogSection;
