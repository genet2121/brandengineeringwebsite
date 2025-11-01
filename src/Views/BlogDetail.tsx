
// export default BlogDetail;
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminAPI from "../APIs/AdminAPI";
import AlertContext from "../Contexts/AlertContext";
import VerticalGap from "../Components/Reusables/VerticalGap";
import Utils from "../Models/Utils";

interface EventData {
	title: string;
	blog_date: string;
	content: string;
	img_secure_url: string;
	author:string;

	
}

function BlogDetail() {
	const { setWaiting, showWaiting } = useContext(AlertContext);

	const { id } = useParams<{ id: string }>(); 
	const [blogData, setBlogData] = useState<EventData | null>(null);


	useEffect(() => {
		if (id) { 
			const fetchBlogData = async () => {
				try {
					setTimeout(() => { setWaiting(true); }, 1);
					const response = await AdminAPI.getSingleNormal("v1/blog", id, 'blog');
					setBlogData(response);
				} catch (error) {
					console.error("Error fetching blog data:", error);
				} 
				// finally {
				// setWaiting(false); 
				// }
				setTimeout(() => { setWaiting(false); }, 1);
			};

			fetchBlogData();
		} else {
			console.error("ID is undefined");
			setWaiting(false); 
		}
	}, [id]);
	
		const schemaData = blogData ? {
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			"headline": blogData.title,
			"author": {
			"@type": "Person",
			"name": blogData.author,
			},
			"datePublished": blogData.blog_date,
			"image": blogData.img_secure_url,
			"articleBody": blogData.content,
		} : null;

	return blogData ? (
		<div className="row p-0 m-0 w-100 " style={{ flexWrap: "wrap", position: "relative", zIndex: 10, minHeight: "100vh",height: "max-content" }}>
			<section className="bg-gradient-to-r from-[#0072ff] via-[#002c5f] to-[#00c6ff] py-24 text-center relative overflow-hidden shadow-md">
     

				<div className="max-w-3xl mx-auto px-3">
				<h1 className="text-2xl font-bold text-white mb-4">{blogData.title}</h1>
				
				</div>
			</section>
			<div className="col"></div>
			<div className="col-sm-12 col-md-10 col-lg-9 mt-4 px-4">
				<div className="d-flex mb-3 align-items-center">
					<div className="col">
						<VerticalGap size={10} />
						{/* <h1 className="card-title" style={{ color: "var(--text_color)" }}>{blogData.title}</h1> */}
					</div>
					<div style={{ width: "max-content" }}>
						<h6 className="card-title text-end">{new Date(blogData.blog_date).toLocaleTimeString()}</h6>
						<div className="card-subtitle lead text-end">{Utils.convertISOToDate(blogData.blog_date)}</div>
					</div>
				</div>
				<img src={blogData.img_secure_url} alt="blog" className="w-100 h-96 mb-10" style={{borderRadius:'20px'}} />
				<VerticalGap size={10} />
				<div
					className="text-start card-subtitle mb-3"
					style={{ color: "var(--text_color)", position: "relative" }}
					dangerouslySetInnerHTML={{ __html: blogData.content }} 
				/>
			</div>
			<div className="col"></div>
			{schemaData && (
			<script type="application/ld+json">
			{JSON.stringify(schemaData)}
			</script>
      )}
	  <VerticalGap size={100} />
		</div>
	) : (
		<div className="d-flex justify-content-center my-5" style={{ minHeight: "100vh",height: "max-content" }}>
			<div className="spinner-border text-danger" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
			
	</div>
	
	);
}

export default BlogDetail;
