import Image from "next/image";

export default function slideZero() {
  return (
      <div className="repair-slide text-center">
        <div className="repair-image">
          <Image
            src="/img/serviceImages/ryzen_paste"
            alt="Desktop CPU Repaste"
            width={600}      
            height={400}     
            className="rounded" 
          />
          
        </div>
        <h4 className="mt-3">Desktop CPU Repaste</h4>
        <p className="opacity-75">As I replaced a client's CPU, this is a picture of it being repasted.</p>
      </div>
  );
}
