const defaultBikes = [
  {
    id: "r15",
    name: "Yamaha R15 V3",
    brand: "Yamaha",
    year: 2023,
    km: 8000,
    price: 110000,
    images: ["https://images.unsplash.com/photo-1517846693594-1567da72af75"]
  }
];

// 🔥 讀取 localStorage + 預設資料
const bikes = JSON.parse(localStorage.getItem("bikes")) || defaultBikes;
