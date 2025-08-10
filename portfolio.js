export const portfolioItemsByCategory = {
  "Manipulations": [],
  "Retouching": [
    { id: 1, src: "https://i.ibb.co/nqswjTc8/Master.jpg", alt: "Master" },
    { id: 2, src: "images/Retouchings/Master-1-1-After-Retouch.jpg", alt: "Retouching 2" },
    { id: 3, src: "images/Retouchings/Life-is-very-short-full.jpg", alt: "Retouching 3" },
    { id: 4, src: "images/Retouchings/Life-is-very-short-full 3-4.jpg", alt: "Retouching 4" },
  ],
  "Flyers & Cards": [],
  "CDP": [
    { id: 1, src: "/images/CDP/WorldKajalism.jpg", alt: "World Kajalism" },
  ],
  "Birthday Designs": [
    { id: 1, src: "https://i.ibb.co/JR2n9TvH/Happy-Birthday-Shanvi-Sri.jpg", alt: "Happy Birthday Shanvi Sri" },
    { id: 2, src: "https://i.ibb.co/7t8J0rkm/Happy-Birthday-Yami-Gautam.webp", alt: "Happy Birthday Yami Gautam" },
    { id: 3, src: "https://i.ibb.co/6c0yXdcs/Happy-Birthday-Aishwarya-Rai.jpg", alt: "Happy Birthday Aishwarya Rai" },
    { id: 4, src: "https://i.ibb.co/5hsg5xw1/Happy-Birthday-Ananya-Pandey.jpg", alt: "Happy Birthday Ananya Pandey" },
    { id: 5, src: "https://i.ibb.co/d06NbFBL/Happy-Birthday-Ashika-Ranganath.jpg", alt: "Happy Birthday Ashika Ranganath" },
    { id: 6, src: "https://i.ibb.co/ZbY8mW9/Happy-Birthday-Mahesh-Babu.jpg", alt: "Happy Birthday Mahesh Babu" },
    { id: 7, src: "https://i.ibb.co/465y7Xs/Happy-Birthday-Jeeva-Rebel.jpg", alt: "Happy Birthday Jeeva Rebel" },
    { id: 8, src: "https://i.ibb.co/PzhfzT5T/Happy-Birthday-Kashish-Khan.jpg", alt: "Happy Birthday Kashish Khan" },
    { id: 9, src: "https://i.ibb.co/bMbhR0xt/Happy-Birthday-Neha-Shetty.jpg", alt: "Happy Birthday Neha Shetty" },
    { id: 10, src: "https://i.ibb.co/WNpQYBBK/Happy-Birthday-Nagu-Power-King.jpg", alt: "Happy Birthday Nagu Power King" },
    { id: 11, src: "https://i.ibb.co/20QLkNgH/Happy-Birthday-Nisha-Aggarwal.jpg", alt: "Happy Birthday Nisha Aggarwal" },
    { id: 12, src: "https://i.ibb.co/b5W79KJZ/Happy-Birthday-Pooja-Friend.jpg", alt: "Happy Birthday Pooja Friend" },
    { id: 13, src: "https://i.ibb.co/dwVtmb9p/Happy-Birthday-Pooja-Hegde.jpg", alt: "Happy Birthday Pooja Hegde" },
    { id: 14, src: "https://i.ibb.co/9kPMQ5q1/Happy-Birthday-Prabhas.jpg", alt: "Happy Birthday Prabhas" },
    { id: 15, src: "https://i.ibb.co/kV2THT4W/Happy-Birthday-Priyanka-Mohan.jpg", alt: "Happy Birthday Priyanka Mohan" },
    { id: 16, src: "https://i.ibb.co/5WFX9HFV/Happy-Birthday-PSPK.jpg", alt: "Happy Birthday Power Star Pavan Kalyan" },
    { id: 17, src: "https://i.ibb.co/gM2k0jrQ/Happy-Birthday-Rakul-Preet.jpg", alt: "Happy Birthday Rakul Preet" },
    { id: 18, src: "https://i.ibb.co/ksRyjydL/Happy-Birthday-Sai-Kiran.jpg", alt: "Happy Birthday Sai Kiran" },
  ],  
  "Other Designs": [],
};

// Flatten all items into one array for "All" category
export const portfolioItems = Object.entries(portfolioItemsByCategory).flatMap(
  ([category, items]) => items.map(item => ({ ...item, category }))
);
