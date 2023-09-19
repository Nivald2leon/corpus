import Image from "next/image";

const Logo = () => {
  return (
    <div className="items-center justify-between py-1 md:py-5 md:block">
      <Image src="/imagen/logocache.png" width={120} height={120} alt="logo" />
      <a
        className="md:hidden text-white"
        style={{fontSize: "8px" }}
      >
        Subcorpus de Aprendientes Chinos de Español como Lengua Extranjera. 
        Componente Escrito.
      </a>

     
    </div>
  );
};

export default Logo;
//className="text-center md:block md:hidden"