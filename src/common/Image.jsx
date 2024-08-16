import { useEffect, useRef } from "react";

export default function Image({ src, alt }) {
  const imgRef = useRef();

  //   let classes = " w-full h-[400px] object-cover rounded-lg ";

  //   if (wide) {
  //     classes = " w-full object-cover rounded-lg col-span-3 ";
  //   }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;

          const src = img.getAttribute("data-src");

          img.setAttribute("src", src);

          img.classList.add("fade");

          observer.disconnect();
        }
      });
    });

    observer.observe(imgRef.current);
  }, []);

  return (
    <img
      ref={imgRef}
      data-src={src}
      alt={alt}
      loading="lazy"
      className=" md:object-cover md:h-screen  w-auto    "
    />
  );
}
