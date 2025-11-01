import React, { useEffect, useState } from 'react';
import AdminAPI from '../../APIs/AdminAPI';
import { isMobile } from 'react-device-detect';

function ServiceComponent() {

  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, [])

  const fetchBlogs = async () => {
    setTimeout(() => { setLoading(true); }, 1);

    try {
      const response = await AdminAPI.getAllNormal("v1/service", "services");
      setServices(response.Items);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }

    setTimeout(() => { setLoading(false); }, 1);
  };
  const generateStructuredData = () => {
    if (services.length === 0) return null;

    const serviceData = services.map((service: any) => ({
      "@type": "Service",
      "name": service.title,
      "description": service.content.replace(/<[^>]*>?/gm, ""), // Strip HTML tags
      "image": service.img_secure_url,
    }));

    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": serviceData.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": service,
      })),
    };
  };
  const structuredData = generateStructuredData();


  return (
    <>
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData, null, 2)}
        </script>
      )}
    
        <div className="container my-5 px-4">
          <h1 className='text-center '>Services We Offer</h1>
          <p className='mb-5 text-center'>Comprehensive Recruitment Solutions Tailored to Your Needs</p>

          {
            services.map((service: any, srvc_index) => (
              <div className="row align-items-center mb-5">
                {(srvc_index % 2 > 0 && !isMobile) && (
                  <div className="col-sm-12 col-md-6 text-start">
                    <h3>{service.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: service.content }} />
                  </div>
                )}

                <div className="col-sm-12 col-md-6 text-center mb-3">
                  <img
                    src={service.img_secure_url}
                    alt="service describing image"
                    className="img-fluid"
                    style={{ maxWidth: '80%', borderRadius: '10px' }}
                  />
                </div>

                {(srvc_index % 2 == 0 || isMobile) && (
                  <div className="col-sm-12 col-md-6">
                    <h3>{service.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: service.content }} />
                  </div>
                )}
              </div>
            ))
          }

        </div>
    
    </>
  );
}

export default ServiceComponent;
