import { BillingIcon } from "./Navbar";

const ActionCard = ({
  icon,
  text,
  isGray = false,
}) => {
  return (
    <button className="flex flex-col justify-between items-center px-9 py-11 bg-white rounded-2xl border-indigo-600 border-solid border-[5px] h-[267px] w-[200px] max-sm:p-5 max-sm:w-full max-sm:h-[200px]">
      <div className="flex items-center justify-center">{icon}</div>
      <h3 className="text-4xl font-black text-indigo-600 max-sm:text-3xl">
        {text}
      </h3>
    </button>
  );
};

export const ActionCards= () => {
    return (
      <div className="flex flex-col gap-8 max-md:items-center">
        <div className="flex gap-8 max-md:flex-col">
          <ActionCard icon={<BillingIcon/>} text="Bills" />
          <ActionCard icon={<img src="" />} text="flow" />
          <ActionCard icon={<img src=""/>} text="Tax" />
        </div>
        <div className="flex gap-8 max-md:flex-col">
          <ActionCard icon={<img src=""/>} text="Details" />
          <ActionCard icon={<img src="" />} text="Scan" isGray />
          <ActionCard icon={<img src="" />} text="others" />
        </div>
      </div>
    );
  };
