import {
  FiUsers,
  FiPhoneCall,
  FiTrendingUp,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";


const StatsCards = ({ stats }) => {
  const cards = [
    {
      title: "Total Leads",
      value: stats?.total || 0,
      icon: <FiUsers size={22} />,
    },
    {
      title: "Contacted",
      value: stats?.contacted || 0,
      icon: <FiPhoneCall size={22} />,
    },
    {
      title: "Qualified",
      value: stats?.qualified || 0,
      icon: <FiTrendingUp size={22} />,
    },
    {
      title: "Converted",
      value: stats?.converted || 0,
      icon: <FiCheckCircle size={22} />,
    },
    {
      title: "Lost",
      value: stats?.lost || 0,
      icon: <FiXCircle size={22} />,
    },
  ];

  // if (!stats) {
  //   return (
  //     <div className="text-center py-10">
  //       Loading statistics...
  //     </div>
  //   );
  // };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 h-full">
      {cards.map((card) => (
        <div
          key={card.title}
          className="
    bg-white
    rounded-3xl
    p-6
    shadow-md
    hover:shadow-xl
    transition-all
    min-h-[120px]
    flex
    flex-col
    justify-between
  "
        >
          <div className="flex justify-between items-center">
            <h3 className="text-gray-500 text-sm">{card.title}</h3>
            {card.icon}
          </div>

          <p className="text-3xl font-bold mt-4">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;





