const BRAND_DATA = [
  {
    id: 'heytea',
    name: 'HEYTEA',
    website: 'https://www.heytea.com/',
    intro: 'Founded in 2012, known as the "Tea of Inspiration," famous for its cheese foam and fresh fruit teas, distinguished by innovative flavors and high-value packaging.',
    locations: ['Newbury', 'Allston'],
    details: {
      businessHours: [
        "Allston Store: 11:30 AM - 10:00 PM",
        "Newbury Store: 12:00 PM - 8:00 PM"
      ],
      addresses: [
        {
          address: "162 Harvard Ave, Allston, MA 02134",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94347.70393904754!2d-71.19457567984213!3d42.35604402777056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379005e88bbd7%3A0xcc69fd521910e8b2!2sHEYTEA%20(Allston)!5e0!3m2!1sen!2sus!4v1765208626867!5m2!1sen!2sus&hl=en"
        },
        {
          address: "223 Newbury St, Boston, MA 02116",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94347.70393904754!2d-71.19457567984213!3d42.35604402777056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b6b8db19e39%3A0xfcea098958f05e96!2sHEYTEA%20(Newbury)!5e0!3m2!1sen!2sus!4v1765208764351!5m2!1sen!2sus&hl=en"
        }
      ],
      recommendations: [
      "Mochi Longjing Latte: Golden Longjing Tea + Milk + Cheese Mochi + Light Cheese Cloud.",
      "Coconut Mango Blue: Mango + Coconut Milk & Jelly + Sago + Spirulina + Jasmine Tea.",
      "Crisp Grape Boom: Selected Grapes + Jasmine Green Tea.",
      "Supreme Brown Sugar Bobo Milk Tea: Slow cooked brown sugar bobo + real dairy milk tea. This product contains coconut and dairy products.",
      "Matcha Cloud Coconut Blue: Matcha cloud+Coconut + Blue spirulina, no artificial colors. This product contains dairy products."
      ]
    }
  },
    /*`<h4>Business Hours:</h4>
      <ul>
          <li></li>
      </ul>
    <h4>Boston Locations:</h4>
    <p></p>
    <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    <p></p>
    <iframe src= width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    <h4>Signature Recommendations:</h4>
    <ol class="number">
          
    `*/
  
  {
    id: 'tsaocaa',
    name: 'TSAOCAA',
    website: 'https://www.tsaocaatea.com/',
    intro: 'Follows a "Natural, Pure Tea" route, emphasizing the origin of tea leaves and traditional tea craft, offering different combinations.',
    locations: ['Chinatown'],
    details: {
      businessHours: [
        "Chinatown Store: 11:00 AM - 10:00 PM"
      ],
      addresses: [
        {
          address: "10A Tyler St, Boston, MA 02111",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47149.22548873661!2d-71.10485827797143!3d42.38884041912454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b3c5d2f2c83%3A0x1ac3b3f3cfd6b99b!2sTsaocaa%20Boston!5e0!3m2!1sen!2sus!4v1765208966266!5m2!1sen!2sus&hl=en"
        }
      ],
      recommendations: [
      "Ruby Black Milk Tea",
      "King of Tea (Cheese Cream Foam or Matcha)",
      "Pineapple Green Tea W. Nata lelly",
      "Colorful Fruits Black Tea",
      "Brown Sugar Milk Black Tea W. Boba",

      ]
    }
  }, 
    /*`
    <h4>Business Hours:</h4>
      <ul>
          <li>Chinatown Store: 11:00 AM - 10:00 PM</li>
      </ul>
    <h4>Boston Location:</h4>
    <p>10A Tyler St, Boston, MA 02111</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47149.22548873661!2d-71.10485827797143!3d42.38884041912454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b3c5d2f2c83%3A0x1ac3b3f3cfd6b99b!2sTsaocaa%20Boston!5e0!3m2!1sen!2sus!4v1765208966266!5m2!1sen!2sus&hl=en" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    <h4>Signature Recommendations:</h4>
    <ol class="number">
      <li>Ruby Black Milk Tea</li>
      <li>King of Tea (Cheese Cream Foam or Matcha)</li>
      <li>Pineapple Green Tea W. Nata lelly</li>
      <li>Colorful Fruits Black Tea</li>
      <li>Brown Sugar Milk Black Tea W. Boba(L)</li>
    </ol>
    <h4>Desserts:</h4>
    <ol class="number">
      <li>Hong Kong style Eggette</li>
      <li>French Macaron</li>
      <li>Cheese Cake</li>
    </ol>
    `
  },*/
  {
    id: 'chicha',
    name: 'CHICHA San Chen',
    website: 'https://www.chichateashop.com/',
    intro: 'A high-end Taiwanese tea brand with 20+ years of tea-making experience. Developed the exclusive LION tea machine to perfectly present the best flavor of six tea types using high-temperature pressing.',
    locations: ['Newbury'],      
    details: {
      businessHours: [
        "Newbury Store: 11:00 AM - 9:00 PM"
      ],
      addresses: [
        {
          address: "400 Newbury St#300, Boston, MA 02215",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11795.066058143197!2d-71.09839543567634!3d42.34750109796676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b002ae0b2a7%3A0xc5bf1652858dfd79!2zQ0hJQ0hBIFNhbiBDaGVuIOWQg-iMtuS4ieWNgw!5e0!3m2!1sen!2sus!4v1765218160897!5m2!1sen!2sus&hl=en"
        }
      ],
      recommendations: [
      "Bubble Milk Tea: Black Tea + Cream + Bubble.",
      "Bubble Volcano: (Non-Caffeinated) Fresh Milk With Brown Sugar Bubble (Boba). Fixed Perfect sweetness.",
      "Classic Fruit Tea: Black Tea Pineapple-Passion Fruit Lemon-Seasonal Fruit.",
      "Honey Osmanthus Oolong Tea: Osmanthus Oolong Tea + Honey.",
      "Dong Ding Oolong Tea Latte: Dong Ding Oolong Tea Fresh Milk.",
      
      ]
    }
  },
    /*details: `
    <h4>Business Hours:</h4>
    <ul>
      <li>Newbury Store: 11:00 AM - 9:00 PM</li>
    </ul>
    <h4>Boston Location:</h4>
    <p>400 Newbury St#300, Boston, MA 02215</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11795.066058143197!2d-71.09839543567634!3d42.34750109796676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b002ae0b2a7%3A0xc5bf1652858dfd79!2zQ0hJQ0hBIFNhbiBDaGVuIOWQg-iMtuS4ieWNgw!5e0!3m2!1sen!2sus!4v1765218160897!5m2!1sen!2sus&hl=en" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        <h4>Signature Recommendations:</h4>
        <ol class="number">
          <li>Bubble Milk Tea: Black Tea + Cream + Bubble.</li>
          <li>Bubble Volcano: (Non-Caffeinated) Fresh Milk With Brown Sugar Bubble (Boba). Fixed Perfect sweetness.</li>
          <li>Classic Fruit Tea: Black Tea Pineapple-Passion Fruit Lemon-Seasonal Fruit.</li>
          <li>Honey Osmanthus Oolong Tea: Osmanthus Oolong Tea + Honey</li>
          <li>Dong Ding Oolong Tea Latte: Dong Ding Oolong Tea Fresh Milk</li>
        </ol>
    `
  },*/
  {
    id: 'gongcha',
    name: 'GONG CHA',
    website: 'https://gongchausa.com/',
    intro: 'A Taiwanese global brand with 2000+ stores worldwide, known as one of the classic pearl milk tea chains. Suitable for customization (sweetness, ice level).',
    locations: ['Allston', 'Chinatown', 'Cambridge', 'Newbury'],
    details: {
      businessHours: [
        "All Stores: 11:00 AM - 10:00 PM"
      ],
      addresses: [
        {
          address: "154 Harvard Ave, Allston, MA 02134",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47177.11067069328!2d-71.16655192089846!3d42.35170270000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3798f4c45d5a5%3A0xfc4e4711151a21d9!2sGong%20Cha!5e0!3m2!1sen!2sus!4v1765218817554!5m2!1sen!2sus&hl=en"
        },
        {
          address: "270 Newbury St, Boston, MA 02116",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47180.21059975583!2d-71.12929528074001!3d42.34757255769141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b36b6161075%3A0xcd63afb22df53468!2sGong%20Cha%20Newbury!5e0!3m2!1sen!2sus!4v1765218942737!5m2!1sen!2sus&hl=en"
        },
        {
          address: "40-44 Harrison Ave, Chinatown, Boston, MA 02111",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47180.21059975583!2d-71.12929528074001!3d42.34757255769141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a781876d9b7%3A0xfed65fd39a98cd6a!2sGong%20Cha!5e0!3m2!1sen!2sus!4v1765218982033!5m2!1sen!2sus&hl=en"
        },
        {
          address: "50 Church St, Cambridge, MA 02138",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47180.21059975583!2d-71.12929528074001!3d42.34757255769141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377c0fe57e6a1%3A0x6dd6d621b345e229!2sGong%20Cha!5e0!3m2!1sen!2sus!4v1765218967850!5m2!1sen!2sus&hl=en"
        }
      ],
      recommendations: [
      "XL Pearl Milk Tea: Commonly known as Bubble Milk Tea. Black Milk Tea with our pearl topping included.",
      "XL Brown Sugar Milk: Black milk tea with brown sugar.",
      "Creme Brulee Brown Sugar Milk Tea: Black milk tea and brown sugar topped with our crème brulee milk foam topping.",
      "Matcha Tea Latte: Japanese-style green tea powder with milk.",
      "Earl Grey Milk Tea 3Js: Earl grey milk tea with 3 toppings included- pearls, pudding jelly & herbal jelly.",
      
      ]
    }
  },

    /*details: `
      <h4>Business Hours:</h4>
          <ul>
              <li>All Stores: 11:00 AM - 10:00 PM</li>
          </ul>
        <h4>Boston Locations:</h4>
        <p>154 Harvard Ave, Allston, MA 02134</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47177.11067069328!2d-71.16655192089846!3d42.35170270000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3798f4c45d5a5%3A0xfc4e4711151a21d9!2sGong%20Cha!5e0!3m2!1sen!2sus!4v1765218817554!5m2!1sen!2sus&hl=en" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>270 Newbury St, Boston, MA 02116</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47180.21059975583!2d-71.12929528074001!3d42.34757255769141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b36b6161075%3A0xcd63afb22df53468!2sGong%20Cha%20Newbury!5e0!3m2!1sen!2sus!4v1765218942737!5m2!1sen!2sus&hl=en" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>40-44 Harrison Ave, Chinatown, Boston, MA 02111</p>
        <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>50 Church St, Cambridge, MA 02138</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47180.21059975583!2d-71.12929528074001!3d42.34757255769141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377c0fe57e6a1%3A0x6dd6d621b345e229!2sGong%20Cha!5e0!3m2!1sen!2sus!4v1765218967850!5m2!1sen!2sus&hl=en" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <h4>Signature Recommendations:</h4>
        <ol class="number">
          <li>XL Pearl Milk Tea: Commonly known as Bubble Milk Tea. Black Milk Tea with our pearl topping included.</li>
          <li>XL Brown Sugar Milk: Black milk tea with brown sugar.</li>
          <li>Creme Brulee Brown Sugar Milk Tea: Black milk tea and brown sugar topped with our crème brulee milk foam topping.</li>
          <li>Matcha Tea Latte: Japanese-style green tea powder with milk.</li>
          <li>Earl Grey Milk Tea 3Js: Earl grey milk tea with 3 toppings included- pearls, pudding jelly & herbal jelly.</li>
        </ol>
        `
  },*/
  {
    id: 'machi',
    name: 'Machi Machi',
    website: 'https://www.machiboston.com/',
    intro: 'An internet-famous brand popularized by its bottled milk tea, known for its thick, creamy flavor and "Cheese Foam + Handmade Boba" series.',
    locations: ['Allston'],
    details: {
      businessHours: [
        "12:00 PM - 10:00PM"
      ],
      addresses: [
        {
          address: "176 Harvard Ave, Allston, MA 02134",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7253.361478033512!2d-71.13801661586598!3d42.35188314351566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37963cb47fe7d%3A0xaf6e893ecdcc964a!2zbWFjaGkgbWFjaGkgQm9zdG9uIOm6peWQiQ!5e0!3m2!1sen!2sus!4v1765282677717!5m2!1sen!2sus"
        }
      ],
      recommendations: [
      "Creme Brulee Milk Tea: Strong mellow flavour of milk tea blends together with creamy creme brulee.",
      "Strawberry Milk W. Panna Cotta: Bottled / Iced & Sugar Fixed Fixed ice and Sweetness level Caffeine Free Sweet and Juicy Strawberry is well balanced with milk, creating the silky taste.",
      "Taro Creme Brulee Milk: Real taro pieces.",
      "Mango Cream Smoothie With Fruit Jelly: Bottled/ Ice Fixed.",
      "Black Milk Tea With Panna Cotta: The sediment underneath is vanilla seed, it's edible. Bottled/ Ice Fixed.",
      
      ]
    }
  },
    /*details: `
      <h4>Business Hours:</h4>
      <ul>
        <li>12:00 PM - 10:00PM</li>
      </ul>
          <h4>Boston Location:</h4>
          <p>176 Harvard Ave, Allston, MA 02134</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7253.361478033512!2d-71.13801661586598!3d42.35188314351566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37963cb47fe7d%3A0xaf6e893ecdcc964a!2zbWFjaGkgbWFjaGkgQm9zdG9uIOm6peWQiQ!5e0!3m2!1sen!2sus!4v1765282677717!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>          <h4>Signature Recommendations:</h4>
          <ol class="number">
            <li>Creme Brulee Milk Tea: Strong mellow flavour of milk tea blends together with creamy creme brulee.</li>
            <li>Strawberry Milk W. Panna Cotta: Bottled / Iced & Sugar Fixed Fixed ice and Sweetness level Caffeine Free Sweet and Juicy Strawberry is well balanced with milk, creating the silky taste.</li>
            <li>Taro Creme Brulee Milk: Real taro pieces.</li>
            <li>Mango Cream Smoothie With Fruit Jelly: Bottled/ Ice Fixed.</li>
            <li>Black Milk Tea With Panna Cotta: The sediment underneath is vanilla seed, it's edible. Bottled/ Ice Fixed.</li>
          </ol>
        `
  },*/

  {
    id: 'teazzi',
    name: 'Teazzi Tea Shop',
    website: 'https://teazzi.com/',
    intro: 'A new Taiwanese tea brand emphasizing freshly brewed tea and high tea fragrance, while also offering rich fruit teas and cheese foam teas.',
    locations: ['Newbury', 'Chinatown'],
    details: {
      businessHours: [
        "All Stores: 11:00 AM - 9:00 PM"
      ],
      addresses: [
        {
          address: "232 Newbury St Ground level, Boston, MA 02116",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53101.59841037386!2d-71.11909588050753!3d42.356241085442505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b9ccd988d6f%3A0xb6b55800633993c3!2sTeazzi%20Tea%20Shop-Newbury!5e0!3m2!1sen!2sus!4v1765219631356!5m2!1sen!2sus&hl=en"
        },
        {
          address: "31 Harrison Ave, Boston, MA 02111",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23588.934146950534!2d-71.09202147738301!3d42.350693322651324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37bf1ac003957%3A0xcbd90f7a2bdfee08!2sTeazzi%20Tea%20Shop-Chinatown!5e0!3m2!1sen!2sus!4v1765219652657!5m2!1sen!2sus&hl=en"
        }
      ],
      recommendations: [
      "Velvet Sesame Mochi Milk Tea: Flavored milk tea with mochi.",
      "Tofu Pudding Deep Roast Oat Milk Tea: deep roast oolong tea with oat milk and tofu pudding.",
      "House Special Milk Tea: Four season milk tea + oats + bubble.",
      "Honey Amber Oolong Milk Tea: Oolong tea + honey.",
      "Peach Oolong Tj: peach flavor four seasons tea / tea jelly & crystal boba.",
      
      ]
    }
  },
    /*details: `
      <h4>Business Hours:</h4>
      <ul>
        <li>All Stores: 11:00 AM - 9:00 PM</li>
      </ul>
      <h4>Boston Locations:</h4>
      <p>232 Newbury St Ground level, Boston, MA 02116</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53101.59841037386!2d-71.11909588050753!3d42.356241085442505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b9ccd988d6f%3A0xb6b55800633993c3!2sTeazzi%20Tea%20Shop-Newbury!5e0!3m2!1sen!2sus!4v1765219631356!5m2!1sen!2sus&hl=en" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <p>31 Harrison Ave, Boston, MA 02111</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23588.934146950534!2d-71.09202147738301!3d42.350693322651324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37bf1ac003957%3A0xcbd90f7a2bdfee08!2sTeazzi%20Tea%20Shop-Chinatown!5e0!3m2!1sen!2sus!4v1765219652657!5m2!1sen!2sus&hl=en" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <h4>Signature Recommendations:</h4>
          <ol class="number">
            <li>Velvet Sesame Mochi Milk Tea: Flavored milk tea with mochi.</li>
            <li>Tofu Pudding Deep Roast Oat Milk Tea: deep roast oolong tea with oat milk and tofu pudding.</li>
            <li>House Special Milk Tea: Four season milk tea + oats + bubble.</li>
            <li>Honey Amber Oolong Milk Tea: Oolong tea + honey.</li>
            <li>Peach Oolong Tj: peach flavor four seasons tea / tea jelly & crystal boba.</li>
          </ol>
        `
  },*/

  {
    id: 'yifang',
    name: 'Yi Fang (Bloome Fruit Tea)',
    website: 'https://www.yifangteaboston.com/',
    intro: 'A popular Taiwanese fruit tea brand, known for simmering fruit jams using traditional methods, resulting in naturally sweet and highly popular fruit teas.',
    locations: ['Newbury', 'Allston'],
    details: {
      businessHours: [
        "All Stores: 11:00 AM - 9:00 PM"
      ],
      addresses: [
        {
          address: "215 Newbury St 1st floor, Boston, MA 02116",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94356.37316204674!2d-71.1636494501026!3d42.35026926460096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b55e938e03f%3A0x3ece8052e188b07a!2sBloome%20Fruit%20Tea!5e0!3m2!1sen!2sus!4v1765219971112!5m2!1sen!2sus&hl=en"
        },
        {
          address: "14 Brighton Ave, Boston, MA 02134",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94356.37316204674!2d-71.1636494501026!3d42.35026926460096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f3f4fc3d81%3A0x548e2ec7655a498b!2sBloome%20Fruit%20Tea!5e0!3m2!1sen!2sus!4v1765220005043!5m2!1sen!2sus&hl=en"
        }
      ],
      recommendations: [
      "Signature Fruit Tea: The base is simmered with pure fruits, offering rich layers.",
      "Mango Pomelo W. Topping: Mango and grapefruit fruits combined with rice pudding.",
      "Brown Sugar Boba W. Milk: Brown sugar + boba.",
      "Brown Sugar Boba Matcha: Selected matcha combined with boba.",
      "Matcha Latte (Strawberry, Mango, Peach): Multiple flavors are available.",
      
      ]
    }
  },
    /*details: `
          <h4>Business Hours:</h4>
            <ul>
                <li>All Stores: 11:00 AM - 9:00 PM</li>
            </ul>
          <h4>Boston Locations:</h4>
          <P>215 Newbury St 1st floor, Boston, MA 02116</P>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94356.37316204674!2d-71.1636494501026!3d42.35026926460096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b55e938e03f%3A0x3ece8052e188b07a!2sBloome%20Fruit%20Tea!5e0!3m2!1sen!2sus!4v1765219971112!5m2!1sen!2sus&hl=en" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <P>14 Brighton Ave, Boston, MA 02134</P>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94356.37316204674!2d-71.1636494501026!3d42.35026926460096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f3f4fc3d81%3A0x548e2ec7655a498b!2sBloome%20Fruit%20Tea!5e0!3m2!1sen!2sus!4v1765220005043!5m2!1sen!2sus&hl=en" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <h4>Signature Recommendations:</h4>
          <ol class="number">
            <li>Signature Fruit Tea: The base is simmered with pure fruits, offering rich layers.</li>
            <li>Mango Pomelo W. Topping: Mango and grapefruit fruits combined with rice pudding.</li>
            <li>Brown Sugar Boba W. Milk: Brown sugar + boba.</li>
            <li>Brown Sugar Boba Matcha: Selected matcha combined with boba.</li>
            <li>Matcha Latte (Strawberry, Mango, Peach): Multiple flavors are available.</li>
          </ol>
        `
  },*/
  
  {
    id: 'zeroand',
    name: 'ZEROand',
    website: 'https://www.zeroand.com/',
    intro: 'A famous American fruit tea brand, known for "Natural Real Fruit Drinks + Tea Innovation." Features visual fruit beverages using Fresh Fruit + Coconut Milk/Milk/Tea.',
    locations: ['Newbury'],
    details: {
      businessHours: [
        "10:00 AM - 11:00 PM"
      ],
      addresses: [
        {
          address: "222a Newbury St, Boston, MA 02116",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11794.641811089796!2d-71.09137773567456!3d42.349762097392976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37bbce8d45fcb%3A0x3dc9b9964e07bab0!2sZERO%26%20Newbury%20Street!5e0!3m2!1sen!2sus!4v1765220182502!5m2!1sen!2sus&hl=en"
        }
      ],
      recommendations: [
      "Strawberry Marble: (Slushie) Fresh Strawberry.",
      "Thai Me Up: Thai tea, Creme Brulee, Oreo Cruches.",
      "Ube Taro: Ube Purple Yam, Fresh Taro, Fresh Grade A Milk, 0 Caffeine..",
      "Teapuccino: Premium Oolong Tea, Fresh Grade A Milk.",
      "Creme Brulee Milk: Creme Brulee Torch with Black Sugar,Fresh Grade A Milk.",
      
      ]
    }
  }
    /*details: `
        <h4>Business Hours:</h4>
            <ul>
                <li>10:00 AM - 11:00 PM</li>
            </ul>
          <h4>Boston Location:</h4>
          <p>222a Newbury St, Boston, MA 02116</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11794.641811089796!2d-71.09137773567456!3d42.349762097392976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37bbce8d45fcb%3A0x3dc9b9964e07bab0!2sZERO%26%20Newbury%20Street!5e0!3m2!1sen!2sus!4v1765220182502!5m2!1sen!2sus&hl=en" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <h4>Signature Recommendations:</h4>
          <ol class="number">
            <li>Strawberry Marble: (Slushie) Fresh Strawberry.</li>
            <li>Thai Me Up: Thai tea, Creme Brulee, Oreo Cruches.</li>
            <li>Ube Taro: Ube Purple Yam, Fresh Taro, Fresh Grade A Milk, 0 Caffeine.</li>
            <li>Teapuccino: Premium Oolong Tea, Fresh Grade A Milk.</li>
            <li>Creme Brulee Milk: Creme Brulee Torch with Black Sugar,Fresh Grade A Milk.</li>
          </ol>
        `
  }*/
];
document.addEventListener('DOMContentLoaded', () => {
  const allBrandCards = document.querySelectorAll('.brandCard'); 
  const brandFilterButton = document.getElementById('brandFilterButton'); 
  const brandFilterOptions = document.getElementById('brandFilterOptions');
  const flavorFilterButton = document.getElementById('flavorFilterButton'); 
  const flavorFilterOptions = document.getElementById('flavorFilterOptions');
  const locationFilterButton = document.getElementById('locationFilterButton'); 
  const locationFilterOptions = document.getElementById('locationFilterOptions');
  const filterOptionButtons = document.querySelectorAll('.filterOptionButton');
  const detailButtons = document.querySelectorAll('.ctaButton');
  const modalContainer = document.getElementById('modalContainer');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalContent = document.getElementById('modalContent');
  const websiteBtn = document.getElementById("brandWebBtn");
  


  let currentFilterBrand = 'All';
  let currentFilterFlavor = 'All';
  let currentFilterLocation = 'All';

  const checkIfBrandShouldBeVisible = (brandData) => {
    let brandMatch = false;
    if (currentFilterBrand === 'All') {
        brandMatch = true;
    } else if (brandData.name.includes(currentFilterBrand)) {
        brandMatch = true;
    }
    let locationMatch = false;
    if (currentFilterLocation === 'All') {
        locationMatch = true;
    } else if (brandData.locations.includes(currentFilterLocation)) {
        locationMatch = true;
    }
    let flavorMatch = false;
    if (currentFilterFlavor === 'All') {
      flavorMatch = true;
    } else {
        const details = brandData.details.toLowerCase();
        const intro = brandData.intro.toLowerCase();
        const flavorLower = currentFilterFlavor.toLowerCase();
        if (flavorLower === 'fruit tea') {
          flavorMatch = intro.includes('fruit tea') || intro.includes('fruit') || details.includes('fruit') || details.includes('mango') || details.includes('grape') || details.includes('pineapple') || details.includes('strawberry') || details.includes('peach');
        } else if (flavorLower === 'boba tea') {
          flavorMatch = intro.includes('boba') || intro.includes('bubble') || details.includes('boba') || details.includes('bubble') || details.includes('pearl');
        } else if (flavorLower === 'milk tea') {
          flavorMatch = (intro.includes('milk tea') || intro.includes('latte') || details.includes('smoothie'));
        }
      }
      return brandMatch && locationMatch && flavorMatch;
  };
    const updateCardDisplay = () => {
      allBrandCards.forEach(card => {
        const brandId = card.getAttribute('data-id');
        const brandData = BRAND_DATA.find(brand => brand.id === brandId);
        if (brandData && checkIfBrandShouldBeVisible(brandData)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
    });
};
const closeAllDropdowns = () => {
  brandFilterOptions.classList.remove('show');
  flavorFilterOptions.classList.remove('show');
  locationFilterOptions.classList.remove('show');
  };
document.addEventListener('click', (event) => {
  const clickInsideDropdown =
    brandFilterButton.contains(event.target) ||
    brandFilterOptions.contains(event.target) ||
    flavorFilterButton.contains(event.target) ||
    flavorFilterOptions.contains(event.target) ||
    locationFilterButton.contains(event.target) ||
    locationFilterOptions.contains(event.target);
    if (!clickInsideDropdown) {
      closeAllDropdowns();
    }
  });
brandFilterButton.addEventListener('click', () => {
  closeAllDropdowns();
  brandFilterOptions.classList.toggle('show');
});
flavorFilterButton.addEventListener('click', () => {
  closeAllDropdowns();
  flavorFilterOptions.classList.toggle('show');
});
locationFilterButton.addEventListener('click', () => {
  closeAllDropdowns();
  locationFilterOptions.classList.toggle('show');
});
filterOptionButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    closeAllDropdowns();
    const newBrand = event.target.getAttribute('data-brand');
    const newFlavor = event.target.getAttribute('data-flavor');
    const newLocation = event.target.getAttribute('data-location');
    if (newBrand !== null) {
      currentFilterBrand = newBrand;
      brandFilterButton.textContent = `Brand: ${newBrand}`;
    }
    if (newFlavor !== null) {
      currentFilterFlavor = newFlavor;
      flavorFilterButton.textContent = `Flavor: ${newFlavor}`;
    }
    if (newLocation !== null) {
      currentFilterLocation = newLocation;
      locationFilterButton.textContent = `Location: ${newLocation}`;
    }
    updateCardDisplay();
  });
});


detailButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const brandId = event.target.getAttribute('data-brand-id');
    const brandData = BRAND_DATA.find(brand => brand.id === brandId);
    if (brandData) {
      modalBrandName.textContent = brandData.name;
      websiteBtn.href = brandData.website;
      websiteBtn.textContent = `Visit ${brandData.name} Website`;
      modalContent.innerHTML = "";
      modalContent.appendChild(renderDetailsPure(brandData.details));
      modalContainer.classList.remove('hidden');
    }
  });
});
closeModalBtn.addEventListener('click', () => {
  modalContainer.classList.add('hidden');
});
modalContainer.addEventListener('click', (event) => {
  if (event.target === modalContainer) {
    modalContainer.classList.add('hidden');
  }
});
  updateCardDisplay();
});
function renderDetailsPure(d) {
  const container = document.createElement("div");

  const hHours = document.createElement("h4");
  hHours.textContent = "Business Hours:";
  container.appendChild(hHours);
  const ulHours = document.createElement("ul");
  d.businessHours.forEach(h => {
    const li = document.createElement("li");
    li.textContent = h;
    ulHours.appendChild(li);
  });
  container.appendChild(ulHours);

  const hLocations = document.createElement("h4");
  hLocations.textContent = "Boston Locations:";
  container.appendChild(hLocations);
  d.addresses.forEach(a => {
    const p = document.createElement("p");
    p.textContent = a.address;
    container.appendChild(p);

    const iframe = document.createElement("iframe");
    iframe.src = a.map;
    iframe.width = "600";
    iframe.height = "450";
    iframe.style.border = "0";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    container.appendChild(iframe);
  });
  const hRec = document.createElement("h4");
  hRec.textContent = "Signature Recommendations:";
  container.appendChild(hRec);

  const ol = document.createElement("ol");
  ol.classList.add("number");
  d.recommendations.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    ol.appendChild(li);
  });
  container.appendChild(ol);
  return container;
}
