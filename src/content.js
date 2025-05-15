function createHomeContent() {
    const content = document.createElement('div');
    content.className = 'home-content';

    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3';
    image.alt = 'Restaurant Interior';
    image.className = 'restaurant-image';

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Our Exquisite Dining Experience';

    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = 'Step into a world of culinary excellence where every dish tells a story. Our restaurant combines traditional flavors with modern innovation to create an unforgettable dining experience. From our carefully curated menu to our warm, inviting atmosphere, we pride ourselves on delivering exceptional service and creating memorable moments for our guests.';

    content.appendChild(image);
    content.appendChild(heading);
    content.appendChild(description);

    return content;
}

function createMenuContent() {
    const content = document.createElement('div');
    content.className = 'menu-content';

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    heading.className = 'menu-heading';

    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';

    const categories = [
        {
            name: 'Appetizers',
            items: [
                { name: 'Truffle Fries', price: '$12', description: 'Hand-cut fries with truffle oil and parmesan' },
                { name: 'Calamari', price: '$14', description: 'Crispy fried calamari with spicy marinara' },
                { name: 'Bruschetta', price: '$10', description: 'Toasted bread with fresh tomatoes and basil' }
            ]
        },
        {
            name: 'Main Courses',
            items: [
                { name: 'Filet Mignon', price: '$38', description: '8oz beef tenderloin with red wine reduction' },
                { name: 'Seafood Pasta', price: '$32', description: 'Fresh linguine with shrimp, mussels, and clams' },
                { name: 'Vegetable Risotto', price: '$26', description: 'Creamy arborio rice with seasonal vegetables' }
            ]
        },
        {
            name: 'Desserts',
            items: [
                { name: 'Tiramisu', price: '$10', description: 'Classic Italian coffee-flavored dessert' },
                { name: 'Chocolate Lava Cake', price: '$12', description: 'Warm chocolate cake with vanilla ice cream' },
                { name: 'Crème Brûlée', price: '$9', description: 'Classic French vanilla custard with caramelized sugar' }
            ]
        }
    ];

    categories.forEach(category => {
        const categorySection = document.createElement('section');
        categorySection.className = 'menu-category';

        const categoryHeading = document.createElement('h2');
        categoryHeading.textContent = category.name;
        categorySection.appendChild(categoryHeading);

        category.items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';

            const itemHeader = document.createElement('div');
            itemHeader.className = 'menu-item-header';

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;

            const itemPrice = document.createElement('span');
            itemPrice.textContent = item.price;
            itemPrice.className = 'price';

            itemHeader.appendChild(itemName);
            itemHeader.appendChild(itemPrice);

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            itemDescription.className = 'item-description';

            menuItem.appendChild(itemHeader);
            menuItem.appendChild(itemDescription);
            categorySection.appendChild(menuItem);
        });

        menuContainer.appendChild(categorySection);
    });

    content.appendChild(heading);
    content.appendChild(menuContainer);

    return content;
}

function createAboutContent() {
    const content = document.createElement('div');
    content.className = 'about-content';

    const heading = document.createElement('h1');
    heading.textContent = 'Our Story';
    heading.className = 'about-heading';

    const storySection = document.createElement('section');
    storySection.className = 'story-section';

    const storyText = document.createElement('p');
    storyText.className = 'story-text';
    storyText.textContent = 'Founded in 2010, our restaurant has been a cornerstone of culinary excellence in the community. Our journey began with a simple vision: to create a dining experience that combines traditional flavors with innovative techniques, all while maintaining the highest standards of quality and service.';

    const valuesSection = document.createElement('section');
    valuesSection.className = 'values-section';

    const valuesHeading = document.createElement('h2');
    valuesHeading.textContent = 'Our Values';
    valuesHeading.className = 'values-heading';

    const values = [
        {
            title: 'Quality',
            description: 'We source the finest ingredients and maintain rigorous standards in our kitchen.'
        },
        {
            title: 'Innovation',
            description: 'We constantly explore new culinary techniques while respecting traditional methods.'
        },
        {
            title: 'Hospitality',
            description: 'We believe in creating memorable experiences through exceptional service.'
        }
    ];

    const valuesList = document.createElement('div');
    valuesList.className = 'values-list';

    values.forEach(value => {
        const valueItem = document.createElement('div');
        valueItem.className = 'value-item';

        const valueTitle = document.createElement('h3');
        valueTitle.textContent = value.title;

        const valueDescription = document.createElement('p');
        valueDescription.textContent = value.description;

        valueItem.appendChild(valueTitle);
        valueItem.appendChild(valueDescription);
        valuesList.appendChild(valueItem);
    });

    valuesSection.appendChild(valuesHeading);
    valuesSection.appendChild(valuesList);

    content.appendChild(heading);
    content.appendChild(storySection);
    storySection.appendChild(storyText);
    content.appendChild(valuesSection);

    return content;
}

export { createHomeContent, createMenuContent, createAboutContent };
