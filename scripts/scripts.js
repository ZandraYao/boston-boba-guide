const BRAND_DATA = [
  {
    id: 'heytea',
    name: 'HEYTEA',
    intro: 'Founded in 2012, known as the "Tea of Inspiration," famous for its cheese foam and fresh fruit teas, distinguished by innovative flavors and high-value packaging.',
    locations: ['Newbury', 'Allston'],
    details: `<h4>Business Hours:</h4>
      <ul>
          <li>Allston Store: 11:30 AM - 10:00 PM</li>
          <li>Newbury Store: 12:00 PM - 8:00 PM</li>
      </ul>
    <h4>Boston Locations:</h4>
    <p>162 Harvard Ave, Allston, MA 02134</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94347.70393904754!2d-71.19457567984213!3d42.35604402777056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379005e88bbd7%3A0xcc69fd521910e8b2!2sHEYTEA%20(Allston)!5e0!3m2!1szh-CN!2sus!4v1765208626867!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    <p>223 Newbury St, Boston, MA 02116</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94347.70393904754!2d-71.19457567984213!3d42.35604402777056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b6b8db19e39%3A0xfcea098958f05e96!2sHEYTEA%20(Newbury)!5e0!3m2!1szh-CN!2sus!4v1765208764351!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    <h4>Signature Recommendations:</h4>
    <ul>
      <li>Mochi Longjing Latte: Golden Longjing Tea + Milk + Cheese Mochi + Light Cheese Cloud.</li>
      <li>Coconut Mango Blue: Mango + Coconut Milk & Jelly + Sago + Spirulina + Jasmine Tea.</li>
      <li>Crisp Grape Boom: Selected Grapes + Jasmine Green Tea.</li>
      <li>Supreme Brown Sugar Bobo Milk Tea: Slow cooked brown sugar bobo + real dairy milk tea. This product contains coconut and dairy products.</li>
      <li>Matcha Cloud Coconut Blue: Matcha cloud+Coconut + Blue spirulina, no artificial colors. This product contains dairy products.</li>
    </ul>

    
    `
    },
  {
    id: 'tsaocaa',
    name: 'TSAOCAA',
    intro: 'Follows a "Natural, Pure Tea" route, emphasizing the origin of tea leaves and traditional tea craft, offering handmade boba, fruit teas, and milk tea combinations.',
    locations: ['Chinatown'],
    details: `
    <h4>Business Hours:</h4>
      <ul>
          <li>Chinatown Store: 11:00 AM - 10:00 PM</li>
      </ul>
    <h4>Boston Location:</h4>
    <p>10A Tyler St, Boston, MA 02111</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47149.22548873661!2d-71.10485827797143!3d42.38884041912454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b3c5d2f2c83%3A0x1ac3b3f3cfd6b99b!2sTsaocaa%20Boston!5e0!3m2!1szh-CN!2sus!4v1765208966266!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    <h4>Signature Recommendations:</h4>
    <ul>
      <li>Ruby Black Milk Tea</li>
      <li>King of Tea (Cheese Cream Foam or Matcha )</li>
      <li>Pineapple Green Tea W. Nata lelly</li>
      <li>Colorful Fruits Black Tea</li>
      <li>Brown Sugar Milk Black Tea W. Boba(L)</li>
    </ul>
    <h4>Desserts:</h4>
    <ul>
      <li>Hong Kong style Eggette</li>
      <li>French Macaron</li>
      <li>Cheese Cake</li>
    </ul>
    
    `},
    {
      id: 'chicha',
        name: 'CHICHA San Chen',
        intro: 'A high-end Taiwanese tea brand with 20+ years of tea-making experience. Developed the exclusive LION tea machine to perfectly present the best flavor of six tea types using high-temperature pressing.',
        locations: ['Newbury'],
        details: `
        <h4>Business Hours:</h4>
          <ul>
              <li>Newbury Store: 11:00 AM - 9:00 PM</li>
          </ul>
        <h4>Boston Location:</h4>
        <p>400 Newbury St#300, Boston, MA 02215</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11795.066058143197!2d-71.09839543567634!3d42.34750109796676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b002ae0b2a7%3A0xc5bf1652858dfd79!2zQ0hJQ0hBIFNhbiBDaGVuIOWQg-iMtuS4ieWNgw!5e0!3m2!1szh-CN!2sus!4v1765218160897!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        <h4>Signature Recommendations:</h4>
        <ul>
          <li>Bubble Milk Tea: Black Tea + Cream + Bubble.</li>
          <li>Bubble Volcano: (Non-Caffeinated) Fresh Milk With Brown Sugar Bubble (Boba). Fixed Perfect sweetness.</li>
          <li>Classic Fruit Tea: Black Tea Pineapple-Passion Fruit Lemon-Seasonal Fruit.</li>
          <li>Honey Osmanthus Oolong Tea: Osmanthus Oolong Tea + Honey</li>
          <li>Dong Ding Oolong Tea Latte: Dong Ding Oolong Tea Fresh Milk</li>
        </ul>
    `},
    {
      id: 'gongcha',
        name: 'GONG CHA',
        intro: 'A Taiwanese global brand with 2000+ stores worldwide, known as one of the classic pearl milk tea chains. Suitable for customization (sweetness, ice level).',
        locations: ['Allston', 'Chinatown', 'Cambridge', 'Newbury'],
        details: `
        <h4>Business Hours:</h4>
          <ul>
              <li>All Stores: 11:00 AM - 10:00 PM</li>
          </ul>
        <h4>Boston Locations:</h4>
        <p>154 Harvard Ave, Allston, MA 02134</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47177.11067069328!2d-71.16655192089846!3d42.35170270000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3798f4c45d5a5%3A0xfc4e4711151a21d9!2sGong%20Cha!5e0!3m2!1szh-CN!2sus!4v1765218817554!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>270 Newbury St, Boston, MA 02116</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47180.21059975583!2d-71.12929528074001!3d42.34757255769141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b36b6161075%3A0xcd63afb22df53468!2sGong%20Cha%20Newbury!5e0!3m2!1szh-CN!2sus!4v1765218942737!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>40-44 Harrison Ave, Chinatown, Boston, MA 02111</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47180.21059975583!2d-71.12929528074001!3d42.34757255769141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a781876d9b7%3A0xfed65fd39a98cd6a!2sGong%20Cha!5e0!3m2!1szh-CN!2sus!4v1765218982033!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>50 Church St, Cambridge, MA 02138</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47180.21059975583!2d-71.12929528074001!3d42.34757255769141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377c0fe57e6a1%3A0x6dd6d621b345e229!2sGong%20Cha!5e0!3m2!1szh-CN!2sus!4v1765218967850!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <h4>Signature Recommendations:</h4>
        <ul>
          <li>XL Pearl Milk Tea: Commonly known as Bubble Milk Tea. Black Milk Tea with our pearl topping included.</li>
          <li>XL Brown Sugar Milk: Black milk tea with brown sugar.</li>
          <li>Creme Brulee Brown Sugar Milk Tea: Black milk tea and brown sugar topped with our crème brulee milk foam topping.</li>
          <li>Matcha Tea Latte: Japanese-style green tea powder with milk.</li>
          <li>Earl Grey Milk Tea 3Js: Earl grey milk tea with 3 toppings included- pearls, pudding jelly & herbal jelly.</li>
        </ul>
        `},
        {
          id: 'machi',
          name: 'Machi Machi',
          intro: 'An internet-famous brand popularized by its bottled milk tea, known for its thick, creamy flavor and "Cheese Foam + Handmade Boba" series.',
          locations: ['Allston'],
          details: `
          <h4>Business Hours:</h4>
            <ul>
              <li>12:00 PM – 10:00PM</li>
            </ul>
          <h4>Boston Location:</h4>
          <p>176 Harvard Ave, Allston, MA 02134</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058800.521801706!2d-75.19915918972339!3d41.52356036026957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37963cb47fe7d%3A0xaf6e893ecdcc964a!2zbWFjaGkgbWFjaGkgQm9zdG9uIOm6peWQiQ!5e0!3m2!1szh-CN!2sus!4v1765219294728!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <h4>Signature Recommendations:</h4>
          <ul>
            <li>Creme Brulee Milk Tea: Strong mellow flavour of milk tea blends together with creamy creme brulee.</li>
            <li>Strawberry Milk W. Panna Cotta: Bottled / Iced & Sugar Fixed Fixed ice and Sweetness level Caffeine Free Sweet and Juicy Strawberry is well balanced with milk, creating the silky taste.</li>
            <li>Taro Creme Brulee Milk: Real taro pieces.</li>
            <li>Mango Cream Smoothie With Fruit Jelly: Bottled/ Ice Fixed.</li>
            <li>Black Milk Tea With Panna Cotta: The sediment underneath is vanilla seed, it's edible. Bottled/ Ice Fixed.</li>
          </ul>
        `},
        {
          id: 'teazzi',
          name: 'Teazzi Tea Shop',
          intro: 'A new Taiwanese tea brand emphasizing freshly brewed tea and high tea fragrance, while also offering rich fruit teas and cheese foam teas.',
          locations: ['Newbury', 'Chinatown'],
          details: `
          <h4>Business Hours:</h4>
            <ul>
                <li>All Stores: 11:00 AM - 9:00 PM</li>
            </ul>
          <h4>Boston Locations:</h4>
          <p>232 Newbury St Ground level, Boston, MA 02116</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53101.59841037386!2d-71.11909588050753!3d42.356241085442505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b9ccd988d6f%3A0xb6b55800633993c3!2sTeazzi%20Tea%20Shop-Newbury!5e0!3m2!1szh-CN!2sus!4v1765219631356!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <p>31 Harrison Ave, Boston, MA 02111</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23588.934146950534!2d-71.09202147738301!3d42.350693322651324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37bf1ac003957%3A0xcbd90f7a2bdfee08!2sTeazzi%20Tea%20Shop-Chinatown!5e0!3m2!1szh-CN!2sus!4v1765219652657!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <h4>Signature Recommendations:</h4>
          <ul>
            <li>Velvet Sesame Mochi Milk Tea: Flavored milk tea with mochi.</li>
            <li>Tofu Pudding Deep Roast Oat Milk Tea: deep roast oolong tea with oat milk and tofu pudding.</li>
            <li>House Special Milk Tea: Four season milk tea + oats + bubble.</li>
            <li>Honey Amber Oolong Milk Tea: Oolong tea + honey.</li>
            <li>Peach Oolong Tj: peach flavor four seasons tea / tea jelly & crystal boba.</li>
          </ul>
        `},
        {
          id: 'yifang',
          name: 'Yi Fang Taiwan Fruit Tea (Bloome Fruit Tea)',
          intro: 'A popular Taiwanese fruit tea brand, known for simmering fruit jams using traditional methods, resulting in naturally sweet and highly popular fruit teas.',
          locations: ['Newbury', 'Allston'],
          details: `
          <h4>Business Hours:</h4>
            <ul>
                <li>All Stores: 11:00 AM - 9:00 PM</li>
            </ul>
          <h4>Boston Locations:</h4>
          <P>215 Newbury St 1st floor, Boston, MA 02116</P>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94356.37316204674!2d-71.1636494501026!3d42.35026926460096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b55e938e03f%3A0x3ece8052e188b07a!2sBloome%20Fruit%20Tea!5e0!3m2!1szh-CN!2sus!4v1765219971112!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <P>14 Brighton Ave, Boston, MA 02134</P>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94356.37316204674!2d-71.1636494501026!3d42.35026926460096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f3f4fc3d81%3A0x548e2ec7655a498b!2sBloome%20Fruit%20Tea!5e0!3m2!1szh-CN!2sus!4v1765220005043!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <h4>Signature Recommendations:</h4>
          <ul>
            <li>Signature Fruit Tea: The base is simmered with pure fruits, offering rich layers.</li>
            <li>Mango Pomelo W. Topping: Mango and grapefruit fruits combined with rice pudding.</li>
            <li>Brown Sugar Boba W. Milk: Brown sugar + boba.</li>
            <li>Brown Sugar Boba Matcha: Selected matcha combined with boba.</li>
            <li>Matcha Latte (Strawberry, Mango, Peach): Multiple flavors are available.</li>
          </ul>
        `},
        {
          id: 'zeroand',
          name: 'ZERO&',
          intro: 'A famous American fruit tea brand, known for "Natural Real Fruit Drinks + Tea Innovation." Features visual fruit beverages using Fresh Fruit + Coconut Milk/Milk/Tea.',
          locations: ['Newbury'],
          details: `
          <h4>Business Hours:</h4>
            <ul>
                <li>10:00 AM - 11:00 PM</li>
            </ul>
          <h4>Boston Location:</h4>
          <p>222a Newbury St, Boston, MA 02116</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11794.641811089796!2d-71.09137773567456!3d42.349762097392976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37bbce8d45fcb%3A0x3dc9b9964e07bab0!2sZERO%26%20Newbury%20Street!5e0!3m2!1szh-CN!2sus!4v1765220182502!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <h4>Signature Recommendations:</h4>
          <ul>
            <li>Strawberry Marble: (Slushie) Fresh Strawberry.</li>
            <li>Thai Me Up: Thai tea, Creme Brulee, Oreo Cruches.</li>
            <li>Ube Taro: Ube Purple Yam, Fresh Taro, Fresh Grade A Milk, 0 Caffeine.</li>
            <li>Teapuccino: Premium Oolong Tea, Fresh Grade A Milk.</li>
            <li>Creme Brulee Milk: Creme Brulee Torch with Black Sugar,Fresh Grade A Milk.</li>
          </ul>
        `}
];
document.addEventListener('DOMContentLoaded', () => {
  const allBrandCards = document.querySelectorAll('.brandCard'); 
  const searchInput = document.querySelector('.searchInput'); 
  const mainFilterButton = document.getElementById('filterButton'); 
  const filterOptionsDiv = document.getElementById('filterOptions');
  const filterOptionButtons = document.querySelectorAll('.filterOptionButton');
  const detailButtons = document.querySelectorAll('.ctaButton');
  const modalContainer = document.getElementById('modalContainer');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalContent = document.getElementById('modalContent');

  let currentSearchTerm = '';
  let currentFilterLocation = 'All';

  const checkIfBrandShouldBeVisible = (brandData) => {
    const lowerSearch = currentSearchTerm.toLowerCase();
    const nameMatch = brandData.name.toLowerCase().includes(lowerSearch);
    const introMatch = brandData.intro.toLowerCase().includes(lowerSearch);
    let searchMatchResult = false;
    if (nameMatch) {
      searchMatchResult = true;
    } else if (introMatch) {
      searchMatchResult = true; 
    }

    let locationMatchResult = false;
    if (currentFilterLocation === 'All') {
      locationMatchResult = true;
    } else if (brandData.locations.includes(currentFilterLocation)) {
      locationMatchResult = true;
    }
    if (searchMatchResult) {
      if (locationMatchResult) {
        return true;
      }
    } 
      return false;
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

    searchInput.addEventListener('input', (event) => {
      currentSearchTerm = event.target.value;
      updateCardDisplay();
    });
    mainFilterButton.addEventListener('click', () => {
      filterOptionsDiv.classList.toggle('show');
    });
    filterOptionButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const newLocation = event.target.getAttribute('data-location');
        currentFilterLocation = newLocation;
        mainFilterButton.textContent = `Location: ${newLocation}`;
        filterOptionsDiv.classList.remove('show');
        updateCardDisplay();
      });
    });
    detailButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const brandId = event.target.getAttribute('data-brand-id');
        const brandData = BRAND_DATA.find(brand => brand.id === brandId);
        if (brandData) {
          modalContent.innerHTML = brandData.details;
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
