import Image from 'next/image';

type TeamMemberCardProps = {
  imageSrc: string;
  name: string;
  role: string;
  description: string;
  featured?: boolean;
};

export default function TeamMemberCard({ 
  imageSrc, 
  name, 
  role, 
  description, 
  featured = false 
}: TeamMemberCardProps) {
  if (featured) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden md:col-span-2 lg:col-span-4">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="relative h-64 lg:h-auto">
            <Image 
              src={imageSrc} 
              alt={name} 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 lg:col-span-2 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-primary-blue font-semibold mb-3">{role}</p>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 sm:h-64">
        <Image 
          src={imageSrc} 
          alt={name} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-1">{name}</h3>
        <p className="text-primary-blue font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{role}</p>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
} 