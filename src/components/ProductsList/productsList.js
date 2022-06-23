const productsList = [
    {
        id:"1",
        title:"Dell 15 (2021) i3-1005G1 Laptop, 8GB, 256GB SSD, Win 10 + MS Office, Integrated Graphics, 15.6-inch (39.62 cms) FHD Display, Accent Black (Inspiron 3511, D560496WIN9BE)",
        price: "38990",
        brand:"Dell",
        category:"laptops",
        image:'https://m.media-amazon.com/images/I/61XR0oGhF6L._SL1000_.jpg'
        
    },
    {
        id:"2",
        title:"HP 15 Ryzen 3 Thin & Light 15.6-inch (39.6 cms) FHD Laptop (Ryzen 3 3250U/8GB/256GB SSD/Windows 10/MS Office/1.69 kg), 15s-gy0501AU, Silver",
        price: "38990",
        brand:"HP",
        category:"laptops",
        image:'https://m.media-amazon.com/images/I/71SMr4ZGf1L._SL1500_.jpg'
    },
    {
        id:"3",
        title:"Dell 14 (2021) i5-11300H, 16GB, 512GB SSD, Integrated Graphics, Win 10 + MS Office, 14.0-inch (35.56 cms) FHD Display, Backlit KB + FPR, Silver (Inspiron 5418, D560598WIN9S)",
        price: "71946",
        brand:"Dell",
        category:"laptops",
        image:'https://m.media-amazon.com/images/I/51jCX2Sy0iL._SL1080_.jpg'
    },
    {
        id:"4",
        title:"HP Chromebook x360 14-inch (35.56 cms) Thin & Light Touchscreen Laptop (AMD 3015CE/4GB/64GB eMMC Storage/Chrome OS/Mineral Silver/1.49 kg), 14a-cb0007AU",
        price: "31490",
        brand:"HP",
        category:"laptops",
        image:' https://m.media-amazon.com/images/I/81hoonPUdxL._SL1500_.jpg'
    },
    {
        id:"5",
        title:"Dell Inspiron 3501 15.6-inch (39.62 cms) FHD Display Laptop (i5-1135G7 / 4GB / 1TB HDD + 256GB SSD / Integrated Graphics / Win 10 + MSO / Soft Mint Color) D560437WIN9SE",
        price: "53990",
        brand:"Lenovo",
        category:"laptops",
        image:'https://www.lenovo.com/medias/lenovo-laptop-ideapad-1-11-intel-hero.png?context=bWFzdGVyfHJvb3R8MjUyODM2fGltYWdlL3BuZ3xoODIvaGM2LzEwNzg2MTkyNTg4ODMwLnBuZ3w1MGYyMGJhMzU1ODg3ZDU2NDU4MWRlOGUxODc3ZWNkZTA3YjRhM2YwZjI2ZTAwMzQ1YTNlZTM1MzUzMDMwYTc1'
    },
    {
        id:"6",
        title:"HP Pavilion (2021) Intel 11th Gen Core i7 14 inches FHD Screen Thin & Light Laptop, 16 GB RAM, 1TB SSD, Iris Xe Graphics, Windows 10, MS Office, Backlit Keyboard, 1.41kg (14-dv0058TU)",
        price: "84990",
        brand:"HP",
        category:"laptops",
        image:'https://m.media-amazon.com/images/I/71hmqIQJFdL._SL1200_.jpg'
    },
    {
        id:"7",
        title:"Dell 14 (2021) i7-1195G7 2in1 Touch Screen Laptop, 16GB, 512GB SSD, Win 10 + MS Office, 14.0-inch (35.56 cms) FHD Display, Backlit KB, FPR + Active Pen, Platinum Silver (Inspiron 5410, D560596WIN9S)",
        price: "96990",
        brand:"Dell",
        category:"laptops",
        image:'https://m.media-amazon.com/images/I/618nCW+Qk+S._SL1200_.jpg'
    },
    {
        id:"8",
        title:"Dell Inspiron 3501 15.6-inch (39.62 cms) FHD Display Laptop (i5-1135G7 / 4GB / 1TB HDD + 256GB SSD / Integrated Graphics / Win 10 + MSO / Soft Mint Color) D560437WIN9SE",
        price: "53990",
        brand:"Dell",
        category:"laptops",
        image:'https://m.media-amazon.com/images/I/510u0O5aJcL._SL1000_.jpg'
    },
    {
        id:"9",
        title:"boAt Rockerz 550 Over-Ear Wireless Headphone with Ergonomic Aesthetics, Plush Padded Earcups, Immersive Audio, Bluetooth v5.0 & Upto 20H Playback (Black)",
        price: "1499",
        brand:"Boat",
        category:"headphones",
        image:'https://m.media-amazon.com/images/I/61gYxcIGjvL._SL1500_.jpg'
    },
    {
        id:"10",
        title:"boAt Bassheads 900 Wired On Ear Headphones with Mic (Carbon Black)",
        price: "599",
        brand:"Boat",
        category:"headphones",
        image:'https://m.media-amazon.com/images/I/61xeIT6UHrL._SL1500_.jpg'
    },
    {
        id:"11",
        title:"boAt Rockerz 510 Wireless Bluetooth On Ear Headphones with Mic (Raging Red)",
        price: "1199",
        brand:"Boat",
        category:"headphones",
        image:'https://m.media-amazon.com/images/I/61YvHa6o94L._SL1500_.jpg'
    },
    {
        id:"12",
        title:"Sony WH-1000XM4 Industry Leading Wireless Noise Cancellation Headphones, Bluetooth Headset with Mic for Phone Calls, 30 Hrs Battery Life, Quick Charge, WFH, Touch Control, Alexa Voice Control (Black)",
        price: "22999",
        brand:"Sony",
        category:"headphones",
        image:'https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg'
    },
    {
        id:"13",
        title:"Sony WH-1000XM3 Industry Leading Wireless Noise Cancellation Headphones, Bluetooth Headset with Mic for Phone Calls, Work from Home, 30 Hours Battery Life, Quick Charge & Alexa Voice Control (Black)",
        price: "15990",
        brand:"Sony",
        category:"headphones",
        image:'https://m.media-amazon.com/images/I/61D4Z3yKPAL._SL1500_.jpg'
    },
    {
        id:"14",
        title:"Sony MDR-ZX110A Wired On Ear Headphone without Mic (White)",
        price: "549",
        brand:"Sony",
        category:"headphones",
        image:'https://m.media-amazon.com/images/I/41BoLKMYjnL._SL1128_.jpg'
    },
    {
        id:"15",
        title:"Boat HeadPhones",
        price: "80",
        brand:"Boat",
        category:"headphones",
        image:'https://m.media-amazon.com/images/I/61stQYWQO4L._SX569_.jpg'
    },
    {
        id:"16",
        title:"2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Space Grey",
        price: "115499",
        brand:"Apple",
        category:"laptops",
        image:'https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg'
    },
    {
        id:"17",
        title:"2020 Apple MacBook Pro (13.3-inch/33.78 cm, 16GB RAM, 512GB SSD, 2.0GHz Quad-core 10th-Generation Intel Core i5 Processor, Four Thunderbolt 3 Ports) - Silver",
        price: "160990",
        brand:"Apple",
        category:"laptops",
        image:'https://m.media-amazon.com/images/I/716R-UhEB+L._SL1500_.jpg'
    },
    {
        id:"18",
        title:"2021 Apple MacBook Pro (16-inch/41.05 cm, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Space Grey",
        price: "239900",
        brand:"Apple",
        category:"laptops",
        image:'https://m.media-amazon.com/images/I/61aUBxqc5PL._SL1500_.jpg'
    },
    {
        id:"19",
        title:"2021 Apple MacBook Pro (16-inch/41.05 cm, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) - Space Grey",
        price: "259900",
        brand:"Apple",
        category:"laptops",
        image:'https://m.media-amazon.com/images/I/61aUBxqc5PL._SL1500_.jpg'
    },
    {
        id:"20",
        title:"Boat HeadPhones",
        price: "80",
        brand:"Boat",
        category:"headphones",
        image:'https://m.media-amazon.com/images/I/61stQYWQO4L._SX569_.jpg'
    },
    {
        id:"21",
        title:"JBL Tune 500 by Harman Powerful Bass On-Ear Headphones with Mic (Black)",
        price: "1999",
        brand:"JBL",
        category:"headphones",
        image:'https://m.media-amazon.com/images/I/61uAHEZcZcS._SL1500_.jpg'
    },
    {
        id:"22",
        title:"JBL Tune 500BT by Harman Powerful Bass Wireless On-Ear Headphones with Mic, 16 Hours Playtime & Multi Connect Connectivity (Black)",
        price: "2789",
        brand:"JBL",
        category:"headphones",
        image:'https://m.media-amazon.com/images/I/61TEw1TsqTS._SL1500_.jpg'
        
    },
    {
        id:"23",
        title:"JBL Tune 750BTNC, Over Ear Active Noise Cancellation Headphones with Mic, 40mm Dynamic Drivers, JBL Pure Bass, Dual Pairing, AUX & Voice Assistant Support for Mobile Phones (Black)",
        price: "5499",
        brand:"JBL",
        category:"headphones",
        image:'https://m.media-amazon.com/images/I/615kVct65LL._SL1000_.jpg'
    },
    {
        id:"24",
        title:"JBL T460BT by Harman, Wireless On Ear Headphones with Mic, Pure Bass, Portable, Lightweight & Flat Foldable, Voice Assistant Support for Mobiles (Black)",
        price: "2699",
        brand:"JBL",
        category:"headphones",
        image:'https://m.media-amazon.com/images/I/71iiXU7HHkL._SL1500_.jpg'
    },
    {
        id:"25",
        title:"Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate",
        price: "9499",
        brand:"Samsung",
        category:"mobiles",
        image:' https://m.media-amazon.com/images/I/71r69Y7BSeL._SL1500_.jpg'
    },
    {
        id:"26",
        title:"Samsung Galaxy M51 (Celestial Black, 6GB RAM, 128GB Storage) 6 Months Free Screen Replacement for Prime",
        price: "19999",
        brand:"Samsung",
        category:"mobiles",
        image:'https://m.media-amazon.com/images/I/713AhSUtbHL._SL1500_.jpg'
    },
    {
        id:"27",
        title:"Samsung Galaxy M52 5G (Blazing Black, 6GB RAM, 128GB Storage) Latest Snapdragon 778G 5G | sAMOLED 120Hz Display",
        price: "25999",
        brand:"Samsung",
        category:"mobiles",
        image:'https://m.media-amazon.com/images/I/71b5BwTCcZL._SL1500_.jpg'
    },
    {
        id:"28",
        title:"Samsung Galaxy M21 2021 Edition (Charcoal black, 6GB RAM, 128GB Storage) | FHD+ sAMOLED | 6 Months Free Screen Replacement for Prime (SM-M215GZKHINS)",
        price: "13999",
        brand:"Samsung",
        category:"mobiles",
        image:'https://m.media-amazon.com/images/I/712+A5mH44L._SL1500_.jpg'
    },
    {
        id:"29",
        title:"Apple iPhone 11 (64GB) - White",
        price: "41999",
        brand:"Apple",
        category:"mobiles",
        image:'https://m.media-amazon.com/images/I/71QE00iB9IL._SL1500_.jpg'
    },
    {
        id:"30",
        title:"Apple iPhone XR (64GB) - Black",
        price: "32999",
        brand:"Apple",
        category:"mobiles",
        image:'https://m.media-amazon.com/images/I/519KIlHA2wL._SL1024_.jpg'
    },
    {
        id:"31",
        title:"New Apple iPhone 12 Pro (128GB) - Pacific Blue",
        price: "97990",
        brand:"Apple",
        category:"mobiles",
        image:'https://m.media-amazon.com/images/I/71DVgBTdyLL._SL1500_.jpg'
    },
    {
        id:"32",
        title:"New Apple iPhone 12 Pro Max (512GB) - Pacific Blue with Apple 20W USB-C Power Adapter",
        price: "151799",
        brand:"Apple",
        category:"mobiles",
        image:'https://m.media-amazon.com/images/I/71caibxmUlL._SL1500_.jpg'
    },
    {
        id:"33",
        title:"Redmi 9A (Midnight Black, 2GB RAM, 32GB Storage) | 2GHz Octa-Core Helio G25 Processor",
        price: "6999",
        brand:"Redmi",
        category:"mobiles",
        image:'https://m.media-amazon.com/images/I/71sxlhYhKWL._SL1500_.jpg'
    },
    {
        id:"34",
        title:"Redmi Note 10S (Cosmic Purple, 6GB RAM, 64 GB Storage) - Super Amoled Display | 64 MP Quad Camera | Alexa Built in",
        price: "13999",
        brand:"Redmi",
        category:"mobiles",
        image:'https://m.media-amazon.com/images/I/81sZamLSPWL._SL1500_.jpg'
    },
    {
        id:"35",
        title:"Redmi Note 10 Pro Max (Dark Night, 6GB RAM, 128GB Storage) -108MP Quad Camera | 120Hz Super Amoled Display",
        price: "18999",
        brand:"Redmi",
        category:"mobiles",
        image:'https://m.media-amazon.com/images/I/81Vpy0XrvFL._SL1500_.jpg'
    },
    {
        id:"36",
        title:"Redmi 9 Prime (Space Blue, 4GB RAM, 64GB Storage)- Full HD+ Display & AI Quad Camera",
        price: "10499",
        brand:"Redmi",
        category:"mobiles",
        image:'https://m.media-amazon.com/images/I/71U2SiHgbiL._SL1500_.jpg'
    },
    {
        id:"37",
        title:"Adidas mens Pulseboost Hd M Running Shoe",
        price: "8999",
        brand:"Adidas",
        category:"shoes",
        image:'https://m.media-amazon.com/images/I/71Yt1nfa8dS._UL1500_.jpg'
    },
    {
        id:"38",
        title:"Adidas Unisex-Adult Supernova + M Running Shoe",
        price: "6950",
        brand:"Adidas",
        category:"shoes",
        image:'https://m.media-amazon.com/images/I/71EBvYOes7S._UL1500_.jpg'
    },
    {
        id:"39",
        title:"Adidas Men's Breaknet Plus Leather Tennis Shoe",
        price: "3599",
        brand:"Adidas",
        category:"shoes",
        image:'https://m.media-amazon.com/images/I/61NuMYXcrfS._UL1500_.jpg'
    },
    {
        id:"40",
        title:" Adidas Men's Terrex Swift R3 Mid GTX Hiking Footwear",
        price: "5999",
        brand:"Adidas",
        category:"shoes",
        image:'https://m.media-amazon.com/images/I/71uJURngJdL._UL1500_.jpg'
    },
    {
        id:"41",
        title:"Nike Men's Zoom Winflo 8 Running Shoe",
        price: "6535",
        brand:"Nike",
        category:"shoes",
        image:'https://m.media-amazon.com/images/I/61o7Y6a-4GL._UL1500_.jpg'
    },
    {
        id:"42",
        title:"Nike Men Lunarconverge 2 Running Shoes",
        price: "2999",
        brand:"Nike",
        category:"shoes",
        image:'https://m.media-amazon.com/images/I/71E1t79+A7L._UL1500_.jpg'
    },
    {
        id:"43",
        title:"Nike Men's Air Zoom Pegasus 38 Running Shoe",
        price: "7726",
        brand:"Nike",
        category:"shoes",
        image:'https://m.media-amazon.com/images/I/81Xtywhb0dL._UL1500_.jpg'
        
    },
    {
        id:"44",
        title:"Nike Men's Flex 2020 Rn Running Shoes",
        price: "3621",
        brand:"Nike",
        category:"shoes",
        image:'https://m.media-amazon.com/images/I/41uB7WNYsUL.jpg'
    },
    {
        id:"45",
        title:"Puma Men's Ultraride Running Shoe",
        price: "5300",
        brand:"Puma",
        category:"shoes",
        image:'https://m.media-amazon.com/images/I/71Q2Uw9mdGL._UL1500_.jpg'
    },
    {
        id:"46",
        title:"Puma mens Future Rider Twofold Platform",
        price: "6299",
        brand:"Puma",
        category:"shoes",
        image:'https://m.media-amazon.com/images/I/61mU6lwdfdL._UL1200_.jpg'
    },
    {
        id:"47",
        title:"Puma Men's Ignite Flash Evoknit BlackAsphaltWhite Running Shoes-8 UK (190508)",
        price: "2789",
        brand:"Puma",
        category:"shoes",
        image:'https://m.media-amazon.com/images/I/81vw6FHkdrL._UL1500_.jpg'
    },
    {
        id:"48",
        title:"Puma Cell Fraction Fade Men's Running Shoes",
        price: "6500",
        brand:"Puma",
        category:"shoes",
        image:'https://m.media-amazon.com/images/I/71rHxHmuvEL._UL1500_.jpg'
    }
];

export default productsList;