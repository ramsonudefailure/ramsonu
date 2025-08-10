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
    { id: 2, src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/503d23157958365.6382dbb07c34e.jpg", alt: "Happy Birthday Yami Gautam" },
    { id: 3, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/a6d91c157958557.6382ddb254b2e.jpg", alt: "Happy Birthday Suresh Raina" },
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
    { id: 19, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/fe0b9f158765191.63918b42825f7.jpg", alt: "Happy Birthday Shanvi Srivastava" },
    { id: 20, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/66c127158491529.638ce5da73858.jpg", alt: "Happy Birthday Payal Rajput" },
  ],  
  "Other Designs": [
    { id: 1, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/47c05e224995349.68150cafdd0e4.jpg", alt: "Kingdom" },
    { id: 2, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/85f97d210360407.670fcf051c872.jpg", alt: "Lik Pradeep" },
    { id: 3, src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/e14aeb210166433.670cedfb881a9.jpg", alt: "Hanuman Desktop Wallpaper" },
    { id: 4, src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/2dc64d210166433.670cedfb87aca.jpg", alt: "Hanuman Desktop Wallpapers" },
    { id: 5, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/9cf833158499377.638d0e2f61c49.jpg", alt: "Original Gangster" },
    { id: 6, src: "https://i.ibb.co/w6FjR0T/D3.jpg", alt: "3 The Movie" },
    { id: 7, src: "https://i.ibb.co/m9020ty/YEDHALO-OKA-MOUNAM-SQ-with-text.jpg", alt: "3 The Movie Poster" },
    { id: 8, src: "https://i.ibb.co/2F5c668/Orange-without.jpg", alt: "Orange Movie" },
  ],
};

// Flatten all items into one array for "All" category
export const portfolioItems = Object.entries(portfolioItemsByCategory).flatMap(
  ([category, items]) => items.map(item => ({ ...item, category }))
);
