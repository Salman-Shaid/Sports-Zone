import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { MdVerified } from "react-icons/md";
import { ThemeContext } from "../AuthProvider/ThemeProvider";

const Testimonials = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`py-10 ${theme === "dark" ? "bg-gray-800" : "bg-orange-100"}`}>
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-orange-600"}`}>
                    Our Customers Reviews
                </h2>

                <Marquee>
                    
                    {[
                        {
                            name: "John Week",
                            image: "https://i.ibb.co.com/HVhVJvX/smiling-bearded-man-shirt-holding-smartphone.jpg",
                            review: "The best sports equipment store! Fast shipping and excellent quality!",
                        },
                        {
                            name: "David Smith",
                            image: "https://i.ibb.co.com/sVZ8TWv/portrait-smiling-young-man-rubbing-his-hands.jpg",
                            review: "Great variety of products at unbeatable prices. Highly recommend!",
                        },
                        {
                            name: "Mark Johnson",
                            image: "https://i.ibb.co.com/hFDXf17/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.jpg",
                            review: "The quality is top-notch, and the customer service is outstanding!",
                        },
                        {
                            name: "Emily Davis",
                            image: "https://i.ibb.co.com/SvXr744/portrait-beautiful-girl-white-background.jpg",
                            review: "I found exactly what I was looking for. Amazing prices!",
                        },
                        {
                            name: "Sara Ali Khan",
                            image: "https://i.ibb.co.com/qmP4CCH/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confide.jpg",
                            review: "I found exactly what I was looking for. Amazing prices!",
                        },
                    ].map((testimonial, index) => (
                        <div
                            key={index}
                            className={`w-80 mx-4 p-6 rounded-lg shadow-lg flex flex-col justify-between ${
                                theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"
                            }`}
                        >
                            <div className="flex justify-center items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={`Customer ${index + 1}`}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm flex justify-center items-center text-gray-500">
                                        <span className="text-blue-500"><MdVerified /></span> Verified Buyer
                                    </p>
                                </div>
                            </div>
                            <p className="text-lg mb-4">{testimonial.review}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Testimonials;
