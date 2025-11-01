import React from "react";
import ServiceComponentPage from "../Components/Reusables/serviceCom";

const servicePage = () => {
    return (
        <div>
            <section className="relative py-24 text-center overflow-hidden shadow-md" style={{
                background: `linear-gradient(135deg, var(--button_color) 0%, color-mix(in srgb, var(--button_color) 80%, black) 50%, color-mix(in srgb, var(--button_color) 60%, black) 100%)`
            }}>
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ backgroundColor: 'var(--button_bg)' }}></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
                    <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/30 rounded-full"></div>
                    <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-white/20 rounded-lg rotate-45"></div>
                </div>

                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">Services</h1>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        Explore our range of services tailored to meet your needs.
                    </p>
                </div>
            </section>
            <div className="w-full bg-white">
                <ServiceComponentPage />
            </div>

        </div>
    );
};

export default servicePage;
