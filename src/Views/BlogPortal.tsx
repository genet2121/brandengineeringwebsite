import { relative } from "path";
import React, { useContext, useEffect, useState } from "react";
import EventComponent from "../Components/Reusables/EventComponent";
import FooterComponent from "../Components/Reusables/FooterComponent";
import JobCard from "../Components/Reusables/JobCard";
import BlogComponent from "../Components/Reusables/BlogComponent";
import CompanyComponent from "../Components/Reusables/CompanyComponent";
import PaginationComponent from "../Components/Reusables/PaginationComponent";
import AdminAPI from "../APIs/AdminAPI";
import VerticalGap from "../Components/Reusables/VerticalGap";
import AlertContext from "../Contexts/AlertContext";
import { isMobile } from "react-device-detect";

function BlogPortal() {
    const { setWaiting, showWaiting } = useContext(AlertContext);

    const [blogs, setBlogs] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [paging, setPaging] = useState({
        pageSize: 3,
        totalCount: 0
    });
    
    useEffect(() => {
        
        const fetchBlogs = async () => {
            setTimeout(() => { setWaiting(true); }, 1);

            try {
                const response = await AdminAPI.getAllNormal("v1/blog", "blogs", pageNumber, paging.pageSize);
                setPaging({...paging, totalCount: response.TotalCount})
                setBlogs(response.Items);
                let element = document.getElementById("page_schema");
                    if (element) {
                    element.textContent = JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "mainEntity": response.Items.map((item: any) => ({
                        "@type": "BlogPosting",
                        "headline": item.title,
                       
                        "alternativeHeadline": item.title,
                      
                        "image": item.img_secure_url,
                        "author": {
                            "@type": "Person",
                            "name": item.author
                        },
                        "datePublished": item.blog_date,
                        "description": item.content.length > 100 
                            ? `${item.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 100)}...`
                            : item.content.replace(/<\/?[^>]+(>|$)/g, ""),
                        "url": `${window.location.origin}/blogs/${item.title_slug}`,
                        }))
                    });
                    }
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }

            setTimeout(() => { setWaiting(false); }, 1);
        };

        fetchBlogs();
       
    }, [pageNumber]);
    
    if (!blogs) {
        return <div>Blog not found.</div>;
    }

   

    return (
        <div className="w-100" style={{position: "relative", zIndex: 10}} >
              <section className="bg-gradient-to-r from-[#0072ff] via-[#002c5f] to-[#00c6ff] py-24 text-center relative overflow-hidden shadow-md">
     

                <div className="max-w-3xl mx-auto px-3">
                <h1 className="text-5xl font-extrabold text-white mb-4">Latest Blogs</h1>
                {/* <p className="text-white text-lg leading-relaxed">
                Stay Updated on Industry Trends and Career Tips
                </p> */}
                </div>
            </section>
           
            <div className="row p-0 m-0 ">
                <div className="col"></div>
                <div className="col-sm-12 col-md-10 col-lg-10 mt-3 px-3 ">

                    <VerticalGap size={50} />
                  
                    <p className="text-center card-subtitle mb-5" style={{color: "var(--text_color)", width: (isMobile ? "100%" : "60%"), position: "relative", left: "50%", transform: "translateX(-50%)"}}>
                    Dive into our latest thoughts and expert advice.
                    </p>
                    <VerticalGap size={20} />

                    <div className="row  mb-5  justify-content-start" style={{position: "relative", overflow: "auto hidden"}}>

                        {blogs.map((blog:any) => (
                            <div className="col-sm-12 col-md-4 col-lg-4 px-1 mb-3 " key={blog._id}>
                                <BlogComponent
                                    title={blog.title}
                                    subtitle={blog.content.length > 100 
                                        ? `${blog.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 100)}...` 
                                        : blog.content.replace(/<\/?[^>]+(>|$)/g, "")
                                    }
                                    image={blog.img_secure_url}
                                    id={blog._id}
                                    author={blog.author}
                                />
                            </div>
                        ))}

                    </div>

                    <PaginationComponent totalCount={paging.totalCount} pageSize={paging.pageSize} onChange={async (page_number: number) => {
                        setPageNumber(page_number);
                    }} />
                    <VerticalGap size={100} />

                </div>
                <div className="col"></div>
            </div>
            <script id="page_schema" type="application/ld+json"></script>
            <VerticalGap size={50} />
        </div>
    );
}

export default BlogPortal;