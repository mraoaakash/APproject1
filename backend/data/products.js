const products = [
  {
    rating: 4,
    numReviews: 1,
    price: 13,
    countInStock: 10,
    name: "Harney & Sons Organic Peppermint Tea 1.76oz/50g (50 Tea Bags)",
    image: "/uploads/image-1638358973332.jpg",
    brand: "Harney & Sons",
    category: "Organic Peppermint Herbal",
    description:
      "It's great to find an organic version of peppermint, one of our favorite herbals. Aromatic and relaxing, you'll enjoy a cup in the afternoon or evening. Try our convenient large box of 50 tea bags. Each tea bag brews a 6 to 8 oz cup of tea. Caffeine-free herbal.",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 13,
    countInStock: 0,
    name: "Harney & Sons Herbal Tea, Tea Bags, Chamomile, 50 Count",
    image: "/uploads/image-1638359110058.jpeg",
    brand: "Harney & Sons ",
    category: "Chamomile",
    description: "Harney & Sons Herbal Tea, Chamomile, 50 Tea Bags",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 13,
    countInStock: 10,
    name: "Harney & Sons Hot Cinnamon Spice Tea, 50 Tea Bags",
    image: "/uploads/image-1638359172810.jpg",
    brand: "Harney & Sons",
    category: "Cinnamon",
    description: "Cinnamon flavoured tea",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 11,
    countInStock: 10,
    name: "Harney & Sons Black Tea, Tea Bags, Decaffeinated, 50 Count",
    image: "/uploads/image-1638359230485.jpg",
    brand: "Harney & Sons",
    category: "Decaffeinated",
    description: "Decaffeinated Tea bags, 50 count",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 15,
    countInStock: 10,
    name: "Harney & Sons Earl Grey Tea - 50 Individually Wrapped Tea Bags - Black Tea with Bergamot",
    image: "/uploads/image-1638359278117.jpg",
    brand: "Harney & Sons",
    category: "Earl Grey",
    description: "Earl Grey tea, 50 bags",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 10,
    countInStock: 10,
    name: "Harney & Sons English Breakfast Tea 100g / 3.57 oz (50 Tea Bags)",
    image: "/uploads/image-1638359338653.jpg",
    brand: "Harney & Sons",
    category: "English Breakfast",
    description: "English Breakfast Tea, 50 bags",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 15,
    countInStock: 10,
    name: "Harney & Sons Herbal Tea, Lemon, 50 Tea Bags",
    image: "/uploads/image-1638359386188.jpg",
    brand: "Harney & Sons",
    category: "Lemon Herbal",
    description: "Lemon Herbal tea, 50 bags",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 16,
    countInStock: 10,
    name: "Harney & Sons Orange Pekoe Tea, 50 ct teabag box",
    image: "/uploads/image-1638359437773.jpg",
    brand: "Harney & Sons",
    category: "Orange Pekoe",
    description: "Orange Pekoe tea, 50 bags",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 10,
    countInStock: 10,
    name: "Harney & Sons Green Tea, Organic Citron, 50 Tea Bags",
    image: "/uploads/image-1638359485704.jpeg",
    brand: "Harney & Sons",
    category: "Citron Green",
    description: "Citron Green tea, 50 Bags",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 15.1,
    countInStock: 10,
    name: "Harney & Sons Organic Earl Grey Supreme Teabags, 50 Count",
    image: "/uploads/image-1638359548830.jpg",
    brand: "Harney & Sons",
    category: "Earl Grey Supreme",
    description: "Earl Grey Supreme tea, 50 bags",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 10,
    countInStock: 10,
    name: "Harney & Sons Fruity Black Tea with Bergamot, Paris, 50 Tea Bags",
    image: "/uploads/image-1638359594656.jpg",
    brand: "Harney & Sons",
    category: "Paris",
    description: "Paris tea, 50 bags",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 10,
    countInStock: 10,
    name: "Harney & Sons Japanese Sencha Green Tea, 50 Tea Bags",
    image: "/uploads/image-1638359630350.jpg",
    brand: "Harney & Sons",
    category: "Sencha Green",
    description: "Sencha Green tea, 50 bags",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 60,
    countInStock: 10,
    name: "Twinings of London Darjeeling Tea Bags, 50 Count (Pack of 6)",
    image: "/uploads/image-1638359722930.jpeg",
    brand: "Twinings",
    category: "Darjeeling",
    description: "Darjeeling tea, pack of 50, 6 pack",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 40,
    countInStock: 10,
    name: "Twinings of London Earl Grey Black Tea Bags, 50 Count (Pack of 6)",
    image: "/uploads/image-1638359778876.jpeg",
    brand: "Twinings",
    category: "Earl Grey",
    description: "Earl Grey tea, 50 bags, 6pack",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 38.75,
    countInStock: 10,
    name: "Twinings of London English Breakfast Tea Bags, 50 Count (Pack of 6)",
    image: "/uploads/image-1638359833109.jpg",
    brand: "Twinings",
    category: "English Breakfast",
    description: "English Breakfast Tea, 50 bags, pack of 6",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 12,
    countInStock: 10,
    name: "Twinings of London Decaffeinated English Breakfast Black Tea Bags, 50 Count (Pack of 6)",
    image: "/uploads/image-1638368191431.jpg",
    brand: "Twinings",
    category: "English Breakfast Decaffeinated",
    description: "English Breakfast Decaffeinated tea, 50 pack, pack of 6",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 45,
    countInStock: 0,
    name: "Twinings of London Irish Breakfast Black Tea Bags, 50 Count (Pack of 6)",
    image: "/uploads/image-1638368252386.jpeg",
    brand: "Twinings",
    category: "Irish Breakfast",
    description: "Irish Breakfast tea, pack of 50, 6 pack",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 50,
    countInStock: 10,
    name: "Twinings of London Lemon and Ginger Herbal Tea Bags, 50 Count (Pack of 6)",
    image: "/uploads/image-1638368304768.jpg",
    brand: "Twinings",
    category: "Lemon & ginger",
    description: "Lemon & ginger tea, pack of 50, 6 pack",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 48.55,
    countInStock: 0,
    name: "Twinings of London Pure Peppermint Herbal Tea Bags, 50 Count (Pack of 6)",
    image: "/uploads/image-1638368363567.jpeg",
    brand: "Twinings",
    category: "Peppermint",
    description: "Peppermint tea, pack of 50, 6 pack",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 50,
    countInStock: 5,
    name: "Twinings of London Pure Camomile Herbal Tea Bags, 50 Count (Pack of 6)",
    image: "/uploads/image-1638370610678.jpg",
    brand: "Twinings",
    category: "Chamomile",
    description: "Chamomile tea, pack of 50, 6 pack",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 47.99,
    countInStock: 0,
    name: "Twinings of London Pure Green Tea Bags, 50 Count (Pack of 6)",
    image: "/uploads/image-1638370666998.jpeg",
    brand: "Twinings",
    category: "Green Tea",
    description: "Green Tea, pack of 50, 6 pack",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 22.04,
    countInStock: 0,
    name: "Tetley British Blends Duchess Balmoral Black Tea, Sweet & Creamy Vanilla Tea, 20 Tea Bags (Pack of 6), Rainforest Alliance Certified",
    image: "/uploads/image-1638370749674.jpg",
    brand: "Tetley",
    category: "Vanilla Black Tea",
    description: "Vanilla Black Tea, 20 pack",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 21.75,
    countInStock: 10,
    name: "Tetley British Blends Lord Kensington Black Tea, Strong & Full Bodied Tea, 20 Tea Bags (Pack of 6)",
    image: "/uploads/image-1638370832540.jpg",
    brand: "Tetley",
    category: "Black Tea",
    description: "Black Tea, 20 bags, pack of 6",
  },
  {
    rating: 0,
    numReviews: 0,
    price: 22.37,
    countInStock: 3,
    name: "Tetley British Blends, Courtess Grey, Zesty Earl Grey Black Tea, 20 Tea Bags (Pack of 6)",
    image: "/uploads/image-1638370880474.jpg",
    brand: "Tetley",
    category: "Earl Grey",
    description: "Earl Grey tea, 20 bags, 6pack",
  },
];

export default products;
