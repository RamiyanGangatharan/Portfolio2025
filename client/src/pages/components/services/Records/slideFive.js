import Image from "next/image";

export default function slideFive() {
  return (
      <div className="repair-slide text-center">
        <div className="repair-image">
          <Image
            src="/img/serviceImages/personalLaptop3_GPU"
            alt="Laptop battery replacement"
            width={600}      
            height={400}     
            className="rounded" 
          />
        </div>
        <h4 className="mt-3">Personal Laptop Repaste</h4>
        <p className="opacity-75">As an effort to renovate my laptop, I improved my thermals with new thermal paste.</p>
      </div>
  );
}
