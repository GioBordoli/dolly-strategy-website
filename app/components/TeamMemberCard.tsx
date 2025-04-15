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
      <div className="bg-[#0f1626]/70 backdrop-blur-md border border-[#4facfe]/20 rounded-lg shadow-lg overflow-hidden md:col-span-2 lg:col-span-4">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="relative h-64 lg:h-auto">
            <Image 
              src={imageSrc} 
              alt={name} 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1626]/80 to-transparent"></div>
          </div>
          <div className="p-6 lg:col-span-2 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-1 text-white">{name}</h3>
            <p className="text-primary-green font-semibold mb-3">{role}</p>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0f1626]/70 backdrop-blur-md border border-[#4facfe]/20 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      <div className="relative h-60">
        <Image 
          src={imageSrc} 
          alt={name} 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1626]/80 to-transparent"></div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-bold mb-1 text-white">{name}</h3>
        <p className="text-primary-green font-semibold mb-3">{role}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
} 