const tours = [
  {
    id: 1,
    plan_id: 1,
    plan: "Silver",
    city: "Lahore",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 3000,
    inCart: false,
    persons: 1,
  },
  {
    id: 2,
    plan_id: 1,
    plan: "Silver",
    city: "Naran",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 3000,
    inCart: false,
    persons: 1,
  },
  {
    id: 3,
    plan_id: 1,
    plan: "Silver",
    city: "Savat",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 3000,
    inCart: false,
    persons: 1,
  },
  {
    id: 4,
    plan_id: 1,
    plan: "Silver",
    city: "karachi",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 3000,
    inCart: false,
    persons: 1,
  },
  {
    id: 5,
    plan_id: 1,
    plan: "Silver",
    city: "Islamabad",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 3000,
    inCart: false,
    persons: 1,
  },
  {
    id: 6,
    plan_id: 1,
    plan: "Silver",
    city: "Murree",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 3000,
    inCart: false,
    persons: 1,
  },
  {
    id: 7,
    plan_id: 2,
    plan: "Gold",
    city: "Lahore",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 8000,
    inCart: false,
    persons: 1,
  },
  {
    id: 8,
    plan_id: 2,
    plan: "Gold",
    city: "Naran",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 8000,
    inCart: false,
    persons: 1,
  },
  {
    id: 9,
    plan_id: 2,
    plan: "Gold",
    city: "Savat",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 8000,
    inCart: false,
    persons: 1,
  },
  {
    id: 10,
    plan_id: 2,
    plan: "Gold",
    city: "karachi",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 8000,
    inCart: false,
    persons: 1,
  },
  {
    id: 11,
    plan_id: 2,
    plan: "Gold",
    city: "Islamabad",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 8000,
    inCart: false,
    persons: 1,
  },
  {
    id: 12,
    plan_id: 2,
    plan: "Gold",
    city: "Murree",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 8000,
    inCart: false,
    persons: 1,
  },
  {
    id: 13,
    plan_id: 3,
    plan: "Diamond",
    city: "Lahore",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 15000,
    inCart: false,
    persons: 1,
  },
  {
    id: 14,
    plan_id: 3,
    plan: "Diamond",
    city: "Naran",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 15000,
    inCart: false,
    persons: 1,
  },
  {
    id: 15,
    plan_id: 3,
    plan: "Diamond",
    city: "Savat",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 15000,
    inCart: false,
    persons: 1,
  },
  {
    id: 16,
    plan_id: 3,
    plan: "Diamond",
    city: "karachi",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 15000,
    inCart: false,
    persons: 1,
  },
  {
    id: 17,
    plan_id: 3,
    plan: "Diamond",
    city: "Islamabad",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 15000,
    inCart: false,
    persons: 1,
  },
  {
    id: 18,
    plan_id: 3,
    plan: "Diamond",
    city: "Murree",
    image:
      "https://propakistani.pk/wp-content/uploads/2019/11/26804914_10156424384213968_6190437040908794886_n.jpg",
    detail:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: 15000,
    inCart: false,
    persons: 1,
  },
];

export { tours };
