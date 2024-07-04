import image from '../../assets/img/image.jpg';
// import image from '../assets/img/image.jpg'
type StatCardProps = {
  
    title: string;
    description: string;
    value: string;
    price: string;
  };
  
  export function StatCard({
    
    title,
    description,
    value,
    price,
  }: StatCardProps) {
    return (
      <div className="bg-white p-4 flex items-center gap-2 sm:gap-4 rounded-lg mb-5">
        <img
          className="size-16 sm:size-[50px] md:size-[100px] contrast-[1.1] rounded"
          src={image}
          alt={title}
        />
        <div className="flex flex-col gap-[2px]">
          <h5 className="text-xs text-gray-400">{title}</h5>
          <h3 className="text-lg sm:text-2xl font-bold">{price}</h3>
          <p className="text-[9px] sm:text-xs flex items-center gap-[2px] font-semibold text-slate-600 whitespace-nowrap">
            <span
              className={value.includes("↓") ? "text-red-500" : "text-green-500"}
            >
              {value}
            </span>
            {description}
          </p>
        </div>
      </div>
    );
  }
  