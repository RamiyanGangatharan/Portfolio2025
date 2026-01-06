import Image from "next/image";

export default function slideTwo() {
  return (
      <div className="repair-slide text-center">
        <div className="repair-image">
          <Image
            src="/img/serviceImages/clientLaptop2"
            alt="Laptop battery replacement"
            width={600}      
            height={400}     
            className="rounded" 
          />
        </div>
        <h4 className="mt-3">Laptop Battery Replacement</h4>
        <p className="opacity-75">Replaced a client&apos;s laptop battery after years of use.</p>
      </div>
    );
}
