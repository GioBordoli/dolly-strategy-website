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
              {/* Value cards - similar structure could be extracted to a ValueCard component */}
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
              
              {/* Additional value cards would go here */}
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