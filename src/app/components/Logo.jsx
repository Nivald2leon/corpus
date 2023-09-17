import Image from "next/image";

const Logo = () => {
  return (
    <div className="items-center justify-between py-1 md:py-5 md:block">
      <Image src="/imagen/logocache.png" width={120} height={120} alt="logo" />
      <b
        href="#"
        onClick={() => {
          toggleSubMenu("#");
          setNavbar(!navbar);
        }}
        className={`nav-link`}
        style={{ color: "white", fontSize: "10px" }}
      >
        Corpus de Aprendientes Chinos de Español
      </b>

     
    </div>
  );
};

export default Logo;
