import Image from "next/image";
import companyImg1 from "@/assets/company1.png";
import companyImg2 from "@/assets/company2.png";
import companyImg3 from "@/assets/company3.png";
import companyImg4 from "@/assets/company4.png";
import companyImg5 from "@/assets/company5.png";
import companyImg6 from "@/assets/company6.png";
import companyImg7 from "@/assets/company7.png";

function HomeCompany() {
  return (
    <section className="company min-h-1/3 w-full">
      <div className="container mx-auto px-20 py-4">
        <div className="parent flex items-center justify-center flex-wrap">
          <div className="m-4">
            <Image src={companyImg1}  width={100} height={200} alt="" className="h-20" />
          </div>
          <div className="m-4">
            <Image src={companyImg2} width={100} height={200}  alt="" className="h-20" />
          </div>
          <div className="m-4">
            <Image src={companyImg3} width={100} height={200}  alt="" className="h-20" />
          </div>
          <div className="m-4">
            <Image src={companyImg4} width={100} height={200}  alt="" className="h-20" />
          </div>
          <div className="m-4">
            <Image src={companyImg5} width={100} height={200}  alt="" className="h-20" />
          </div>
          <div className="m-4">
            <Image src={companyImg6} width={100} height={200}  alt="" className="h-20" />
          </div>
          <div className="m-4">
            <Image src={companyImg7} width={100} height={200}  alt="" className="h-20" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCompany;
