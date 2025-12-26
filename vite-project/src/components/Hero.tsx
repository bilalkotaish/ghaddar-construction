import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <div className="hero-text fade-in">
                    <h1 className="hero-title">
                        Building the Roads of <span className="highlight">Tomorrow</span>
                    </h1>
                    <p className="hero-description">
                        Professional asphalt paving and road construction services.
                        Quality craftsmanship, reliable results, and exceptional service for over 15 years.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/projects" className="btn btn-primary btn-large">
                            View Our Work <FaArrowRight />
                        </Link>
                        <Link to="/contact" className="btn btn-secondary btn-large">
                            <FaPhone /> Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
