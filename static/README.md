# 🍔 Krusty Krab 🦀

A fan website for the Krusty Krab restaurant from SpongeBob SquarePants, featuring both a static HTML version and a React version.

## 📁 Project Structure

- ⛓️‍💥 **Root level**: Contains the static HTML website (`index.html`, `style.css`, `media/`, `pages/`)
- **krusty-krab-react/**: Contains the React application version of the website

## 🌟 Features

### Static HTML Version
- Responsive design with mobile-friendly navigation
- Interactive menu with cart functionality
- Multi-page navigation (Home, About, Menu, Promotions, Careers, Newsletter)
- Food ordering system with add/remove items from cart
- Persistent cart using localStorage
- Contact form for customer inquiries

### React Version
- Modern React application with routing
- Component-based structure for maintainability
- Same core features as static version (menu, cart, navigation)

## Technologies Used

### Static Version
- HTML5
- CSS3
- JavaScript
- Font Awesome (for icons)

### React Version
- React
- ReactDOM
- React Router
- React Scripts (CRA template)

## Setup Instructions

### Static Website
Simply open `index.html` in any modern web browser to view and interact with the website.

### React Application
1. Navigate to the `krusty-krab-react` directory:
   ```bash
   cd krusty-krab-react
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Launch the development server:
   ```bash
   npm start
   ```
4. To create a production build:
   ```bash
   npm run build
   ```

## Usage

### Navigation
- Use the navigation bar at the top to switch between pages
- On mobile devices, tap the hamburger menu icon to access navigation links

### Cart Functionality
- Click on food items in the "Top Picks" section or menu pages to add them to your cart
- View your cart by clicking the shopping cart icon in the header
- Adjust quantities using the "+" and "-" buttons
- Remove items by setting quantity to zero or using the "Clear" button
- Proceed to checkout when ready (currently redirects to delivery page)

### Contact Form
- Fill out the form in the footer to send a message
- Required fields: Name, Email, Subject, Message
- Submission shows loading indicator while processing

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For questions or feedback, please open an issue in this repository.

