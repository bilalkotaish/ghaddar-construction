import { FaAward, FaUsers, FaCheckCircle, FaHardHat } from 'react-icons/fa';
import './About.css';

const About = () => {
    const stats = [
        { icon: <FaAward />, value: '25+', label: 'Years Experience' },
        { icon: <FaUsers />, value: '500+', label: 'Projects Completed' },
        { icon: <FaCheckCircle />, value: '100%', label: 'Client Satisfaction' },
        { icon: <FaHardHat />, value: '50+', label: 'Expert Team Members' },
    ];

    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">About Us</h1>
                    <p className="page-description">
                        Building excellence in asphalt paving and road construction since 1999
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>Our Story</h2>
                            <p>
                                ProBuild Contracting has been a leader in the asphalt paving and road construction
                                industry for over 25 years. Founded in 1999, we've grown from a small local contractor
                                to a trusted name in commercial and residential construction projects.
                            </p>
                            <p>
                                Our commitment to quality, safety, and customer satisfaction has earned us a reputation
                                for excellence. We use state-of-the-art equipment and employ industry best practices to
                                deliver projects on time and within budget.
                            </p>
                            <p>
                                From small residential driveways to large-scale highway projects, we bring the same
                                level of professionalism and attention to detail to every job we undertake.
                            </p>
                        </div>

                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card card">
                                    <div className="stat-icon">{stat.icon}</div>
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-secondary">
                <div className="container">
                    <h2 className="section-title">Why Choose Us</h2>
                    <div className="grid grid-3">
                        <div className="feature-card card">
                            <h3>Quality Craftsmanship</h3>
                            <p>
                                We use only the highest quality materials and employ skilled craftsmen who take
                                pride in their work. Every project is completed to the highest standards.
                            </p>
                        </div>
                        <div className="feature-card card">
                            <h3>Experienced Team</h3>
                            <p>
                                Our team of professionals brings decades of combined experience in asphalt paving,
                                road construction, and site development.
                            </p>
                        </div>
                        <div className="feature-card card">
                            <h3>Customer Focused</h3>
                            <p>
                                We prioritize clear communication, transparency, and customer satisfaction throughout
                                every phase of your project.
                            </p>
                        </div>
                        <div className="feature-card card">
                            <h3>Modern Equipment</h3>
                            <p>
                                We invest in the latest technology and equipment to ensure efficient, precise, and
                                high-quality results on every job.
                            </p>
                        </div>
                        <div className="feature-card card">
                            <h3>Safety First</h3>
                            <p>
                                Safety is our top priority. We maintain rigorous safety standards and ensure all
                                team members are properly trained and certified.
                            </p>
                        </div>
                        <div className="feature-card card">
                            <h3>Competitive Pricing</h3>
                            <p>
                                We offer competitive pricing without compromising on quality. Get exceptional value
                                for your investment with transparent quotes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
