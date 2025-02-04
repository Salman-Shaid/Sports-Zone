import React, { useContext } from 'react';
import Banner from '../components/Banner';
import ProductSection from '../components/ProductSection';
import SportCategories from '../components/SportCategories';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import BlogSection from '../components/BlogSection';
import PartnersSection from '../components/PartnersSection';
import bgImage from "../assets/Black Simple Sports Equipment Big Sale Email Header.jpg";
import { ThemeContext } from '../AuthProvider/ThemeProvider'; 

const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); 

    return (
        <div className={`min-h-screen ${theme === "dark" ? "bg-gray-800 text-white" : "bg-orange-50 text-gray-900"}`}>
            <header>
                <Banner />
            </header>

            <main>
                <section>
                    <div className="container mx-auto">
                        <ProductSection />
                    </div>
                </section>

                <section>
                    <img className="h-60 w-full object-cover" src={bgImage} alt="Sports Sale" />
                </section>

                <section>
                    <SportCategories />
                </section>

                <section>
                    <Testimonials />
                </section>

                <section>
                    <BlogSection />
                </section>

                <section>
                    <WhyChooseUs />
                </section>

                <section>
                    <PartnersSection />
                </section>
            </main>
        </div>
    );
};

export default Home;
