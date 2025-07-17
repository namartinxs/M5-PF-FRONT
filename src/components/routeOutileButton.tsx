'use client'

import { useRouter } from 'next/navigation';




type ButtonProps = {
  children: React.ReactNode;
  type: 'button' | 'submit';
  variant: 'darkOutline' | 'lightOutline';
  className?: string;
  route: string
};

export default function Button({
  type,
  variant,
  className = '',
  route,
  children
}: ButtonProps) {




  const variants = {
    darkOutline: 'border border-[#ffffff] text-[#b6ebc3] hover:bg-[#f0f0f0] hover:text-[#2f4e41]',
    lightOutline: 'border border-[#2f4e41] text-[#2f4e41] hover:bg-[#557a6a] hover:text-[#b6ebc3]'
  };

   const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`
        ${variants[variant]}
        ${className}
      `}
    >{children}</button>
  );
}

