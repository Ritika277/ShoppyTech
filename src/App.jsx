import React from 'react';
import CategoryList from './CategoryList';
import SearchBar from './SearchBar';
import categoriesData from './categories.json';
import Footer from './Footer';
import Card from './Card'; // Import the Card component
import './App.css';

const App = () => {
  const handleSearch = (category) => {
    console.log('Selected Category:', category);
    // Implement search logic or redirection here
  };

  // Data for three cards
  const cardsData = [
    {
      title: 'Chair',
      imageUrl: 'assets/10.jpeg',

    },
    {
      title: 'Bat',
      imageUrl: 'assets/9.jpeg',

    },
    {
      title: 'Watch',
      imageUrl: 'assets/8.jpeg',

    },
    {
      title: 'Buds',
      imageUrl: 'assets/7.webp',

    },
    {
      title: 'Jeans',
      imageUrl: 'assets/6.jpeg',

    },
    {
      title: 'Toy',
      imageUrl: 'assets/5.jpeg',

    },
    {
      title: 'Tshirt',
      imageUrl: 'assets/4..jpeg',
    },
    {
      title: 'Mobile',
      imageUrl: 'assets/3.jpeg',
    },
    {
      title: 'Saree',
      imageUrl: 'assets/2.webp',
    },
    {
      title: 'Bag',
      imageUrl: 'assets/1.jpeg',

    }
  ];

  return (
    <div className="app">
      <header>
        <h1>ShopyTech</h1>
        <SearchBar categories={categoriesData.categories} onSearch={handleSearch} />
      </header>
      <main>
        <div className="category-container">
          {/* Rendering category lists */}
          {categoriesData.categories.map((category, index) => (
            <CategoryList key={index} category={category} />
          ))}
        </div>
        <div className="card-container">
          {/* Rendering three Card components */}
          {cardsData.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              imageUrl={card.imageUrl}
              description={card.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
