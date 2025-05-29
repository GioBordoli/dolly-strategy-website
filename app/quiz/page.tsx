import Image from 'next/image';
import Link from 'next/link';
import QuizForm from '../components/QuizForm';
import ScrollButton from '../components/ScrollButton';

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="container-custom pt-8 pb-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-primary-blue">
            The 5-Minute Automation Quiz: <span className="text-primary-green">Unlock Your Company's Hidden Profits</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Discover how much your company is losing to time waste and how automation can give it back.
          </p>
          
          {/* Trust Builder */}
          <div className="flex items-center justify-center mb-6">
            <p className="text-sm font-medium text-gray-600">
              Created by Dolly Strategy—automation experts for small businesses
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Value Prop */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <p className="text-lg md:text-xl mb-6 text-gray-800">
                Are you wasting hours on repetitive tasks? Overpaying for staff that could be replaced by AI? Take this 5-minute quiz to see exactly how much your business is losing and how automation can boost your profits.
              </p>
              
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">In just 5 minutes, you'll discover:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-primary-green rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-md md:text-lg font-medium">How much money you're losing to inefficient processes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-primary-green rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-md md:text-lg font-medium">How much money you could save by automating your processes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-primary-green rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-md md:text-lg font-medium">How much more your competitors are profiting from automation</span>
                  </li>
                </ul>
              </div>
              
              {/* Mobile CTA - shown only on smaller screens */}
              <ScrollButton 
                targetId="quiz-form"
                className="w-full py-4 px-6 bg-primary-green text-white font-bold rounded-lg text-lg shadow-lg hover:bg-primary-green/90 transition duration-300 transform hover:-translate-y-1"
                isMobile={true}
              >
                Take the Quiz Now
              </ScrollButton>
              <p className="text-center text-sm font-medium mt-2 text-gray-600 lg:hidden">
                Start unlocking your profits in 5 minutes
              </p>
              
              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-gray-50 p-4 rounded-lg italic text-gray-700">
                  <p className="text-md">"The quiz showed us we were wasting $3,500 a month on manual processes. Using DollyStrategy's automation tools, we now save 15 hours every week!"</p>
                  <p className="mt-2 font-medium text-right">—Riccardo G. Buzzi, Owner of Buzzi Group</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="lg:col-span-2" id="quiz-form">
            <div className="sticky top-28">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-primary-green">
                <h3 className="font-bold text-xl mb-6 text-center">Start Your 5-Minute Profit Assessment</h3>
                
                <QuizForm />
                
                <div className="mt-6">
                  <p className="text-center text-sm text-gray-600">
                    Your data is safe. We never share your information.
                  </p>
                </div>
              </div>
              
              {/* Results Preview Teaser */}
              <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
                <p className="font-medium mb-2">After the quiz, you'll discover:</p>
                <ul className="space-y-2 mb-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">▶</span>
                    <span>How much you're losing to inefficient processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">▶</span>
                    <span>Your potential savings through automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">▶</span>
                    <span>Personalized revenue growth opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Don't leave money on the table
          </h3>
          <p className="text-lg mb-6">
            The average small business recovers 12+ hours per week with the right automation tools.
          </p>
          
          {/* Desktop Bottom CTA - hidden on mobile since we have one above */}
          <ScrollButton 
            targetId="quiz-form"
            className="py-4 px-8 bg-primary-green text-white font-bold rounded-lg text-lg shadow-lg hover:bg-primary-green/90 transition duration-300 transform hover:-translate-y-1"
          >
            Take the Quiz Now
          </ScrollButton>
          <p className="text-center text-sm font-medium mt-2 text-gray-600 hidden lg:block">
            Start unlocking your profits in 5 minutes
          </p>
        </div>
      </div>
      
      {/* Calendly Scripts */}
      <script 
        type="text/javascript" 
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
      <link 
        href="https://assets.calendly.com/assets/external/widget.css" 
        rel="stylesheet"
      />
    </div>
  );
} 