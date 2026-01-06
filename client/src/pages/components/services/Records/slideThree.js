import Image from "next/image";

export default function slideThree() {
  return (
      <div className="repair-slide text-center">
        <div className="repair-image">
          <Image
            src="/img/serviceImages/clientWiFiCard.jpg"
            alt="Laptop WiFi Card Upgrade"
            width={600}      
            height={400}     
            className="rounded" 
          />
        </div>
        <h4 className="mt-3">Laptop WiFi Card Upgrade</h4>
        <p className="opacity-75">Replaced a client&apos;s WiFi card.</p>
      </div>
  );
}
