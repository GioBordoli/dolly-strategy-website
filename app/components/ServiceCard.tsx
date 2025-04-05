import Image from 'next/image';
import Link from 'next/link';

type ServiceCardProps = {
  iconSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  alt: string;
};

export default function ServiceCard({ 
  iconSrc, 
  title, 
  description, 
  linkText, 
  linkHref, 
  alt 
}: ServiceCardProps) {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      <div className="bg-primary-blue/10 rounded-full p-4 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
        <Image 
          src={iconSrc} 
          alt={alt} 
          width={32}
          height={32}
          className="text-primary-blue sm:w-10 sm:h-10"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary-blue">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">
        {description}
      </p>
      <Link href={linkHref} className="inline-block mt-4 sm:mt-6 text-primary-blue font-semibold hover:underline">
        {linkText} →
      </Link>
    </div>
  );
} 