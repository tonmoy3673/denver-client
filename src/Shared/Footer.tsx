const Footer = () => {
  return (
    <footer>
      {/* ============ Top Footer =========== */}

      <div className="flex items-center justify-around">
        {/* ================ Right Dog ========= */}
        <div>
          <img
            src="/src/assets/images/dog1.png"
            className="w-[305px] h-[350px]"
          />
        </div>
        {/* ========== Text Content ========= */}
        <div>
          <img src="/src/assets/icons/love.svg" />
        </div>
        {/* ================ left Dog ========= */}
        <div>
          <img
            src="/src/assets/images/dog2.png"
            className="w-[280px] h-[305px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
