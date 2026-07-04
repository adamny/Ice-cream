const vendors = [
  {
    id: 1,
    name: "Lake Effect Ice Cream (Hertel)",
    location: {
      address: "1900 Hertel Ave, Buffalo, NY 14214",
      lat: 42.9474,
      lng: -78.8504
    },
    hours: {
      "Sunday": "12:00 PM - 10:00 PM",
      "Monday": "12:00 PM - 10:00 PM",
      "Tuesday": "12:00 PM - 10:00 PM",
      "Wednesday": "12:00 PM - 10:00 PM",
      "Thursday": "12:00 PM - 10:00 PM",
      "Friday": "12:00 PM - 10:00 PM",
      "Saturday": "12:00 PM - 10:00 PM"
    },
    price: "$$",
    rating: 4.8,
    flavors: [
      "Loganberry",
      "Paula's Glazed Donut",
      "Blue Moon",
      "London Fog",
      "Whiskey Brown Sugar",
      "Sponge Candy"
    ],
    flavorOfTheWeek: "Icewine Sherbet"
  },
  {
    id: 2,
    name: "Anderson's Frozen Custard",
    location: {
      address: "2235 Sheridan Dr, Buffalo, NY 14223",
      lat: 42.9780,
      lng: -78.8350
    },
    hours: {
      "Sunday": "11:00 AM - 10:00 PM",
      "Monday": "11:00 AM - 10:00 PM",
      "Tuesday": "11:00 AM - 10:00 PM",
      "Wednesday": "11:00 AM - 10:00 PM",
      "Thursday": "11:00 AM - 10:00 PM",
      "Friday": "11:00 AM - 10:00 PM",
      "Saturday": "11:00 AM - 10:00 PM"
    },
    price: "$",
    rating: 4.6,
    flavors: [
      "Vanilla Custard",
      "Chocolate Custard",
      "Twist",
      "Black Raspberry",
      "Pistachio"
    ],
    flavorOfTheWeek: "Check Anderson's website for Daily Flavor!"
  },
  {
    id: 3,
    name: "King Condrell's Candy & Ice Cream",
    location: {
      address: "2805 Delaware Ave, Kenmore, NY 14217",
      lat: 42.9649,
      lng: -78.8719
    },
    hours: {
      "Sunday": "12:00 PM - 9:00 PM",
      "Monday": "12:00 PM - 9:00 PM",
      "Tuesday": "12:00 PM - 9:00 PM",
      "Wednesday": "12:00 PM - 9:00 PM",
      "Thursday": "12:00 PM - 9:00 PM",
      "Friday": "12:00 PM - 10:00 PM",
      "Saturday": "12:00 PM - 10:00 PM"
    },
    price: "$$",
    rating: 4.7,
    flavors: [
      "Vanilla",
      "Chocolate",
      "Strawberry",
      "Peanut Butter Fudge",
      "Turtle Sundae Base"
    ],
    flavorOfTheWeek: "Fudg-Ana Specialty"
  },
  {
    id: 4,
    name: "Sweet Jenny's Ice Cream",
    location: {
      address: "56 E Spring St, Williamsville, NY 14221",
      lat: 42.9628,
      lng: -78.7441
    },
    hours: {
      "Sunday": "11:00 AM - 9:00 PM",
      "Monday": "10:00 AM - 9:00 PM",
      "Tuesday": "10:00 AM - 9:00 PM",
      "Wednesday": "10:00 AM - 9:00 PM",
      "Thursday": "10:00 AM - 9:00 PM",
      "Friday": "10:00 AM - 9:30 PM",
      "Saturday": "10:00 AM - 9:30 PM"
    },
    price: "$$$",
    rating: 4.8,
    flavors: [
      "Double Dark Chocolate",
      "Orange Chocolate",
      "Salted Caramel Truffle",
      "Cinnamon Nutmeg"
    ],
    flavorOfTheWeek: "Mint Chocolate Chip"
  },
  {
    id: 5,
    name: "Rosie's Handcrafted Ice Cream (Buffalo)",
    location: {
      address: "486 W Utica St, Buffalo, NY 14213",
      lat: 42.9103,
      lng: -78.8837
    },
    hours: {
      "Sunday": "12:00 PM - 10:00 PM",
      "Monday": "12:00 PM - 10:00 PM",
      "Tuesday": "12:00 PM - 10:00 PM",
      "Wednesday": "12:00 PM - 10:00 PM",
      "Thursday": "12:00 PM - 10:00 PM",
      "Friday": "12:00 PM - 11:00 PM",
      "Saturday": "12:00 PM - 11:00 PM"
    },
    price: "$$",
    rating: 4.9,
    flavors: [
      "That Waffle Dough",
      "Cold Brew",
      "Bada Bing Bada Bourbon",
      "Roseberry",
      "Honeylou",
      "Oreo Milk"
    ],
    flavorOfTheWeek: "That Waffle Dough"
  },
  {
    id: 6,
    name: "Nick Charlap's Ice Cream (Hamburg)",
    location: {
      address: "7264 Boston State Rd, Hamburg, NY 14075",
      lat: 42.6953,
      lng: -78.7891
    },
    hours: {
      "Sunday": "12:00 PM - 9:00 PM",
      "Monday": "12:00 PM - 9:00 PM",
      "Tuesday": "12:00 PM - 9:00 PM",
      "Wednesday": "12:00 PM - 9:00 PM",
      "Thursday": "12:00 PM - 9:00 PM",
      "Friday": "12:00 PM - 9:00 PM",
      "Saturday": "12:00 PM - 9:00 PM"
    },
    price: "$$",
    rating: 4.7,
    flavors: [
      "Cashew Caramel Crunch",
      "Bourbon Praline Pecan",
      "Cinnamon",
      "Cotton Candy",
      "Peppermint Stick"
    ],
    flavorOfTheWeek: "Unknown"
  },
  {
    id: 7,
    name: "Churn Soft Serve",
    location: {
      address: "1501 Hertel Ave, Buffalo, NY 14216",
      lat: 42.9474,
      lng: -78.8504
    },
    hours: {
      "Sunday": "5:00 PM - 9:45 PM",
      "Monday": "5:00 PM - 9:45 PM",
      "Tuesday": "5:00 PM - 9:45 PM",
      "Wednesday": "5:00 PM - 9:45 PM",
      "Thursday": "5:00 PM - 9:45 PM",
      "Friday": "5:00 PM - 9:45 PM",
      "Saturday": "5:00 PM - 9:45 PM"
    },
    price: "$$",
    rating: 4.5,
    flavors: [
      "Vanilla Soft Serve",
      "Chocolate Soft Serve",
      "Vegan Coconut Base",
      "Mint Condition",
      "Cookie Monsta"
    ],
    flavorOfTheWeek: "The Samoan"
  },
  {
    id: 8,
    name: "Parkside Candy",
    location: {
      address: "3208 Main St, Buffalo, NY 14214",
      lat: 42.9515,
      lng: -78.8202
    },
    hours: {
      "Sunday": "12:00 PM - 6:00 PM",
      "Monday": "11:00 AM - 6:00 PM",
      "Tuesday": "11:00 AM - 6:00 PM",
      "Wednesday": "11:00 AM - 6:00 PM",
      "Thursday": "11:00 AM - 6:00 PM",
      "Friday": "11:00 AM - 7:00 PM",
      "Saturday": "11:00 AM - 7:00 PM"
    },
    price: "$$",
    rating: 4.6,
    flavors: [
      "Milk Chocolate Sponge Candy",
      "Dark Chocolate Sponge Candy",
      "Orange Chocolate Sponge Candy",
      "Unknown"
    ],
    flavorOfTheWeek: "Unknown"
  },
  {
    id: 9,
    name: "Antoinette's Sweets",
    location: {
      address: "5981 Transit Rd, Depew, NY 14043",
      lat: 42.8981,
      lng: -78.6974
    },
    hours: {
      "Sunday": "Closed",
      "Monday": "11:00 AM - 9:00 PM",
      "Tuesday": "11:00 AM - 9:00 PM",
      "Wednesday": "11:00 AM - 9:00 PM",
      "Thursday": "11:00 AM - 9:00 PM",
      "Friday": "11:00 AM - 9:00 PM",
      "Saturday": "11:00 AM - 9:00 PM"
    },
    price: "$$",
    rating: 4.7,
    flavors: [
      "Vanilla",
      "Chocolate",
      "Strawberry",
      "Turtle Royal",
      "Greek Mint Special"
    ],
    flavorOfTheWeek: "Unknown"
  },
  {
    id: 10,
    name: "Hibbard's Custard",
    location: {
      address: "105 Portage Rd, Lewiston, NY 14092",
      lat: 43.1724,
      lng: -79.0392
    },
    hours: {
      "Sunday": "11:00 AM - 9:00 PM",
      "Monday": "11:00 AM - 9:00 PM",
      "Tuesday": "11:00 AM - 9:00 PM",
      "Wednesday": "11:00 AM - 9:00 PM",
      "Thursday": "11:00 AM - 9:00 PM",
      "Friday": "11:00 AM - 9:00 PM",
      "Saturday": "11:00 AM - 9:00 PM"
    },
    price: "$$",
    rating: 4.5,
    flavors: [
      "Vanilla",
      "Chocolate",
      "Black Raspberry",
      "Pistachio",
      "Cookie Monster"
    ],
    flavorOfTheWeek: "Pistachio"
  },
  {
    id: 11,
    name: "Anderson's Frozen Custard (Main Street)",
    location: {
      address: "6075 Main St, Williamsville, NY 14221",
      lat: 42.9620,
      lng: -78.7300
    },
    hours: {
      "Sunday": "11:00 AM - 10:00 PM",
      "Monday": "11:00 AM - 10:00 PM",
      "Tuesday": "11:00 AM - 10:00 PM",
      "Wednesday": "11:00 AM - 10:00 PM",
      "Thursday": "11:00 AM - 10:00 PM",
      "Friday": "11:00 AM - 10:00 PM",
      "Saturday": "11:00 AM - 10:00 PM"
    },
    price: "$",
    rating: 4.6,
    flavors: [
      "Vanilla Custard",
      "Chocolate Custard",
      "Twist",
      "Black Raspberry",
      "Pistachio"
    ],
    flavorOfTheWeek: "Check Anderson's website for Daily Flavor!"
  },
  {
    id: 12,
    name: "Anderson's Frozen Custard (Niagara Falls Blvd)",
    location: {
      address: "2369 Niagara Falls Blvd, Amherst, NY 14228",
      lat: 43.0300,
      lng: -78.8200
    },
    hours: {
      "Sunday": "11:00 AM - 10:00 PM",
      "Monday": "11:00 AM - 10:00 PM",
      "Tuesday": "11:00 AM - 10:00 PM",
      "Wednesday": "11:00 AM - 10:00 PM",
      "Thursday": "11:00 AM - 10:00 PM",
      "Friday": "11:00 AM - 10:00 PM",
      "Saturday": "11:00 AM - 10:00 PM"
    },
    price: "$",
    rating: 4.6,
    flavors: [
      "Vanilla Custard",
      "Chocolate Custard",
      "Twist",
      "Black Raspberry",
      "Pistachio"
    ],
    flavorOfTheWeek: "Check Anderson's website for Daily Flavor!"
  },
  {
    id: 13,
    name: "Anderson's Frozen Custard (Delaware Ave)",
    location: {
      address: "2634 Delaware Ave, Buffalo, NY 14216",
      lat: 42.9550,
      lng: -78.8700
    },
    hours: {
      "Sunday": "11:00 AM - 10:00 PM",
      "Monday": "11:00 AM - 10:00 PM",
      "Tuesday": "11:00 AM - 10:00 PM",
      "Wednesday": "11:00 AM - 10:00 PM",
      "Thursday": "11:00 AM - 10:00 PM",
      "Friday": "11:00 AM - 10:00 PM",
      "Saturday": "11:00 AM - 10:00 PM"
    },
    price: "$",
    rating: 4.6,
    flavors: [
      "Vanilla Custard",
      "Chocolate Custard",
      "Twist",
      "Black Raspberry",
      "Pistachio"
    ],
    flavorOfTheWeek: "Check Anderson's website for Daily Flavor!"
  },
  {
    id: 14,
    name: "Anderson's Frozen Custard (Union Rd)",
    location: {
      address: "3724 Union Rd, Cheektowaga, NY 14225",
      lat: 42.9200,
      lng: -78.7600
    },
    hours: {
      "Sunday": "11:00 AM - 10:00 PM",
      "Monday": "11:00 AM - 10:00 PM",
      "Tuesday": "11:00 AM - 10:00 PM",
      "Wednesday": "11:00 AM - 10:00 PM",
      "Thursday": "11:00 AM - 10:00 PM",
      "Friday": "11:00 AM - 10:00 PM",
      "Saturday": "11:00 AM - 10:00 PM"
    },
    price: "$",
    rating: 4.6,
    flavors: [
      "Vanilla Custard",
      "Chocolate Custard",
      "Twist",
      "Black Raspberry",
      "Pistachio"
    ],
    flavorOfTheWeek: "Check Anderson's website for Daily Flavor!"
  },
  {
    id: 15,
    name: "Anderson's Frozen Custard (Transit Rd)",
    location: {
      address: "4855 Transit Rd, Depew, NY 14043",
      lat: 42.9000,
      lng: -78.7000
    },
    hours: {
      "Sunday": "11:00 AM - 10:00 PM",
      "Monday": "11:00 AM - 10:00 PM",
      "Tuesday": "11:00 AM - 10:00 PM",
      "Wednesday": "11:00 AM - 10:00 PM",
      "Thursday": "11:00 AM - 10:00 PM",
      "Friday": "11:00 AM - 10:00 PM",
      "Saturday": "11:00 AM - 10:00 PM"
    },
    price: "$",
    rating: 4.6,
    flavors: [
      "Vanilla Custard",
      "Chocolate Custard",
      "Twist",
      "Black Raspberry",
      "Pistachio"
    ],
    flavorOfTheWeek: "Check Anderson's website for Daily Flavor!"
  },
  {
    id: 16,
    name: "Anderson's Frozen Custard (Grand Island)",
    location: {
      address: "2352 Grand Island Boulevard, Grand Island, NY 14072",
      lat: 42.9800,
      lng: -78.9600
    },
    hours: {
      "Sunday": "11:00 AM - 10:00 PM",
      "Monday": "11:00 AM - 10:00 PM",
      "Tuesday": "11:00 AM - 10:00 PM",
      "Wednesday": "11:00 AM - 10:00 PM",
      "Thursday": "11:00 AM - 10:00 PM",
      "Friday": "11:00 AM - 10:00 PM",
      "Saturday": "11:00 AM - 10:00 PM"
    },
    price: "$",
    rating: 4.6,
    flavors: [
      "Vanilla Custard",
      "Chocolate Custard",
      "Twist",
      "Black Raspberry",
      "Pistachio"
    ],
    flavorOfTheWeek: "Check Anderson's website for Daily Flavor!"
  },
  {
    id: 17,
    name: "Fran-Ceil Custard",
    location: {
      address: "3411 South Park Ave, Buffalo, NY 14219",
      lat: 42.8072,
      lng: -78.8242
    },
    hours: {
      "Sunday": "12:00 AM - 10:00 PM",
      "Monday": "12:00 AM - 10:00 PM",
      "Tuesday": "12:00 AM - 10:00 PM",
      "Wednesday": "12:00 AM - 10:00 PM",
      "Thursday": "12:00 AM - 10:00 PM",
      "Friday": "12:00 AM - 10:00 PM",
      "Saturday": "12:00 AM - 10:00 PM"
    },
    price: "$",
    rating: 4.6,
    flavors: [
      "Peanut Butter",
      "Pistachio"
    ],
    flavorOfTheWeek: "Contact the vendor"
  },
  {
    id: 18,
    name: "2 Scoops Ice Cream",
    location: {
      address: "4626 Camp Rd, Hamburg, NY 14075",
      lat: 42.7483,
      lng: -78.8351
    },
    hours: {
      "Sunday": "12:00 AM - 9:00 PM",
      "Monday": "12:00 AM - 9:00 PM",
      "Tuesday": "12:00 AM - 9:00 PM",
      "Wednesday": "12:00 AM - 9:00 PM",
      "Thursday": "12:00 AM - 9:00 PM",
      "Friday": "12:00 AM - 9:00 PM",
      "Saturday": "12:00 AM - 9:00 PM"
    },
    price: "$$",
    rating: 4.8,
    flavors: [
      "Blueberry Custard",
      "Maple Custard",
      "Peanut Butter Custard",
      "Dole Whip Pineapple",
      "Dole Whip Mango",
      "Dairy-Free Temptation Soft Serve"
    ],
    flavorOfTheWeek: "Unknown"
  }
];
