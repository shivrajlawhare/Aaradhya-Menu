export default function MenuSection({ id, title, images }) {
  return (
    <section id={id} className=" -">
      {/* <h2 className="text-xl font-bold mb-2 px-4 text-brandText">{title}</h2> */}
      {images.map((img, index) => (
        <img 
          key={index} 
          src={img} 
          alt={`${title} ${index + 1}`} 
          className="w-full "
        />
      ))}
    </section>
  );
}
