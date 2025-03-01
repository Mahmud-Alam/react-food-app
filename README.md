# 🍔 Tasty Burger - React Food App

## 📌 Project Overview
Tasty Burger is a modern food ordering web application built with React. It provides an interactive and visually appealing platform for users to explore, order, and enjoy delicious meals. The project uses Vite for a fast development environment and React Router for navigation.

---

## 🚀 Features
- 🍔 **Modern UI**: Built with Bootstrap and React-Bootstrap for a responsive design.
- 🔍 **Interactive Navigation**: Utilizes React Router for seamless navigation.
- 📃 **Dynamic Components**: Organized component structure for maintainability.
- 🌎 **SEO Optimized**: Proper meta tags for better search visibility.
- 🎨 **Styled with Bootstrap**: Pre-styled components for a polished look.
- ⚡ **Fast Performance**: Powered by Vite for rapid development and builds.
- ⭐ **Food Rating System**: Dynamically calculates star ratings based on user feedback.
- 🔼 **Smooth ScrollTop Button**: Allows users to smoothly scroll to the top of the page.
- 📂 **Dynamic Data Handling**: No hardcoded content; all data is managed through the `data` folder.

---

## 📸 Project Screenshots

### Home Page Hero Section
Here’s a preview of the **Hero Section** that welcomes users to the Tasty Burger experience. It showcases the branding and sets the tone for the entire site:

![Hero Section](https://raw.githubusercontent.com/Mahmud-Alam/react-food-app/main/public/assets/readme/hero.png)

### Menu Section
DEMO: Take a look at our delicious menu with various food options:

![Menu 1](https://raw.githubusercontent.com/Mahmud-Alam/react-food-app/main/public/assets/readme/menu-01.png)  

When you hover over any menu card, the 'Add to Cart' button smoothly slides up from the bottom:
![Menu 2](https://raw.githubusercontent.com/Mahmud-Alam/react-food-app/main/public/assets/readme/menu-02.png)

### Shop Section
DEMO: Explore our online store and mobile app where you can easily place your order:

![Shop Section](https://raw.githubusercontent.com/Mahmud-Alam/react-food-app/main/public/assets/readme/shop.png)

### Reviews Section
DEMO: Read feedback from our happy customers who loved the food:

![Reviews](https://raw.githubusercontent.com/Mahmud-Alam/react-food-app/main/public/assets/readme/review.png)

### Contact Section
DEMO: Here’s a preview of the Contact section where users can reach out for any inquiries:

![Contact Section](https://raw.githubusercontent.com/Mahmud-Alam/react-food-app/main/public/assets/readme/contact.png)

---

## 🏗️ Project Structure
```
src/
 ├── components/
 │   ├── cards/
 │   │   ├── Cards.jsx
 │   ├── home/
 │   │   ├── AboutSection.jsx
 │   │   ├── BrandSection.jsx
 │   │   ├── ContactSection.jsx
 │   │   ├── CopyrightSection.jsx
 │   │   ├── HeroSection.jsx
 │   │   ├── MenuSection.jsx
 │   │   ├── PromotionSection.jsx
 │   │   ├── ReviewSection.jsx
 │   │   ├── ShopSection.jsx
 │   ├── layouts/
 │   │   ├── Footer.jsx
 │   │   ├── Header.jsx
 │   │   ├── Layout.jsx
 │   ├── others/
 │   │   ├── ScrollTop.jsx
 │
 ├── data/
 │   ├── aboutData.jsx
 │   ├── burgerData.jsx
 │   ├── contentData.jsx
 │   ├── reviewData.jsx
 │
 ├── pages/
 │   ├── home/
 │   │   ├── index.jsx
 │
 ├── styles/
 │   ├── HeaderStyle.css
 │   ├── HomeStyle.css
 │
 ├── utils/
 │   ├── Rating.jsx
 │
 ├── App.jsx
 ├── main.jsx
 ├── index.css
```

---

## 🔧 Installation & Setup
### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository
```sh
git clone https://github.com/Mahmud-Alam/react-food-app.git
cd react-food-app
```

### Install Dependencies
```sh
npm install
```

### Install Required Packages
```sh
npm install react-router-dom@latest react-bootstrap bootstrap react-bootstrap-icons
```

### Run the Project
```sh
npm run dev
```
The app will be available at `http://localhost:5173/`.

### Build for Production
```sh
npm run build
```

### Lint the Code
```sh
npm run lint
```

---

## 🌐 Deployment on Vercel
The project is deployed on **Vercel** for fast and reliable hosting.

🔗 **Live Demo:** [Tasty Burger by Mahmud Alam](https://food-app-mahmud.vercel.app/)

---

## 🛠️ Technologies Used
- **React 19** - Component-based UI
- **React Router 7** - Navigation and routing
- **Bootstrap 5 & React-Bootstrap** - UI styling
- **React-Bootstrap Icons** - Icons for UI elements
- **Vite** - Fast development and build tool
- **ESLint** - Code quality and linting
- **React Hooks** - `useState`, `useEffect`, and `forwardRef` for state management and effects
- **Utility Functions**:
  - `Rating` Component: Handles food rating star counts dynamically based on user feedback.
  - `ScrollTop` Button: Provides smooth scrolling to the top of the page.
  - `Data Folder`: Contains all data for the project, ensuring dynamic handling with no hardcoded text.

---

## 📜 Meta Tags (SEO)
```html
<meta name="description" content="Enjoy fresh, delicious, and affordable meals with Tasty Burger by Mahmud Alam. Order online for fast delivery and delicious food!">
<meta name="keywords" content="Mahmud Alam, Tasty Burger, Pocket Kitchen, food delivery, delicious meals, online food order, fast delivery, affordable food">
<meta name="author" content="Mahmud Alam">
<meta name="language" content="English">
<meta name="robots" content="index, follow">
```

---

## 🏆 Author
**Mahmud Alam**  
- Portfolio Website: [Mahmud Alam](https://mahmudalam.com/)
- 📧 mahmudalam.official@gmail.com

---

## 🎉 Acknowledgments
- Thanks to the React and Bootstrap communities for making development easier.
- Special appreciation for Vite's incredible performance!

Enjoy coding! 🚀

