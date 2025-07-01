import style from './style.css'
export default function InfoCard() {
  const CarData = [
    {
      id: "1",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      id: "2",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      id: "3",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      id: "4",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      id: "5",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      id: "6",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
  ];
  return (
    <>
      <div className="container">
        {CarData.map((data, index) => (
          <div className="CarInfo" key={index}>
            <h4>Name:{data.Name}</h4>
            <h4>Max-Speed{data.MaxSpeed}</h4>
            <h4>Date:{data.Date}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
