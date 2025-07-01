import style from "./style.css";
export default function InfoCard() {
  const CarData = [
    {
      url: "https://www.financialexpress.com/wp-content/uploads/2023/02/Tata-Harrier-Red-Dark-edition-1.jpg",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      url: "https://www.financialexpress.com/wp-content/uploads/2023/02/Tata-Harrier-Red-Dark-edition-1.jpg",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      url: "https://www.financialexpress.com/wp-content/uploads/2023/02/Tata-Harrier-Red-Dark-edition-1.jpg",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      url: "https://www.financialexpress.com/wp-content/uploads/2023/02/Tata-Harrier-Red-Dark-edition-1.jpg",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      url: "https://www.financialexpress.com/wp-content/uploads/2023/02/Tata-Harrier-Red-Dark-edition-1.jpg",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      url: "https://www.financialexpress.com/wp-content/uploads/2023/02/Tata-Harrier-Red-Dark-edition-1.jpg",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      url: "https://www.financialexpress.com/wp-content/uploads/2023/02/Tata-Harrier-Red-Dark-edition-1.jpg",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      url: "https://www.financialexpress.com/wp-content/uploads/2023/02/Tata-Harrier-Red-Dark-edition-1.jpg",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      url: "https://www.financialexpress.com/wp-content/uploads/2023/02/Tata-Harrier-Red-Dark-edition-1.jpg",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      url: "https://www.financialexpress.com/wp-content/uploads/2023/02/Tata-Harrier-Red-Dark-edition-1.jpg",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      url: "https://www.financialexpress.com/wp-content/uploads/2023/02/Tata-Harrier-Red-Dark-edition-1.jpg",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      url: "https://www.financialexpress.com/wp-content/uploads/2023/02/Tata-Harrier-Red-Dark-edition-1.jpg",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
    {
      url: "https://www.financialexpress.com/wp-content/uploads/2023/02/Tata-Harrier-Red-Dark-edition-1.jpg",
      Name: "Tata Harier",
      MaxSpeed: "120",
      Date: "25/12/2023",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="CarInfo">
          {CarData.map((data, index) => (
            <div className="card" key={index}>
              <img src={data.url} alt="Error" />
              <h4>Name:{data.Name}</h4>
              <h4>Max-Speed:{data.MaxSpeed}</h4>
              <h4>Date:{data.Date}</h4>
              <button >Purchase</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
