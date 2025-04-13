import Image from 'next/image';
import EnglishLayout from '../layout-en';
import SectionContainer from '../components/SectionContainer';
import TeamMemberCard from '../components/TeamMemberCard';

export default function AboutPage() {
  return (
    <EnglishLayout>
      <div className="min-h-screen">
        <div className="container-custom">
          {/* Page Header */}
          <SectionContainer className="text-center">
            <h1>About Dolly Strategy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know our company and mission to bring AI to Italian businesses.
            </p>
          </SectionContainer>

          {/* Mission Section */}
          <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div>
                <h2>Our Mission</h2>
                <p className="text-lg text-gray-700">
                  At Dolly Strategy, we are committed to democratizing AI technology for businesses of all sizes in Italy. Our mission is to bridge the gap between cutting-edge AI innovations and practical business applications.
                </p>
                <p className="text-lg text-gray-700">
                  We believe that artificial intelligence should be accessible, understandable, and valuable for every business, regardless of their size or industry. Our goal is to help Italian companies leverage AI to increase efficiency, reduce costs, and gain a competitive edge in the global market.
                </p>
                <p className="text-lg text-gray-700">
                  Through our services, we aim to transform the Italian business landscape by introducing AI solutions that are both innovative and practical, focusing on real-world applications that deliver measurable results.
                </p>
              </div>
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/mission.jpg" 
                  alt="Dolly Strategy Mission" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </SectionContainer>

          {/* Values Section */}
          <SectionContainer>
            <h2 className="section-title">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Innovation Value Card */}
              <div className="card text-center">
                <div className="bg-primary-blue rounded-full h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p className="text-gray-600">
                  We continuously explore and adopt cutting-edge AI technologies to provide the most advanced solutions for our clients.
                </p>
              </div>
              
              {/* Collaboration Value Card */}
              <div className="card text-center">
                <div className="bg-primary-blue rounded-full h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3>Collaboration</h3>
                <p className="text-gray-600">
                  We believe in working closely with our clients to understand their unique needs and develop tailored solutions that address their specific challenges.
                </p>
              </div>
              
              {/* Trust Value Card */}
              <div className="card text-center">
                <div className="bg-primary-blue rounded-full h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3>Trust</h3>
                <p className="text-gray-600">
                  We are committed to transparency, ethical AI practices, and building long-term relationships based on mutual trust and respect.
                </p>
              </div>
            </div>
          </SectionContainer>

          {/* Team Section */}
          <SectionContainer>
            <h2 className="section-title">Our Team</h2>
            <p className="text-lg text-center text-gray-700 mb-10">
              Dolly Strategy is powered by a diverse team of experts in artificial intelligence, data science, business strategy, and industry-specific domains.
            </p>

            {/* Individual Team Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <TeamMemberCard 
                imageSrc="/images/team/giorgio.jpg"
                name="Giorgio Bordoli"
                role="CEO & Founder"
                description="Visionary entrepreneur with expertise in AI implementation and business transformation. Giorgio leads our strategic direction and client partnerships."
              />
              
              <TeamMemberCard 
                imageSrc="/images/team/daniel.jpg"
                name="Daniel Maurot"
                role="Chief Financial Officer"
                description="Financial strategist with deep experience in technology investments. Daniel ensures our growth is sustainable while maximizing value for our clients."
              />
              
              <TeamMemberCard 
                imageSrc="/images/team/marissa.jpg"
                name="Marissa"
                role="Lead Operations Officer"
                description="Operations expert who orchestrates our project delivery with precision and excellence. Marissa ensures seamless execution of all client solutions."
              />
              
              <TeamMemberCard 
                imageSrc="/images/team/laura.jpg"
                name="Laura"
                role="Executive Secretary"
                description="Communication specialist who coordinates our executive activities and client relationships. Laura ensures our operations run smoothly and efficiently."
              />

              <TeamMemberCard 
                imageSrc="/images/team/kush.jpg"
                name="Kush Burdak"
                role="Machine Learning Specialist"
                description="AI and machine learning expert with a deep understanding of advanced algorithms and data science. Kush leads our technical implementation team, designing innovative solutions that transform raw data into actionable business intelligence. His expertise spans natural language processing, predictive analytics, and computer vision, ensuring our clients receive cutting-edge AI applications that deliver measurable results."
                featured={true}
              />
            </div>
          </SectionContainer>
        </div>
      </div>
    </EnglishLayout>
  );
} 